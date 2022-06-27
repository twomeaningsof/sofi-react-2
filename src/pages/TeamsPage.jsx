import { useState } from "react";
import { fork } from "fluture";
import Layout from "../components/Layout";
import SidePanel from "../components/SidePanel";
import Pagination from "../components/Pagination";
import Content from "../components/Content";
import useFetchAndSortTeams from "../hooks/useFetchAndSortTeams";
import toggleSidebar from "../utils/toggleSidebar";
import getCurrentPageData from "../utils/getCurrentPageData";
import shouldRenderPagination from "../utils/shouldRenderPagination";

const TeamsPage = ({ pageSize }) => {
  const [currentPage, setCurrentPage] = useState(undefined);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [retry, setRetry] = useState(false);
  const { teams, loading, error, fetchAndSortTeamsFuture, setTeams, setError } =
    useFetchAndSortTeams(setCurrentPage, retry, setRetry);
  const currentPageData = getCurrentPageData(teams, currentPage, pageSize);

  const handleReload = () =>
    fetchAndSortTeamsFuture |> fork(setError)(setTeams);

  return (
    <Layout
      pageTitle="Teams"
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
        {shouldRenderPagination({ sidebarToggled, error, loading }) && (
          <Pagination
            currentPage={currentPage}
            totalCount={teams.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </SidePanel>
      <Content
        loading={loading}
        error={error}
        data={currentPageData}
        cardType={"team"}
        handleReload={handleReload}
      />
    </Layout>
  );
};

export default TeamsPage;
