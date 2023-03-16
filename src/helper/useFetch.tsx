import { useState, useEffect } from "react";
import { Error } from "@/helper/types";

interface FetchResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

function useFetch<T>(url: string): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("json", json);

        setData(json);
        clearInterval(interval);
      } catch (error) {
        // case the error to correct type
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    // mimics a delay in the API call
    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
