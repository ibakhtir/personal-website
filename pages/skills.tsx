import React, { useRef, createRef } from "react"
import Head from "next/head"
import Image from "next/image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"

import skillsList from "../data/skills"
import { ms } from "../utils/constants"
import useIsMounted from "../hooks/useIsMounted"

const Skills: React.FC = () => {
  const { pageLoadDelay, transitionTimeout } = ms

  const isMounted = useIsMounted(pageLoadDelay)

  const nodeRef = useRef([])
  nodeRef.current = skillsList.map((_, i) => nodeRef.current[i] ?? createRef())

  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>

      <StyledSkillsSection>
        <StyledSkillsList>
          <TransitionGroup component={null}>
            {isMounted &&
              skillsList.map(({ name, url, alt }, i) => (
                <CSSTransition
                  key={name}
                  classNames="fadeup"
                  timeout={transitionTimeout}
                  nodeRef={nodeRef.current[i]}
                >
                  <StyledSkillContainer
                    ref={nodeRef.current[i]}
                    style={{ transitionDelay: `${i + 1}00ms` }}
                  >
                    <Image src={url} alt={alt} width={80} height={80} />
                    <StyledSkillName>{name}</StyledSkillName>
                  </StyledSkillContainer>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </StyledSkillsList>
      </StyledSkillsSection>
    </>
  )
}

const StyledSkillsSection = styled.section`
  ${({ theme }) => theme.mixins.section}
`

const StyledSkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  justify-content: center;
  gap: 15px;
`

const StyledSkillContainer = styled.li`
  ${({ theme }) => theme.mixins.flexColumnCenter}
  overflow: hidden;
  padding: 1.5rem 2rem;
  border-radius: 4px;
  box-shadow: 0 10px 30px -15px var(--shadow);
  color: var(--light-slate);
  background-color: var(--light-blue);
  cursor: default;
`

const StyledSkillName = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-top: 15px;
`

export default Skills
