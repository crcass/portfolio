interface CssSelectors {
  activeClass: '&.active',
  hover: '&:hover';
  visited: '&:visited';
}

interface MediaQueries {
  prefersColorsSchemeDark: '@media(prefers-color-scheme: dark)'
}

export const cssSelectors: CssSelectors = {
  activeClass: '&.active',
  hover: '&:hover',
  visited: '&:visited',
}

export const mediaQueries: MediaQueries = {
  prefersColorsSchemeDark: '@media(prefers-color-scheme: dark)',
}
