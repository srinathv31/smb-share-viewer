import { FileText, Folder, FolderOpen } from "lucide-react";
import { FolderFeedRes } from "../FolderFeed";
import { useState } from "react";

export default function ListItem({
  folder,
}: {
  folder: FolderFeedRes;
}): JSX.Element {
  const [expand, setExpand] = useState<boolean>(false);

  const fileIconMap = {
    folder: expand ? (
      <FolderOpen onClick={() => setExpand(!expand)} />
    ) : (
      <Folder onClick={() => setExpand(!expand)} />
    ),
    text: <FileText />,
  };

  return (
    <div className="flex flex-col">
      <li
        key={folder.name}
        className="flex justify-between w-full border-b-2 border-gray-200 p-2"
      >
        {fileIconMap[folder.type as keyof typeof fileIconMap]}
        <p>{folder.name}</p>
        <p>{folder.size}</p>
        <p>{folder.last_modified}</p>
      </li>
      {expand ? (
        <div className="ml-10">
          {folder.contents.length < 1 ? (
            <p>Empty Folder</p>
          ) : (
            folder.contents.map((folder) => (
              <ListItem key={folder.name} folder={folder} />
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
