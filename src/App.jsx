import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
const NAVIGATION_EVENT = "pushstate";


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
    window.addEventListener("popstate", onLocationChange);
    //EL popstate es el evento cuando uno apreta el boton hacia atras
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
