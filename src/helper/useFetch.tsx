import { useState, useEffect } from "react";
import { Error } from "@/types/common";

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
        console.log('res', response)
        const json = await response.json();
        setData(json);
        clearInterval(interval);
      } catch (error) {
        console.error('error', error)
        // case the error to correct type
        setError(error as Error);
        clearInterval(interval);
      } finally {
        setLoading(false);
        clearInterval(interval);
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
