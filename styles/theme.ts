import mixins from "./mixins"

const breakpoints = {
  sm: "(max-width: 576px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 992px)",
  xl: "(max-width: 1200px)",
  xxl: "(max-width: 1400px)"
}

const theme = {
  breakpoints,
  mixins
}

export default theme
