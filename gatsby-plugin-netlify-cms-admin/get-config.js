const readYaml = require(`read-yaml-promise`)
const path = require("path")
let obj

module.exports = async function(){
	if(obj) return obj
	const { media_folder, public_folder, monorepo_folder = '' } = await readYaml(path.resolve(process.cwd(), 'static/admin/config.yml'))
	if(!media_folder ){
		console.error(`Missing media_folder in Netlify CMS config`)
		process.exit(1)
	}
	if(!public_folder ){
		console.error(`Missing public_folder in Netlify CMS config`)
		process.exit(1)
	}
	obj = {
		monoRepoFolder: monorepo_folder,
		mediaPath: media_folder,
		publicPath: public_folder,
	}
	return obj
}