import { useEffect, useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export function useFetchAPI<T = any>(url: string, method: HttpMethod = "GET") {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(url, { method })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();
        if (isMounted) setData(result);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url, method]);

  return { data, loading, error };
}
