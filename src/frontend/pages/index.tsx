import FolderFeed from "@/components/FolderFeed";

export default function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col items-center h-screen w-screen p-5">
      <h1 className="text-2xl">SMB Client</h1>
      {/* <ModeToggle /> */}
      {/* <ItemFeed /> */}
      <FolderFeed />
    </div>
  );
}
