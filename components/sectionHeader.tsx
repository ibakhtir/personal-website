import { useRef } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

type SectionHeaderProps = {
  text: string
  isMounted: boolean
  timeout: number
  delay: number
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  text,
  isMounted,
  timeout,
  delay
}) => {
  const headerRef = useRef(null)

  return (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition
          classNames="fadeup"
          timeout={timeout}
          nodeRef={headerRef}
        >
          <StyledSectionHeader
            ref={headerRef}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {text}
          </StyledSectionHeader>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

const StyledSectionHeader = styled.h2`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  margin: 10px 0 40px;
  font-size: clamp(26px, 5vw, 32px);
  width: 100%;
  color: var(--orange);

  &:after {
    content: "";
    display: block;
    position: relative;
    top: 1px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--orange);

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 200px;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      width: 100%;
    }
  }
`

export default SectionHeader
