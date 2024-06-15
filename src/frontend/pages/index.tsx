import ItemFeed from "@/components/ItemFeed";
import { ModeToggle } from "@/components/ModeToggle";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <h1>Hello, Electron!</h1>
      <ModeToggle />
      <ItemFeed />
    </div>
  );
}
