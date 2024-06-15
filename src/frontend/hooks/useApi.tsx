/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE"; // Add other HTTP methods as needed
  headers?: Record<string, string>;
  body?: any; // Typically use `any`, but you can type it more strictly
  queryParams?: Record<string, string>;
  prefetch?: boolean;
}

export default function useApi<T = any>(url: string, options?: ApiOptions) {
  const {
    method = "GET",
    headers,
    body,
    queryParams,
    prefetch = true,
  } = options ?? {};

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Function to serialize query parameters
  const serializeQueryParams = (params: Record<string, string>) => {
    return "?" + new URLSearchParams(params).toString();
  };

  const finalUrl = queryParams
    ? `${url}${serializeQueryParams(queryParams)}`
    : url;

  async function fetchData() {
    setLoading(true);
    try {
      const response = await window.api.fetchData(finalUrl, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
      if (response.error) {
        throw new Error(response.error);
      }
      setData(response.data);
    } catch (error) {
      console.error("Fetch data error:", error);
      setError(error as Error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (prefetch) {
      fetchData();
    }
  }, [finalUrl, method, headers, body, prefetch]);

  return { data, loading, error, refetch: fetchData };
}
