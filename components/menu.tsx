import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styled from "styled-components"

import { navLinks, socialLinks } from "../data/links"
import useWindowSize from "../hooks/useWindowSize"
import useOnClickOutside from "../hooks/useOnClickOutside"
import useLockedBody from "../hooks/useLockedBody"

import Icon from "./icon"
import MenuButton from "./menuButton"

const Menu: React.FC = () => {
  const { pathname } = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)

  const menuRef = useRef(null)

  const { width } = useWindowSize()

  useEffect(() => {
    if (width > 992) {
      setMenuOpen(false)
    }
  }, [width])

  useOnClickOutside(menuRef, () => setMenuOpen(false))

  useLockedBody(menuOpen)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <StyledHeader>
      <div ref={menuRef}>
        <MenuButton menuOpen={menuOpen} onToggle={toggleMenu} />
        <StyledMenu menuOpen={menuOpen}>
          <StyledNavContainer>
            <StyledNavList>
              {navLinks.map(({ name, route, label }) => (
                <li key={name}>
                  <Link href={route} passHref>
                    <StyledNavLink
                      aria-label={label}
                      className={`${pathname === route ? "active" : null}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                    </StyledNavLink>
                  </Link>
                </li>
              ))}
            </StyledNavList>
            <StyledSocialList>
              {socialLinks.map(({ name, url, label }) => (
                <li key={name}>
                  <StyledSocialLink
                    href={url}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={name} />
                  </StyledSocialLink>
                </li>
              ))}
            </StyledSocialList>
          </StyledNavContainer>
        </StyledMenu>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: none;

  @media ${(props) => props.theme.breakpoints.lg} {
    ${({ theme }) => theme.mixins.flexRowCenter}
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: var(--header-height);
    padding: 0 25px;
    backdrop-filter: blur(10px);
    background-color: rgba(26, 34, 56, 0.85);
  }
`

const StyledMenu = styled.aside`
  ${({ theme }) => theme.mixins.flexColumnCenter}
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  padding: 80px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0;
  box-shadow: -10px 0px 30px -15px var(--shadow);
  background-color: var(--light-blue);

  visibility: ${(p: { menuOpen: boolean }) =>
    p.menuOpen ? "visible" : "hidden"};

  transform: ${(p: { menuOpen: boolean }) =>
    p.menuOpen ? "translateX(0vw)" : "translateX(100vw)"};

  transition: var(--transition);
`

const StyledNavContainer = styled.nav`
  font-family: var(--font-mono);
  font-size: 22px;
  width: 100%;
  text-align: center;
  color: var(--lightest-slate);
`

const StyledNavList = styled.ul`
  margin-bottom: 80px;
`

const StyledNavLink = styled.a`
  padding: 10px;
  transition: var(--transition);

  &:hover {
    color: var(--orange);
  }

  &.active {
    color: var(--orange);
  }
`

const StyledSocialList = styled.ul`
  ${({ theme }) => theme.mixins.flexRowCenter}
`

const StyledSocialLink = styled.a`
  padding: 5px 10px;
  transition: var(--transition);

  &:hover {
    color: var(--orange);
  }
`

export default Menu
