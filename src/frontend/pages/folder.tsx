import { useParams } from "react-router-dom";

export default function FolderPage(): JSX.Element {
  const { folderId } = useParams();

  if (!folderId) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p>Select a file/folder</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>Folder: {folderId}</p>
    </div>
  );
}
