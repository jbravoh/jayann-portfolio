import { createRoot } from "react-dom/client";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import NavBar from "./modules/navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(<App />);

export default App;
