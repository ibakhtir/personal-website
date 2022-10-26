import styled from "styled-components"

import Menu from "./menu"
import Nav from "./nav"
import Social from "./social"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <StyledWrapper>
    <Menu />
    <Nav />
    <StyledContainer id="content">{children}</StyledContainer>
    <Social />
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  padding: 0 150px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0 100px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 50px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 25px;
  }
`

const StyledContainer = styled.main`
  max-width: var(--content-width);
  min-height: 100vh;
  margin: 0 auto;
`

export default Layout
