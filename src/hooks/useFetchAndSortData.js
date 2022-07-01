import { useState, useEffect } from "react";
import { encase, fork, and, lastly, chain } from "fluture";
import andTap from "../utils/andTap";
import sortByName from "../utils/sortByName";

const useFetchAndSortPlayers = (setCurrentPage, apiFn, count) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchAndSortDataFuture =
    encase(setLoading)(true)
    |> and(encase(setError)(false))
    |> and(apiFn(count))
    |> chain(encase(sortByName))
    |> andTap(encase(setCurrentPage)(1))
    |> lastly(encase(setLoading)(false));

  useEffect(() => {
    fetchAndSortDataFuture |> fork(setError)(setData);
  }, []);

  return {
    data,
    loading,
    error,
    fetchAndSortDataFuture,
    setData,
    setError,
  };
};

export default useFetchAndSortPlayers;
