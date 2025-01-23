import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState, useEffect } from "react";

function App() {
  // Initialize dark mode from localStorage or default to false
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  // Update localStorage whenever isDark changes
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDark));
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
