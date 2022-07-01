import { useState } from "react";
import { fork } from "fluture";
import Layout from "../components/Layout";
import SidePanel from "../components/SidePanel";
import Pagination from "../components/Pagination";
import Content from "../components/Content";
import useFetchAndSortData from "../hooks/useFetchAndSortData";
import getRandomPlayers from "../api/getRandomPlayers";
import getCurrentPageData from "../utils/getCurrentPageData";
import handleToggleSidebar from "../utils/handleToggleSidebar";
import shouldRenderSidePanel from "../utils/shouldRenderSidePanel";

const PlayersPage = ({ pageSize }) => {
  const [currentPage, setCurrentPage] = useState(undefined);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [retry, setRetry] = useState(false);
  const {
    data: players,
    loading,
    error,
    fetchAndSortDataFuture,
    setData: setPlayers,
    setError,
  } = useFetchAndSortData(setCurrentPage, getRandomPlayers, 2000);
  const currentPageData = getCurrentPageData(players, currentPage, pageSize);

  const handleReload = () =>
    fetchAndSortDataFuture |> fork(setError)(setPlayers);

  return (
    <Layout
      pageTitle="Players"
      sidebarToggled={sidebarToggled}
      setSidebarToggled={setSidebarToggled}
    >
      {shouldRenderSidePanel({ data: players, error, loading }) && (
        <SidePanel
          onMouseEnter={({ currentTarget }) => {
            handleToggleSidebar(currentTarget, false, setSidebarToggled);
          }}
          onMouseLeave={({ currentTarget }) => {
            handleToggleSidebar(currentTarget, true, setSidebarToggled);
          }}
        >
          {sidebarToggled && (
            <Pagination
              currentPage={currentPage}
              totalCount={players.length}
              pageSize={pageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </SidePanel>
      )}
      <Content
        loading={loading}
        error={error}
        data={currentPageData}
        cardType={"player"}
        handleReload={handleReload}
      />
    </Layout>
  );
};

export default PlayersPage;
