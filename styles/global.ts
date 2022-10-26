import { createGlobalStyle } from "styled-components"

import normalize from "./normalize"
import variables from "./variables"
import transitions from "./transitions"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${variables};
  ${transitions};
 
  body {
    font-family: var(--font-sans);
    background-color: var(--blue);

    &.blur {
      header {
        background-color: transparent;
      }

      #content > * {
        pointer-events: none;
        user-select: none;
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
      }
    }
  }

  /* Scrollbar Styles */

  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--blue);
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid var(--blue);
    background-color: var(--dark-slate);
  }
`

export default GlobalStyle
