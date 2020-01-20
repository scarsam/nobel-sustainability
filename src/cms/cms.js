import CMS from 'netlify-cms-app'

import ContactPagePreview from './preview-templates/ContactPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'

// CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
