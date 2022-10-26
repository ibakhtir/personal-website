import { useRouter } from "next/router"
import Link from "next/link"
import styled from "styled-components"

import { navLinks } from "../data/links"

import Side from "./side"
import Icon from "./icon"

const Nav: React.FC = () => {
  const { pathname } = useRouter()

  return (
    <Side orientation="right">
      <StyledNavList>
        <ul>
          {navLinks.map(({ name, route, label, classN }) => (
            <StyledNavItem key={name}>
              <Link href={route} passHref>
                <StyledNavLink
                  aria-label={label}
                  className={`${classN} ${
                    pathname === route ? "active" : null
                  }`}
                >
                  <Icon name={name} />
                </StyledNavLink>
              </Link>
            </StyledNavItem>
          ))}
        </ul>
      </StyledNavList>
    </Side>
  )
}

const StyledNavList = styled.nav`
  ${({ theme }) => theme.mixins.flexColumnCenter};

  &:before {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--yellow);
  }
`

const StyledNavItem = styled.li`
  &:first-of-type {
    margin-top: 20px;
  }
`

const StyledNavLink = styled.a`
  position: relative;
  padding: 10px 30px;
  color: var(--yellow);

  &:hover {
    svg {
      opacity: 0;
    }

    &:after {
      opacity: 1;
    }
  }

  &:after {
    content: "";
    display: block;
    font-size: 9px;
    letter-spacing: 2px;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 15px;
    width: 100%;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &.home-link {
    &:after {
      content: "HOME";
    }
  }

  &.about-link {
    &:after {
      content: "ABOUT";
    }
  }

  &.skills-link {
    &:after {
      content: "SKILLS";
    }
  }

  &.works-link {
    &:after {
      content: "WORKS";
    }
  }

  &.contact-link {
    &:after {
      content: "CONTACT";
    }
  }

  &.active {
    color: var(--orange);
  }

  svg {
    width: 25px;
    height: 25px;
    transition: all 0.3s ease-out;

    path {
      stroke-width: 1.5px;
    }
  }
`

export default Nav
