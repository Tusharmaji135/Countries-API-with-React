import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
function Header() {
  const [isDark, setIsDark] = useTheme();

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <header className="header-container">
      <div className="header-content container">
        <Link to="/">
          <h2 className="title">Where in the World?</h2>
        </Link>

        <p
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
          className="theme-changer"
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>&nbsp;{" "}
          <b>{`${isDark ? "Light Mode" : "Dark Mode"}`}</b>
        </p>
      </div>
    </header>
  );
}

export default Header;
