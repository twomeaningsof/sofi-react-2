import { useState, useEffect } from "react";
import { encase, fork, and, lastly, chain } from "fluture";
import andTap from "../utils/andTap";
import getRandomPlayers from "../api/getRandomPlayers";
import sortByName from "../utils/sortByName";

const useFetchAndSortPlayers = (setCurrentPage) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchAndSortPlayersFuture =
    encase(setLoading)(true)
    |> and(encase(setError)(false))
    |> and(getRandomPlayers(2000))
    |> chain(encase(sortByName))
    |> andTap(encase(setCurrentPage)(1))
    |> lastly(encase(setLoading)(false));

  useEffect(() => {
    fetchAndSortPlayersFuture |> fork(setError)(setPlayers);
  }, []);

  return {
    players,
    loading,
    error,
    fetchAndSortPlayersFuture,
    setPlayers,
    setError,
  };
};

export default useFetchAndSortPlayers;
