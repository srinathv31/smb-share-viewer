import useApi from "../hooks/useApi";

export default function JsonFeed(): JSX.Element {
  const { data, error, loading } = useApi<{ id: number; title: string }[]>(
    "https://jsonplaceholder.typicode.com/posts",
    { method: "GET", prefetch: true }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h1>Json Feed</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
