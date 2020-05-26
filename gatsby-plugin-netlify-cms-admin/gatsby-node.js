const makeRelative = require(`./make-relative`)
const path = require("path")
const fs = require("fs")
const readYaml = require("read-yaml")
const writeYaml = require("write-yaml")

exports.onPreInit = async function(_, {cmsConfigPath, monorepoFolder, adminConfig}) {
	return new Promise(function(resolve){
		const cwd = path.resolve(process.cwd())
		// Create dummy content if none
		if (!fs.existsSync(`${cwd}/content`)) {
			fs.mkdirSync(`${cwd}/content`)
			fs.mkdirSync(`${cwd}/content/blog`)
			fs.copyFileSync(path.resolve(`${__dirname}/defaultContent/blog/__placeholder__.md`), `${cwd}/content/blog/__placeholder__.md`)
			fs.mkdirSync(`${cwd}/content/modules`)
			fs.copyFileSync(path.resolve(`${__dirname}/defaultContent/modules/__placeholder__.md`), `${cwd}/content/modules/__placeholder__.md`)
			fs.mkdirSync(`${cwd}/content/pages`)
			fs.copyFileSync(path.resolve(`${__dirname}/defaultContent/pages/__placeholder__.md`), `${cwd}/content/pages/__placeholder__.md`)
			if (!fs.existsSync(`${cwd}/static/images/logo.png`)) {
				if (!fs.existsSync(`${cwd}/static`)) {
					fs.mkdirSync(`${cwd}/static`)
				}
				if (!fs.existsSync(`${cwd}/static/images`)) {
					fs.mkdirSync(`${cwd}/static/images`)
				}
				fs.copyFileSync(path.resolve(`${__dirname}/defaultContent/logo.png`), `${cwd}/static/images/logo.png`)
			}
		}
		// Get the config
		let config = readYaml.sync(
			fs.existsSync(cmsConfigPath)
				? path.resolve(cmsConfigPath)
				: `${__dirname}/config.yml`
			)

		// The user is in a monorepo, we need to prepend the folder to the paths in config.yml
		if (monorepoFolder) {
			// Update media_folder
			config.media_folder = `${monorepoFolder}/${config.media_folder}`
			// Update collection folder paths
			config.collections.forEach(collection => {
				collection.folder = `${monorepoFolder}/${collection.folder}`
			})
		}

		// Merge the user config passed in options
		if (adminConfig) {
			config = {
				...config,
				...adminConfig
			}
		}

		// Write the config in the static folder
		if (!fs.existsSync(`${cwd}/static/admin/config.yml`)) {
			if (!fs.existsSync(`${cwd}/static`)) {
				fs.mkdirSync(`${cwd}/static`)
			}
			if (!fs.existsSync(`${cwd}/static/admin`)) {
				fs.mkdirSync(`${cwd}/static/admin`)
			}
			writeYaml.sync(`${cwd}/static/admin/config.yml`, config)
		}

		resolve()
	})
}

const walkObject = async (obj, iteratee, ignoreKeys = []) => {
	for (let prop in obj) {
		if ( ignoreKeys.indexOf(prop) !== -1 ) {
			continue;
		}

		switch (typeof obj[prop]) {
			case 'array':
				obj[prop] = await walkArray(obj[prop], iteratee, ignoreKeys)
				break;
			case 'object':
				obj[prop] = await walkObject(obj[prop], iteratee, ignoreKeys)
				break;
			default:
				obj[prop] = await iteratee(obj[prop])
		}
	}

	return obj
}

const walkArray = async (arr, iteratee, ignoreKeys = []) => {
	return arr.map( async (i) => {
		let result

		switch (typeof i) {
			case 'array':
				result = await walkArray(i, iteratee, ignoreKeys)
				break;
			case 'object':
				result = await walkObject(i, iteratee, ignoreKeys)
				break;
			default:
				result = await iteratee(i)
		}

		return result
	} )
}

exports.onCreateNode = async ({ node, getNode }, options) => {
	const commonProps = ['id', '_PARENT', 'parent', 'children', 'internal']

	let nodeAbsPath

	const iteratee = async (val) => {
		return await makeRelative(nodeAbsPath, val, options)
	}
	
	if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
		nodeAbsPath = node.fileAbsolutePath

		if(typeof node.frontmatter === `object`) {
			await walkObject(node.frontmatter, iteratee, commonProps)
		}
	} else if (/^\w+(Yaml|Json)$/.test(node.internal.type) ) {
		nodeAbsPath = getNode(node.parent).absolutePath

		await walkObject(node, iteratee, commonProps)
	}
}