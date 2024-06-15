import { createRoot } from "react-dom/client";
import App from "./ui/App";

// Get the container element by its ID
const container = document.getElementById("root");

// Create the root using the container element
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
