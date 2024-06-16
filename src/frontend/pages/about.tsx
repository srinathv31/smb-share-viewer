import { Link } from "react-router-dom";

export default function AboutPage(): JSX.Element {
  return (
    <div>
      <Link to="/" className="text-2xl my-4">
        Home
      </Link>
      <h1>About</h1>
      <p>This is the about page</p>
    </div>
  );
}
