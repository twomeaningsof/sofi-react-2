import { useState, useEffect, useMemo } from "react";
import MainNavbar, {
  HamburgerMenu,
  NavigationLink,
} from "../components/MainNavbar";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Link from "../components/Link";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import SidePanel from "../components/SidePanel";
import getRandomPlayers from "../api/getRandomPlayers";
import toggleSidebar from "../utils/toggleSidebar";
import sortByName from "../utils/sortByName";

let PageSize = 20;

const PlayersPage = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(undefined);
  const [sidebarToggled, setSidebarToggled] = useState(false);

  const currentPlayersData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return players.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    const fetchAndSort = async () => {
      setLoading(true);
      const [data, error] = await getRandomPlayers(2000);
      if (!error) {
        setPlayers(sortByName(data));
        setCurrentPage(1);
      }
      setError(error);
      setLoading(false);
    };
    fetchAndSort();
  }, []);

  return (
    <>
      <div className="wrapper">
        <SidePanel
          onMouseEnter={({ currentTarget }) => {
            setSidebarToggled(true);
            toggleSidebar(currentTarget);
          }}
          onMouseLeave={({ currentTarget }) => {
            setSidebarToggled(false);
            toggleSidebar(currentTarget);
          }}
        >
          {sidebarToggled && !(error || loading) && (
            <Pagination
              currentPage={currentPage}
              totalCount={players.length}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </SidePanel>
        <header className="header">
          <MainNavbar>
            <HamburgerMenu />
            <NavigationLink path="/">Players</NavigationLink>
            <NavigationLink path="/teams">Teams</NavigationLink>
          </MainNavbar>
          <PageTitle>
            <abbr title="Ultimate Frisbee">UF</abbr> Players
          </PageTitle>
        </header>
        <main className="content-wrapper">
          {error && <div>{error}</div>}
          {loading && <div>Loading...</div>}
          {!(error || loading)
            ? currentPlayersData.map(
                ({ name, score, position, description }, index) => (
                  <Card
                    key={index}
                    name={name}
                    score={score}
                    position={position}
                    description={description}
                    variant="player"
                  ></Card>
                )
              )
            : null}
        </main>
        <footer className="footer">
          <div className="footer__column">
            <ul className="footer__links-wrapper">
              <Link>Link1</Link>
              <Link>Link2</Link>
              <Link>Link3</Link>
            </ul>
          </div>
          <div className="footer__separator"></div>
          <div className="footer__column">
            <ul className="footer__links-wrapper">
              <Link>Link4</Link>
              <Link>Link5</Link>
              <Link>Link6</Link>
            </ul>
          </div>
        </footer>
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
    </>
  );
};

export default PlayersPage;
