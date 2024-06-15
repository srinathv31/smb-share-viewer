import JsonFeed from "./components/JsonFeed";

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Hello, Electron!</h1>
      <p>
        I hope you enjoy using basic-electron-react-boilerplate to start your
        dev off right!
      </p>
      <JsonFeed />
    </div>
  );
}
