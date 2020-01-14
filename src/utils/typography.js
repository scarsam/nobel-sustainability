import Typography from "typography"
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards"

usWebDesignStandardsTheme.scaleRatio = 3
usWebDesignStandardsTheme.overrideThemeStyles = (
  { adjustFontSizeTo },
  options
) => ({
  ".intro-text": {
    ...adjustFontSizeTo("26px"),
  },
  ".offset-image-text": {
    ...adjustFontSizeTo("35px"),
  },
})

const typography = new Typography(usWebDesignStandardsTheme)

export default typography
