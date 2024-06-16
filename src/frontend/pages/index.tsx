import FolderFeed, { FolderFeedRes } from "@/components/FolderFeed";
import { Link } from "react-router-dom";
import FolderPage from "./folder";
import { RefreshCcw } from "lucide-react";
import useApi from "@/hooks/useApi";

export default function HomePage(): JSX.Element {
  const { refetch } = useApi<FolderFeedRes[]>(
    `http://127.0.0.1:8000/folder/1`,
    {
      method: "GET",
      prefetch: false,
    }
  );

  return (
    <div className="flex flex-col items-center h-screen w-screen p-5">
      <h1 className="text-2xl">SMB Client</h1>
      <Link to="/about">About</Link>
      <div className="w-full h-full">
        <div className="flex justify-between my-2">
          <h1 className="text-2xl">Folder Feed</h1>
          <RefreshCcw onClick={refetch} role="button" />
        </div>
        <div className="flex h-full">
          <div className="border p-2 flex w-1/2 md:w-1/3">
            <FolderFeed folderId="1" />
          </div>
          <div className="border w-1/2 md:w-2/3">
            <FolderPage />
          </div>
        </div>
      </div>
    </div>
  );
}
