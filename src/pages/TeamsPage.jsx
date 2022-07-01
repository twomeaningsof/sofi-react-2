import { useState } from "react";
import { fork } from "fluture";
import Layout from "../components/Layout";
import SidePanel from "../components/SidePanel";
import Pagination from "../components/Pagination";
import Content from "../components/Content";
import useFetchAndSortData from "../hooks/useFetchAndSortData";
import getRandomTeams from "../api/getRandomTeams";
import handleToggleSidebar from "../utils/handleToggleSidebar";
import getCurrentPageData from "../utils/getCurrentPageData";
import shouldRenderSidePanel from "../utils/shouldRenderSidePanel";

const TeamsPage = ({ pageSize }) => {
  const [currentPage, setCurrentPage] = useState(undefined);
  const [sidebarToggled, setSidebarToggled] = useState(false);
  const [retry, setRetry] = useState(false);
  const {
    data: teams,
    loading,
    error,
    fetchAndSortDataFuture,
    setData: setTeams,
    setError,
  } = useFetchAndSortData(setCurrentPage, getRandomTeams, 2000);
  const currentPageData = getCurrentPageData(teams, currentPage, pageSize);

  const handleReload = () =>
    fetchAndSortTeamsFuture |> fork(setError)(setTeams);

  return (
    <Layout
      pageTitle="Teams"
      sidebarToggled={sidebarToggled}
      setSidebarToggled={setSidebarToggled}
    >
      {shouldRenderSidePanel({ data: teams, error, loading }) && (
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
              totalCount={teams.length}
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
        cardType={"team"}
        handleReload={handleReload}
      />
    </Layout>
  );
};

export default TeamsPage;
