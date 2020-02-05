import Typography from 'typography'
import usWebDesignStandardsTheme from 'typography-theme-us-web-design-standards'

usWebDesignStandardsTheme.scaleRatio = 2
usWebDesignStandardsTheme.overrideThemeStyles = (
  { adjustFontSizeTo },
  options
) => ({
  '.intro-text': {
    ...adjustFontSizeTo('26px'),
  },
  '.offset-image-text': {
    ...adjustFontSizeTo('35px'),
  },
  '@media only screen and (max-width:900px)': {
    'h1,h2,h3,h4,h5,h6,.intro-text': {
      ...adjustFontSizeTo('22px'),
    },
  },
})

const typography = new Typography(usWebDesignStandardsTheme)

export default typography
