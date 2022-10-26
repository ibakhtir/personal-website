import { useRef } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import styled from "styled-components"

import useIsMounted from "../hooks/useIsMounted"
import { ms } from "../utils/constants"

export type SideProps = {
  children: React.ReactNode
  orientation: "left" | "right"
}

const Side: React.FC<SideProps> = ({ children, orientation }) => {
  const { transitionTimeout } = ms

  const isMounted = useIsMounted(transitionTimeout)

  const nodeRef = useRef(null)

  return (
    <StyledSide orientation={orientation}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            classNames="fade"
            timeout={transitionTimeout}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>{children}</div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledSide>
  )
}

const StyledSide = styled.div`
  position: fixed;
  top: ${(p: SideProps) => (p.orientation === "right" ? "0" : "auto")};
  right: ${(p: SideProps) => (p.orientation === "right" ? "50px" : "auto")};
  bottom: ${(p: SideProps) => (p.orientation === "left" ? "0" : "auto")};
  left: ${(p: SideProps) => (p.orientation === "left" ? "50px" : "auto")};
  z-index: 10;
  width: 40px;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }
`

export default Side
