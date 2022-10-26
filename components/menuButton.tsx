import styled from "styled-components"

type MenuButtonProps = {
  menuOpen: boolean
  onToggle: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ menuOpen, onToggle }) => (
  <StyledMenuButton type="button" aria-label="Menu button" onClick={onToggle}>
    <StyledButtonBox>
      <StyledLine menuOpen={menuOpen} />
      <StyledLine menuOpen={menuOpen} />
      <StyledLine menuOpen={menuOpen} />
    </StyledButtonBox>
  </StyledMenuButton>
)

const StyledMenuButton = styled.button`
  position: relative;
  z-index: 10;
  margin: 3px;
  padding: 5px 3px 3px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const StyledButtonBox = styled.div`
  position: relative;
  text-align: left;
  width: 34px;
  height: 26px;
`

const StyledLine = styled.span`
  position: absolute;
  right: 0;
  width: 100%;
  height: 3px;
  border-radius: var(--border-radius);
  background-color: var(--yellow);

  &:nth-child(1) {
    top: ${(p: { menuOpen: boolean }) => (p.menuOpen ? "10px" : "0px")};

    transform: ${(p: { menuOpen: boolean }) =>
      p.menuOpen ? "rotate(45deg)" : "rotate(0deg)"};

    transition: ${(p: { menuOpen: boolean }) =>
      p.menuOpen
        ? "top 0.15s, transform 0.15s 0.15s"
        : "top 0.15s 0.15s, transform 0.15s"};
  }

  &:nth-child(2) {
    top: 10px;

    width: ${(p: { menuOpen: boolean }) => (p.menuOpen ? "100%" : "30px")};

    transform: ${(p: { menuOpen: boolean }) =>
      p.menuOpen ? "rotate(-45deg)" : "rotate(0deg)"};

    transition: ${(p: { menuOpen: boolean }) =>
      p.menuOpen
        ? "top 0.15s, transform 0.15s 0.15s"
        : "top 0.15s 0.15s, transform 0.15s"};
  }

  &:nth-child(3) {
    top: ${(p: { menuOpen: boolean }) => (p.menuOpen ? "10px" : "20px")};

    width: ${(p: { menuOpen: boolean }) => (p.menuOpen ? "100%" : "26px")};

    transform: ${(p: { menuOpen: boolean }) =>
      p.menuOpen ? "rotate(-45deg)" : "rotate(0deg)"};

    transition: ${(p: { menuOpen: boolean }) =>
      p.menuOpen
        ? "top 0.15s, transform 0.15s 0.15s"
        : "top 0.15s 0.15s, transform 0.15s"};
  }
`

export default MenuButton
