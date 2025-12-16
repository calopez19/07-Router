import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { Children, useState, useEffect } from "react";
import { match } from "path-to-regexp";

const NAVIGATION_EVENT = "pushstate";

export function Router({
  children,
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

  let ruoteParams = {};
  //ahora hay que agregar una forma para que routes encuentre las rutas sin necesidad de entregarle un objeto con todas ellas
  const routesFromChildren = Children.map(children, ({ props,type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  console.log(routesToUse);
  
  const Page = routesToUse.find(({ path }) => {
    console.log(path, currentPath, path === currentPath);
    
    if (path === currentPath) return true;
    // hemos usado path to regex para detectar rutas dinamicas
    const matchUrl = match(path, { decode: decodeURIComponent });
    const matched = matchUrl(currentPath);
    
    if (!matched) return false;

    ruoteParams = matched.params;
    return true;
  })?.Component;

  return Page ? <Page ruoteParams={ruoteParams} /> : <DefaultComponent />;
}
