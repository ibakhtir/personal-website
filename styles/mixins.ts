import { css } from "styled-components"

const mixins = {
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  flexColumnCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  section: css`
    margin: 0 auto;
    padding: 100px 0 50px;
  `,

  yellowButton: css`
    position: relative;
    z-index: 1;
    line-height: 1;
    padding: 1.25rem 1.75rem;
    border: 0.5px solid var(--yellow);
    color: var(--yellow);
    background-color: transparent;
    cursor: pointer;

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -2;
    }

    &:before {
      content: "";
      width: 0%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      background-color: var(--yellow);
      transition: var(--transition);
    }

    &:hover,
    &:focus {
      color: var(--blue);

      &:before {
        width: 100%;
      }
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--shadow);
    }
  `
}

export default mixins
