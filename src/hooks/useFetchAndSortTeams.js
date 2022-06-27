import { useState, useEffect } from "react";
import { encase, fork, and, lastly, chain } from "fluture";
import andTap from "../utils/andTap";
import getRandomTeams from "../api/getRandomTeams";
import sortByName from "../utils/sortByName";

const useFetchAndSortTeams = (setCurrentPage, retry, setRetry) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchAndSortTeamsFuture =
    encase(setLoading)(true)
    |> and(encase(setError)(false))
    |> and(getRandomTeams(2000))
    |> chain(encase(sortByName))
    |> andTap(encase(setCurrentPage)(1))
    |> lastly(encase(setLoading)(false));

  useEffect(() => {
    fetchAndSortTeamsFuture |> fork(setError)(setTeams);
  }, []);

  return {
    teams,
    loading,
    error,
    fetchAndSortTeamsFuture,
    setTeams,
    setError,
  };
};

export default useFetchAndSortTeams;
