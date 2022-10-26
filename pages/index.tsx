import { useRef, createRef } from "react"
import Link from "next/link"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

import { routes, ms } from "../utils/constants"
import useIsMounted from "../hooks/useIsMounted"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const { WORKS_ROUTE } = routes
  const { pageLoadDelay, transitionTimeout } = ms

  const isMounted = useIsMounted(pageLoadDelay)

  const one = <StyledFirstLine>Hi, my name is</StyledFirstLine>
  const two = <StyledSecondLine>Vlad Bakhtir.</StyledSecondLine>
  const three = <StyledThirdLine>I build things for the web.</StyledThirdLine>

  const four = (
    <StyledFourthLine>
      I&apos;m a front-end developer specializing in building apps and websites.
      Currently, I&apos;m open to new job opportunities.
    </StyledFourthLine>
  )

  const five = (
    <Link href={WORKS_ROUTE} passHref>
      <StyledFifthLine aria-label="Go to works page">
        View my works
      </StyledFifthLine>
    </Link>
  )

  const lines = [one, two, three, four, five]

  const nodeRef = useRef([])
  nodeRef.current = lines.map((_, i) => nodeRef.current[i] ?? createRef())

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          lines.map((line, i) => (
            <CSSTransition
              key={i}
              classNames="fadeup"
              timeout={transitionTimeout}
              nodeRef={nodeRef.current[i]}
            >
              <div
                ref={nodeRef.current[i]}
                style={{ transitionDelay: `${i + 1}00ms` }}
              >
                {line}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexColumnCenter};
  align-items: flex-start;
  min-height: 100vh;
`

const StyledFirstLine = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  letter-spacing: 0.5px;
  color: var(--slate);
`

const StyledSecondLine = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  line-height: 1.1;
  color: var(--orange);
`

const StyledThirdLine = styled.h3`
  font-size: clamp(35px, 7vw, 70px);
  font-weight: 600;
  line-height: 1.1;
  margin-top: 10px;
  color: var(--slate);
`

const StyledFourthLine = styled.p`
  max-width: 540px;
  margin-top: 20px;
  color: var(--slate);
`

const StyledFifthLine = styled.a`
  ${({ theme }) => theme.mixins.yellowButton}
  letter-spacing: 0.7px;
  margin-top: 50px;
`

export default Home
