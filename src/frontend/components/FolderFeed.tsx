import useApi from "@/hooks/useApi";
import { RefreshCcw } from "lucide-react";
import ListItem from "./FolderFeed/ListItem";

export interface FolderFeedRes {
  name: string;
  size: number;
  type: string;
  last_modified: string;
  contents?: FolderFeedRes[];
}

export default function FolderFeed(): JSX.Element {
  const { data, error, loading, refetch } = useApi<FolderFeedRes[]>(
    "http://127.0.0.1:8000/folder/1",
    {
      method: "GET",
    }
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
    <div className="w-full">
      <div className="flex justify-between my-2">
        <h1 className="text-2xl">Folder Feed</h1>
        <RefreshCcw onClick={refetch} role="button" />
      </div>
      <ul>
        {data.map((folder) => (
          <ListItem key={folder.name} folder={folder} />
        ))}
      </ul>
    </div>
  );
}
