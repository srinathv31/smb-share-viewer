import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";
import HomePage from "./pages";
import About from "./pages/about";
import FolderPage from "./pages/folder";

export default function App(): JSX.Element {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Layout>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/folder/:folderId" element={<FolderPage />} />
          </Routes>
        </HashRouter>
        <Toaster />
      </Layout>
    </ThemeProvider>
  );
}
