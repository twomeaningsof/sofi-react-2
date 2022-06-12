import { useState, useEffect } from "react";
import getRandomTeams from "../api/getRandomTeams";
import sortByName from "../utils/sortByName";

const useFetchAndSortTeams = (setCurrentPage) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAndSort = async () => {
      setLoading(true);
      const [data, error] = await getRandomTeams(2000);

      if (!error) {
        setTeams(sortByName(data));
        setCurrentPage(1);
      }

      setError(error);
      setLoading(false);
    };
    fetchAndSort();
  }, []);

  return {
    teams,
    loading,
    error,
  };
};

export default useFetchAndSortTeams;
