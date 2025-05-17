import { useEffect, useState } from 'react';

type RequestOptions = RequestInit

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const controller = new AbortController()
const signal = controller.signal


export function fetchi<T>(url: string, options?: RequestOptions,  ): FetchState<T> {
  const [data, setData] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchdata = async () => {
    setData({ data: null, loading: true, error: null });

      try {
        const response = await fetch(url, {
          ...options,
          signal,
        });
        const json = await response.json();
        setData({ data: json, loading: false, error: null });
      } catch (err) {
        if((err as Error).name === "AbortError") {
          console.log("Requisição cancelada.", err)
        }
        setData({
          data: null,
          loading: false,
          error: err instanceof Error ? err.message : 'ERROR ???',
        });
      }
    };
    
    return () => {
    controller.abort();
     fetchdata();
    }
   
  }, [url]);

  return data;
}
