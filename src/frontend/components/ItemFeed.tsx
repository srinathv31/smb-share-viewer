import { toast } from "sonner";
import useApi from "../hooks/useApi";
import { Button } from "./ui/button";

export default function ItemFeed(): JSX.Element {
  const { data, error, loading, refetch } = useApi<{
    item_id: string;
    q: string;
  }>("http://127.0.0.1:8000/items/31", {
    queryParams: { q: "test" },
    prefetch: false,
  });

  function handleClick() {
    const promise = refetch();

    toast.promise(promise, {
      richColors: true,
      loading: "Loading...",
      success: (res) => {
        if (res.error) {
          throw new Error("Error");
        }
        return "Successfully refetched";
      },
      error: "Error",
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>Error: {error.message}</p>
        <Button onClick={handleClick}>Refetch</Button>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <p>No data available</p>
        <Button onClick={handleClick}>Refetch</Button>
      </>
    );
  }

  return (
    <div>
      <h1>Item Feed</h1>
      <p>
        {data.item_id}: {data.q ?? "No description"}
      </p>
      <Button onClick={handleClick}>Refetch</Button>
    </div>
  );
}
