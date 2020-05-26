const { relative, dirname } = require(`path`)
const getConfig = require(`./get-config`)
const slash = require(`slash`)

const cwd = process.cwd()

module.exports = async (markdownPath, imagePath, options) => {
	const { monorepoFolder } = options
	const { mediaPath, publicPath } = await getConfig(options)
	if(
		typeof imagePath !== `string` ||
		imagePath.indexOf(`${publicPath}/`) !== 0
	){
		return imagePath
	}
	markdownPath = dirname(markdownPath).replace(`${cwd}/`, ``)
	const staticImageFolder = !!monorepoFolder
		? mediaPath.replace(`${monorepoFolder}/`, '')
		: mediaPath
	imagePath = imagePath.replace(publicPath, staticImageFolder)
	const newPath = relative(markdownPath, imagePath)
	return slash(newPath)
}