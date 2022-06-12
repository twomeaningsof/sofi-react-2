import { useState, useEffect } from "react";
import getRandomPlayers from "../api/getRandomPlayers";
import sortByName from "../utils/sortByName";

const useFetchAndSortPlayers = (setCurrentPage) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  return {
    players,
    loading,
    error,
  };
};

export default useFetchAndSortPlayers;
