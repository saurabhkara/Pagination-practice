import { useEffect, useState } from "react";
import axios from "axios";
export default function useApi() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchFinal, setSearchFinal] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    loadUserData();
  }, []);

  function loadUserData() {
    return axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setData(res.data.users);
        setSearchFinal(res.data.users);
      })
      .catch((err) => {
        console.log(err);
        setIsError("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return { data, isLoading, isError, searchFinal, setSearchFinal };
}
