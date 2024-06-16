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

export default function FolderFeed({
  folderId,
}: {
  folderId: string;
}): JSX.Element {
  const { data, error, loading, refetch } = useApi<FolderFeedRes[]>(
    `http://127.0.0.1:8000/folder/${folderId}`,
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
    <ul>
      {data.map((folder) => (
        <ListItem key={folder.name} folder={folder} nested />
      ))}
    </ul>
  );
}
