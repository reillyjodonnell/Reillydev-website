import "./App.css";
import PrimaryContent from "./Components/PrimaryContent";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <PrimaryContent />
      </ThemeProvider>
    </>
  );
}

export default App;
