import React, { useRef } from "react"
import Head from "next/head"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

import { ms } from "../utils/constants"
import useIsMounted from "../hooks/useIsMounted"
import SectionHeader from "../components/sectionHeader"
import ContactForm from "../components/contactForm"

const Contact: React.FC = () => {
  const { pageLoadDelay, transitionTimeout } = ms

  const isMounted = useIsMounted(pageLoadDelay)

  const textRef = useRef(null)
  const formRef = useRef(null)

  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <StyledContactSection>
        <SectionHeader
          text="Contact Me"
          isMounted={isMounted}
          timeout={transitionTimeout}
          delay={100}
        />

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames="fadeup"
              timeout={transitionTimeout}
              nodeRef={textRef}
            >
              <StyledContactText
                ref={textRef}
                style={{ transitionDelay: `${200}ms` }}
              >
                Feel free to contact me by submitting the form below and I will
                get back to you as soon as possible
              </StyledContactText>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames="fadeup"
              timeout={transitionTimeout}
              nodeRef={formRef}
            >
              <StyledFormWrapper
                ref={formRef}
                style={{ transitionDelay: `${300}ms` }}
              >
                <ContactForm />
              </StyledFormWrapper>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledContactSection>
    </>
  )
}

const StyledContactSection = styled.section`
  ${({ theme }) => theme.mixins.section}
  max-width: 540px;
  margin: 0 auto;

  h2 {
    &:after {
      width: 100%;
    }
  }
`

const StyledContactText = styled.p`
  font-size: 18px;
  text-align: center;
  padding-bottom: 20px;
  color: var(--light-slate);
`

const StyledFormWrapper = styled.div`
  width: 100%;
`

export default Contact
