import { useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

import { ms } from "../utils/constants"
import useIsMounted from "../hooks/useIsMounted"
import personalImg from "../public/images/person/avatar.jpg"
import SectionHeader from "../components/sectionHeader"

const About: React.FC = () => {
  const { pageLoadDelay, transitionTimeout } = ms

  const isMounted = useIsMounted(pageLoadDelay)

  const contentRef = useRef(null)

  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <StyledAboutSection>
        <SectionHeader
          text="About Me"
          isMounted={isMounted}
          timeout={transitionTimeout}
          delay={100}
        />

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames="fadeup"
              timeout={transitionTimeout}
              nodeRef={contentRef}
            >
              <StyledAboutContent
                ref={contentRef}
                style={{ transitionDelay: `${200}ms` }}
              >
                <div>
                  <StyledParagraph>
                    My name is Vladyslav and I enjoy creating things that live
                    on the internet. My interest in web development started back
                    in October 2021 when I tried to display Hello World on the
                    screen. After that, I decided to connect my life with web
                    development.
                  </StyledParagraph>
                  <StyledParagraph>
                    First I studied HTML and CSS myself. Then I completed a
                    front-end development course where I learned JavaScript,
                    React, Node.js and others. After the course, every day I try
                    to improve my skills and learn new technologies. I like to
                    write clean understandable code and get modern user-friendly
                    interfaces as a result.
                  </StyledParagraph>
                  <StyledParagraph>
                    I&apos;m a very ambitious front-end developer looking for a
                    role in an established IT company with the opportunity to
                    work with the latest technologies on challenging and diverse
                    projects.
                  </StyledParagraph>
                </div>
                <StyledImageContainer>
                  <StyledImageWrapper>
                    <Image
                      src={personalImg}
                      alt="Person"
                      width={300}
                      height={300}
                      layout="responsive"
                      placeholder="blur"
                    />
                  </StyledImageWrapper>
                </StyledImageContainer>
              </StyledAboutContent>
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledAboutSection>
    </>
  )
}

const StyledAboutSection = styled.section`
  ${({ theme }) => theme.mixins.section}
  max-width: 900px;
`

const StyledAboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`

const StyledParagraph = styled.p`
  margin-bottom: 20px;
  color: var(--light-slate);
`

const StyledImageContainer = styled.div`
  position: relative;
  max-width: 300px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 50px auto 0;
    width: 70%;
  }
`

const StyledImageWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: var(--yellow);

  img {
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(50%) contrast(1);
    border-radius: var(--border-radius);
  }

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  &:before {
    top: 0;
    left: 0;
    mix-blend-mode: screen;
    background-color: var(--blue);
  }

  &:after {
    border: 2px solid var(--orange);
    top: 20px;
    left: 20px;
    z-index: -1;
  }

  &:hover,
  &:focus {
    outline: 0;

    &:after {
      top: 15px;
      left: 15px;
    }

    img {
      mix-blend-mode: normal;
      filter: none;
    }
  }
`

export default About
