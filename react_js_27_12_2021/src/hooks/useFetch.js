import { useState, useEffect } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Error");
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return [isLoading, data, error];
}

export default useFetch;
