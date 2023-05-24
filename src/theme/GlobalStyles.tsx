import React from 'react'
import { css, Global } from '@emotion/react'

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@100;200;300;400;500;600;700;800;900;1000&display=swap');

  #root {
    height: 100%;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  a,
  a:hover,
  a:visited,
  a:focus {
    color: inherit;
    text-decoration: inherit;
  }
`

export const GlobalStyles = () => {
  return <Global styles={styles} />
}
