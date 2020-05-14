/**
 * The default export of `netlify-cms-app` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from "netlify-cms-app"

/**
 * Any imported styles will automatically be applied to the editor preview
 * pane, there is no need to use `registerPreviewStyle` for imported styles.
 * All of the example imports below would result in styles being applied to the
 * preview pane.
 */
// import "module-that-imports-styles.js"
// import "styles.scss"
// import "../other-styles.css"

  // Custom Widgets
import { ImageControl, ImagePreview } from "./ImageWidget"
// import { boundedImageControlMaker, boundedImagePreviewMaker } from './withCMS'
//import { withGlobalDecorator } from './withGlobalDecorator'
//import { SectionPreview } from './SectionPreview'

/**
 * Register a template for add global decorators
 */
import { ModulePreview } from './ModulePreview'
import { BlogPreview } from './BlogPreview'
CMS.registerPreviewTemplate("modules", ModulePreview)
CMS.registerPreviewTemplate("blog", BlogPreview)

/**
 * Register the imported widget:
 */
//CMS.registerWidget("cta", CTAControl, CTAPreview)
CMS.registerWidget("imageInHeader", ImageControl, ImagePreview)