import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-pages/AboutPagePreview'
import ContactPagePreview from './preview-pages/ContactPagePreview'
import HomePagePreview from './preview-pages/HomePagePreview'
import HistoryPagePreview from './preview-pages/HistoryPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('history', HistoryPagePreview)
