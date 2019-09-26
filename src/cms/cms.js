/**
 * The default export of `netlify-cms` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from "netlify-cms"

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
import { CTAControl, CTAPreview } from "./CTAWidget"
import { ImageControl, ImagePreview } from "./ImageWidget"
// import { boundedImageControlMaker, boundedImagePreviewMaker } from './withCMS'
//import { withGlobalDecorator } from './withGlobalDecorator'
//import { SectionPreview } from './SectionPreview'

/**
 * Register a template for add global decorators
 */
//CMS.registerPreviewTemplate("modules", withGlobalDecorator(SectionPreview))

/**
 * Register the imported widget:
 */
CMS.registerWidget("cta", CTAControl, CTAPreview)
CMS.registerWidget("imageInHeader", ImageControl, ImagePreview)