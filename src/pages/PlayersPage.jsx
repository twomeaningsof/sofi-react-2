import { useState, useEffect } from "react";
import MainNavbar, {
  HamburgerMenu,
  NavigationLink,
} from "../components/MainNavbar";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import FooterLink from "../components/FooterLink";
import solve from "../api/index1";
import { first } from "../api/data";
import getRandomPlayers from "../api/getRandomPlayers";



const PlayersPage = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [playersPerPage, setPlayersPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);
    setPlayers(getRandomPlayers());
    setLoading(false);
  }, [])

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
            <NavigationLink path="/">Players</NavigationLink>
            <NavigationLink path="/teams">Teams</NavigationLink>
          </MainNavbar>
          <PageTitle>Players</PageTitle>
        </header>
        <main className="content-wrapper">
          {loading ? <div>Loading...</div> : players.map(({firstName, lastName, description}) => {
            return <Card firstName={firstName} lastName={lastName} description={description}></Card>
          })}
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
        <button className="button button--float">F</button>
      </div>
    </>
  );
};

export default PlayersPage;
