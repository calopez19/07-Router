import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { useState,useEffect } from "react";
const NAVIGATION_EVENT = "pushstate";


export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
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

  const Page = routes.find(({ path }) => {
    return path === currentPath;
  })?.component;
  return Page? <Page/>: <DefaultComponent/>
}