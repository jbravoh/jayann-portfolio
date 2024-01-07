import { createRoot } from "react-dom/client";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { Body } from "./common/UI/components"

function App() {
  return <ThemeProvider theme={theme}><Body fontWeight="normal">Hola</Body></ThemeProvider>;
}

const container = document.getElementById("root");

if (!container) {
  throw new Error("no container to render to");
}
const root = createRoot(container);
root.render(<App />);

export default App;
