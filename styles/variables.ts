import { css } from "styled-components"

const variables = css`
  :root {
    --white: #e6f1ff;
    --blue: #1a2238;
    --light-blue: #212b47;
    --yellow: #f4db7d;
    --orange: #ff6a3d;
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;

    --shadow: rgba(2, 12, 27, 0.7);

    --font-sans: "Inter", sans-serif;
    --font-mono: "Roboto Mono", monospace;

    --content-width: 1000px;
    --border-radius: 4px;
    --header-height: 80px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default variables
