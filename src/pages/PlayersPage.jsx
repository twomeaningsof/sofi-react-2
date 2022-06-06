import MainNavbar, {
  HamburgerMenu,
  NavigationLink,
} from "../components/MainNavbar";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import FooterLink from "../components/FooterLink";
import toggleSidebar from "../utils/toggleSidebar";

const PlayersPage = () => {
  return (
    <>
      <div className="wrapper">
        <aside className="side-panel" id="side-panel">
          <button className="button button--aside hidden">Button I</button>
          <button className="button button--aside hidden">Button II</button>
          <button className="button button--aside hidden">Button III</button>
          <button className="button button--aside hidden">Button IV</button>
        </aside>
        <header className="header">
          <MainNavbar>
            <HamburgerMenu />
            <NavigationLink>Players</NavigationLink>
            <NavigationLink>Teams</NavigationLink>
          </MainNavbar>
          <PageTitle>Players</PageTitle>
        </header>
        <main className="content-wrapper">
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            assumenda natus odit. Eos a eaque delectus porro vitae dolorem.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            nihil aliquam sapiente nulla, vero eum cupiditate?
          </Card>
          <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            assumenda natus odit. Eos a eaque delectus porro vitae dolorem.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            nihil aliquam sapiente nulla, vero eum cupiditate?
          </Card>
        </main>
        <footer className="footer">
          <div className="footer__column">
            <ul className="footer__links-wrapper">
              <FooterLink>Link1</FooterLink>
              <FooterLink>Link2</FooterLink>
              <FooterLink>Link3</FooterLink>
            </ul>
          </div>
          <div className="footer__separator"></div>
          <div className="footer__column">
            <ul className="footer__links-wrapper">
              <FooterLink>Link4</FooterLink>
              <FooterLink>Link5</FooterLink>
              <FooterLink>Link6</FooterLink>
            </ul>
          </div>
        </footer>
        <button className="button button--float" onclick={toggleSidebar}>
          F
        </button>
      </div>
    </>
  );
};

export default PlayersPage;
