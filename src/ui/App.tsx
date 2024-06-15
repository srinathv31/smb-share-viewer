import { ThemeProvider } from "./components/ThemeProvider";
import HomePage from "./pages";

export default function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <HomePage />
    </ThemeProvider>
  );
}
