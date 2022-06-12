import { useState } from "react";
import { addIndex, map } from "ramda";
import Navbar, { HamburgerMenu, NavigationLink } from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import SidePanel from "../components/SidePanel";
import Pagination from "../components/Pagination";
import Footer, { FooterColumn, FooterSeparator } from "../components/Footer";
import Link from "../components/Link";
import toggleSidebar from "../utils/toggleSidebar";
import useFetchAndSortPlayers from "../hooks/useFetchAndSortPlayers";
import getCurrentPageData from "../utils/getCurrentPageData";

const pageSize = 20;

const PlayersPage = () => {
  const [currentPage, setCurrentPage] = useState(undefined);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const { players, loading, error } = useFetchAndSortPlayers(setCurrentPage);
  const currentPageData = getCurrentPageData(players, currentPage, pageSize);

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
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </SidePanel>
        <header className="header">
          <Navbar>
            <HamburgerMenu />
            <NavigationLink path="/">Players</NavigationLink>
            <NavigationLink path="/teams">Teams</NavigationLink>
          </Navbar>
          <PageTitle>
            <p>
              <abbr title="Ultimate Frisbee">UF</abbr> Players
            </p>
          </PageTitle>
        </header>
        <main className="content-wrapper">
          {error && <div>{error}</div>}
          {loading && <div>Loading...</div>}
          {!(error || loading)
            ? addIndex(map)(({ name, score, position, description }, index) => (
                <Card
                  key={index}
                  name={name}
                  score={score}
                  position={position}
                  description={description}
                  variant="player"
                ></Card>
              ))(currentPageData)
            : null}
        </main>
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
    </>
  );
};

export default PlayersPage;
