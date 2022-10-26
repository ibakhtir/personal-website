import React, { useRef, createRef } from "react"
import Head from "next/head"
import Image from "next/image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

import projectsList from "../data/projects"
import { ms } from "../utils/constants"
import useIsMounted from "../hooks/useIsMounted"
import useWindowSize from "../hooks/useWindowSize"
import Icon from "../components/icon"
import SectionHeader from "../components/sectionHeader"

const Works: React.FC = () => {
  const { pageLoadDelay, transitionTimeout } = ms

  const isMounted = useIsMounted(pageLoadDelay)

  const { width } = useWindowSize()

  const nodeRef = useRef([])
  nodeRef.current = projectsList.map(
    (_, i) => nodeRef.current[i] ?? createRef()
  )

  return (
    <>
      <Head>
        <title>Works</title>
      </Head>

      <StyledWorksSection>
        <SectionHeader
          text="Selected Projects"
          isMounted={isMounted}
          timeout={transitionTimeout}
          delay={100}
        />

        <ul>
          <TransitionGroup component={null}>
            {isMounted &&
              projectsList.map(
                (
                  {
                    id,
                    title,
                    image,
                    alt,
                    github,
                    external,
                    tech,
                    description
                  },
                  i
                ) => (
                  <CSSTransition
                    key={id}
                    classNames="fadeup"
                    timeout={transitionTimeout}
                    nodeRef={nodeRef.current[i]}
                  >
                    <StyledProject
                      ref={nodeRef.current[i]}
                      style={{ transitionDelay: `${i + 2}00ms` }}
                    >
                      <div className="project-content">
                        <h3 className="project-title">
                          <a
                            href={external}
                            aria-label="Go to Pizza shop website"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {title}
                          </a>
                        </h3>

                        <div className="project-description">
                          <p>{description}</p>
                        </div>

                        <ul className="project-tech-list">
                          {tech.map((t, i) => (
                            <li key={t + i}>{t}</li>
                          ))}
                        </ul>

                        <div className="project-links">
                          <a
                            href={github}
                            aria-label="Go to Github"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon name="Github" />
                          </a>
                          <a
                            href={external}
                            aria-label="Go to Pizza shop website"
                            target="_blank"
                            rel="noreferrer"
                            className="external"
                          >
                            <Icon name="External" />
                          </a>
                        </div>
                      </div>

                      <div className="project-image">
                        <a
                          href={external}
                          aria-label="Go to Pizza shop website"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={image}
                            alt={alt}
                            layout={width > 768 ? "responsive" : "fill"}
                            placeholder="blur"
                          />
                        </a>
                      </div>
                    </StyledProject>
                  </CSSTransition>
                )
              )}
          </TransitionGroup>
        </ul>
      </StyledWorksSection>
    </>
  )
}

const StyledWorksSection = styled.section`
  ${({ theme }) => theme.mixins.section}
`

const StyledProject = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  align-items: center;
  grid-gap: 10px;
  margin-bottom: 70px;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 30px;
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media ${(props) => props.theme.breakpoints.lg} {
        grid-column: 5 / -1;
      }

      @media ${(props) => props.theme.breakpoints.md} {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }

      @media ${(props) => props.theme.breakpoints.sm} {
        padding: 25px 25px 20px;
      }
    }

    .project-tech-list {
      justify-content: flex-end;

      @media ${(props) => props.theme.breakpoints.md} {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media ${(props) => props.theme.breakpoints.md} {
          margin: 0 10px 5px 0;
        }
      }
    }

    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media ${(props) => props.theme.breakpoints.md} {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }

    .project-image {
      grid-column: 1 / 8;

      @media ${(props) => props.theme.breakpoints.md} {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media ${(props) => props.theme.breakpoints.lg} {
      grid-column: 1 / 9;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      ${({ theme }) => theme.mixins.flexColumnCenter}
      align-items: flex-start;
      grid-column: 1 / -1;
      height: 100%;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 30px 25px 20px;
    }
  }

  .project-title {
    font-size: clamp(24px, 5vw, 28px);

    a {
      color: var(--lightest-slate);
      transition: var(--transition);

      &:hover,
      &:focus {
        color: var(--orange);
      }
    }

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-blue);
    color: var(--light-slate);

    @media ${(props) => props.theme.breakpoints.md} {
      padding: 20px 0;
      box-shadow: none;
      background-color: transparent;
      color: var(--lightest-slate);

      &:hover {
        box-shadow: none;
      }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    padding: 0;
    margin: 25px 0 10px;

    li {
      font-family: var(--font-mono);
      font-size: 14px;
      white-space: nowrap;
      margin: 0 20px 5px 0;
      color: var(--light-slate);
    }

    @media ${(props) => props.theme.breakpoints.md} {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;

    a {
      ${({ theme }) => theme.mixins.flexRowCenter};
      padding: 10px;
      color: var(--yellow);
      transition: var(--transition);

      &:hover {
        color: var(--orange);
      }

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -3px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media ${(props) => props.theme.breakpoints.md} {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      position: relative;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      border-radius: var(--border-radius);
      background-color: var(--yellow);
      transition: var(--transition);

      @media ${(props) => props.theme.breakpoints.md} {
        vertical-align: baseline;
      }

      &:hover,
      &:focus {
        background-color: transparent;
        outline: 0;

        &:before,
        img {
          background-color: transparent;
          filter: none;
        }
      }

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        background-color: var(--blue);
        transition: var(--transition);
        mix-blend-mode: screen;
      }

      img {
        display: block;
        width: 100%;
        border-radius: var(--border-radius);
        transition: var(--transition);
        mix-blend-mode: multiply;
        filter: grayscale(75%) contrast(1) brightness(90%);

        @media ${(props) => props.theme.breakpoints.md} {
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(1) brightness(50%);
        }
      }
    }
  }
`

export default Works
