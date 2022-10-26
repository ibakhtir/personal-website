import { useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

import { routes, ms } from "../utils/constants"
import useIsMounted from "../hooks/useIsMounted"

const NotFoundPage = () => {
  const { HERO_ROUTE } = routes
  const { pageLoadDelay, transitionTimeout } = ms

  const isMounted = useIsMounted(pageLoadDelay)

  const nodeRef = useRef(null)

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <StyledPageSection>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames="fadeup"
              timeout={transitionTimeout}
              nodeRef={nodeRef}
            >
              <div ref={nodeRef}>
                <StyledPageTitle>404</StyledPageTitle>
                <StyledPageSubtitle>Page Not Found</StyledPageSubtitle>
                <Link href={HERO_ROUTE} passHref>
                  <StyledPageButton aria-label="Go to home page">
                    Go Home
                  </StyledPageButton>
                </Link>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledPageSection>
    </>
  )
}

const StyledPageSection = styled.section`
  ${({ theme }) => theme.mixins.flexColumnCenter};
  min-height: 100vh;
  text-align: center;
`

const StyledPageTitle = styled.h2`
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
  color: var(--orange);
`

const StyledPageSubtitle = styled.h3`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
  color: var(--slate);
`

const StyledPageButton = styled.a`
  ${({ theme }) => theme.mixins.yellowButton}
  letter-spacing: 1px;
  margin-top: 40px;
`

export default NotFoundPage
