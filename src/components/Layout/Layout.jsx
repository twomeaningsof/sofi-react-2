import "./Layout.scss";
import Navbar, { HamburgerMenu, NavigationLink } from "../Navbar";
import PageTitle from "../PageTitle";
import Footer, { FooterColumn, FooterSeparator } from "../Footer";
import Link from "../Link";
import Button from "../Button";
import toggleSidebar from "../../utils/toggleSidebar";

const Layout = ({ pageTitle, sidebarToggled, setSidebarToggled, children }) => {
  return (
    <div className="wrapper">
      <header className="header">
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
      </header>
      <main className="content-wrapper">{children}</main>
      <Footer>
        <FooterColumn>
          <Link>Link1</Link>
          <Link>Link2</Link>
          <Link>Link3</Link>
        </FooterColumn>
        <FooterSeparator />
        <FooterColumn>
          <Link>Link4</Link>
          <Link>Link5</Link>
          <Link>Link6</Link>
        </FooterColumn>
      </Footer>
      <Button
        variant="float"
        onClick={() => {
          sidebarToggled ? setSidebarToggled(false) : setSidebarToggled(true);
          toggleSidebar(document.getElementById("side-panel"));
        }}
      >
        F
      </Button>
    </div>
  );
};

export default Layout;
