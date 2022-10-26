import styled from "styled-components"

import { socialLinks } from "../data/links"

import Side from "./side"
import Icon from "./icon"

const Social: React.FC = () => (
  <Side orientation="left">
    <StyledSocialList>
      {socialLinks.map(({ name, url, label }) => (
        <StyledSocialItem key={name}>
          <StyledSocialLink
            href={url}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={name} />
          </StyledSocialLink>
        </StyledSocialItem>
      ))}
    </StyledSocialList>
  </Side>
)

const StyledSocialList = styled.ul`
  ${({ theme }) => theme.mixins.flexColumnCenter};

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--yellow);
  }
`

const StyledSocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`

const StyledSocialLink = styled.a`
  padding: 10px;
  color: var(--yellow);
  transition: var(--transition);

  &:hover,
  &:focus {
    color: var(--orange);
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export default Social
