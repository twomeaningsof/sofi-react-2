import styled from "styled-components";
import { not } from "ramda";
import Navbar, { HamburgerMenu, NavigationLink } from "../Navbar";
import PageTitle from "../PageTitle";
import Footer, { FooterColumn, FooterSeparator } from "../Footer";
import Link from "../Link";
import Button from "../Button";
import { device } from "../../constants/device";
import handleToggleSidebar from "../../utils/handleToggleSidebar";

const LayoutWrapper = styled.div`
  @media screen {
    display: none;
  }

  @media screen and ${device.mobile} {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background-color: #2a9d8f;
  }
`;

const LayoutHeader = styled.header`
  @media screen and ${device.mobile} {
    height: 170px;
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.137);
  }

  @media screen and ${device.tablet} {
    flex-wrap: wrap;
  }
`;

const ContentWrapper = styled.main`
  @media screen and ${device.mobile} {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
    margin: 50px 40px 0 40px;
  }
`;

const Layout = ({ pageTitle, sidebarToggled, setSidebarToggled, children }) => {
  return (
    <LayoutWrapper>
      <LayoutHeader>
        <Navbar>
          <HamburgerMenu />
          <NavigationLink path="/">Players</NavigationLink>
          <NavigationLink path="/teams">Teams</NavigationLink>
        </Navbar>
        <PageTitle>
          <p>
            <abbr title="Ultimate Frisbee">UF</abbr> {pageTitle}
          </p>
        </PageTitle>
      </LayoutHeader>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer>
        <FooterColumn>
          <li>
            <Link>Link1</Link>
          </li>
          <li>
            <Link>Link2</Link>
          </li>
          <li>
            <Link>Link3</Link>
          </li>
        </FooterColumn>
        <FooterSeparator />
        <FooterColumn>
          <li>
            <Link>Link4</Link>
          </li>
          <li>
            <Link>Link5</Link>
          </li>
          <li>
            <Link>Link6</Link>
          </li>
        </FooterColumn>
      </Footer>
      <Button
        variant="float"
        onClick={() => {
          handleToggleSidebar(
            document.getElementById("side-panel"),
            sidebarToggled,
            setSidebarToggled
          );
        }}
      >
        F
      </Button>
    </LayoutWrapper>
  );
};

export default Layout;
