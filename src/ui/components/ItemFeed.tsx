import useApi from "../hooks/useApi";

export default function ItemFeed(): JSX.Element {
  const { data, error, loading, refetch } = useApi<{
    item_id: string;
    q: string;
  }>("http://127.0.0.1:8000/items/31", {
    queryParams: { q: "test" },
    prefetch: false,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return (
      <>
        <p>No data available</p>
        <button className="bg-sky-500 p-5 rounded m-3" onClick={refetch}>
          Refetch
        </button>
      </>
    );
  }

  return (
    <div>
      <h1>Item Feed</h1>
      <p>
        {data.item_id}: {data.q ?? "No description"}
      </p>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
