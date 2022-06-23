import { useState } from "react";
import Layout from "../components/Layout";
import SidePanel from "../components/SidePanel";
import Pagination from "../components/Pagination";
import Content from "../components/Content";
import useFetchAndSortPlayers from "../hooks/useFetchAndSortPlayers";
import getCurrentPageData from "../utils/getCurrentPageData";
import toggleSidebar from "../utils/toggleSidebar";
import shouldRenderPagination from "../utils/shouldRenderPagination";

const PlayersPage = ({ pageSize }) => {
  const [currentPage, setCurrentPage] = useState(undefined);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [retry, setRetry] = useState(false);
  const { players, loading, error } = useFetchAndSortPlayers(
    setCurrentPage,
    retry,
    setRetry
  );
  const currentPageData = getCurrentPageData(players, currentPage, pageSize);

  const handleReload = () => setRetry(true);

  return (
    <Layout
      pageTitle="Players"
      sidebarToggled={sidebarToggled}
      setSidebarToggled={setSidebarToggled}
    >
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
        {shouldRenderPagination({
          sidebarToggled,
          error,
          loading,
        }) && (
          <Pagination
            currentPage={currentPage}
            totalCount={players.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </SidePanel>
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
