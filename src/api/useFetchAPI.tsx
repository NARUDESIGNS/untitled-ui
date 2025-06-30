import { useEffect, useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export function useFetchAPI<T = unknown>(
  url: string,
  method: HttpMethod = "GET"
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
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
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url, method]);

  return { data, isLoading, error };
}
