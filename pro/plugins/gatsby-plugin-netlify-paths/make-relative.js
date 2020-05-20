const { relative, dirname } = require(`path`)
const getConfig = require(`./get-config`)
const slash = require(`slash`)

const cwd = process.cwd()

module.exports = async (markdownPath, imagePath, options) => {
	const { mediaPath, publicPath } = await getConfig(options)
	if(
		typeof imagePath !== `string` ||
		imagePath.indexOf(`${publicPath}/`) !== 0
	){
		return imagePath
	}
	markdownPath = dirname(markdownPath).replace(`${cwd}/`, ``)
//	console.log("publicPath: "+ publicPath, "mediaPath: " + mediaPath, cwd, __dirname)
//	console.log("imagePath before replace", imagePath)
	//imagePath = imagePath.replace(publicPath, mediaPath)
	imagePath = imagePath.replace(publicPath, "static/images")
	console.log("imagePath after replace", imagePath)
	const newPath = relative(markdownPath, imagePath)
	console.log("relative place from md file", newPath)
	
/* 
	publicPath: /images mediaPath: static/images
	imagePath before replace /images/village.png
	imagePath after replace static/images/village.png
	relative place from md file ../../static/images/village.png
	
	publicPath: /images mediaPath: pro/static/images
	imagePath before replace /images/village.png
	imagePath after replace pro/static/images/village.png
	relative place from md file ../../pro/static/images/village.png

*/

	return slash(newPath)
}