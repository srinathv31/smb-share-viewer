import { FileText, Folder, FolderOpen, Square } from "lucide-react";
import { FolderFeedRes } from "../FolderFeed";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function ListItem({
  folder,
  nested,
}: {
  folder: FolderFeedRes;
  nested?: boolean;
}): JSX.Element {
  const [expand, setExpand] = useState<boolean>(false);

  function ButtonWrapper({ children }: { children: ReactNode }) {
    return (
      <Button variant="outline" size="icon" className="border-none">
        {children}
      </Button>
    );
  }

  const fileIconMap = {
    folder: expand ? (
      <FolderOpen onClick={() => setExpand(!expand)} role="button" />
    ) : (
      <>
        {nested ? (
          <Folder onClick={() => setExpand(!expand)} role="button" />
        ) : (
          <Link to={`/folder/${folder.name}`}>
            <Folder />
          </Link>
        )}
      </>
    ),
    text: <FileText />,
  };

  return (
    <div className="flex flex-col">
      <li key={folder.name} className="flex items-center p-2">
        <ButtonWrapper>
          {fileIconMap[folder.type as keyof typeof fileIconMap]}
        </ButtonWrapper>
        <p>{folder.name}</p>
        {/* <p>{folder.size}</p>
        <p>{folder.last_modified}</p> */}
      </li>
      {expand ? (
        <div className="ml-10">
          {folder.contents.length < 1 ? (
            <p>Empty Folder</p>
          ) : (
            folder.contents.map((folder) => (
              <ListItem key={folder.name} folder={folder} nested />
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}
