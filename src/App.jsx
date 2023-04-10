import { useState } from "react";
import { Home, About, Works, Galleries, Contact, Footer } from "./pages";
import { Navbar, DarkLight } from "./components";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
      <Home />
      <DarkLight
        className="z-30 fixed bottom-7 right-4 lg:right-6"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
