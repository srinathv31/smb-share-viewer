import { useEffect, useState } from "react";

export default function useApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("🚀 ~ fetchData ~ error:", error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
}
