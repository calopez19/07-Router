import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const NAVIGATION_EVENT = "pushstate";

//Esta funcion va a cambiar la url, crea el evento de navegacion y lo despacha para que otra funcion pueda escuchar el evento
function navigate(href) {
  // El metodo de abajo permite cambiar el link de la pagina con el parametro dado sin recargar la pagina
  window.history.pushState({}, "", href);
  //ahora se va a crear un evanto personalizado para avisar que se a cambiado la url
  const navigationEvent = new Event(NAVIGATION_EVENT);
  // lo llamamos pushState porque no hay una forma para escuchar el window.history.pushState ( si lo hay cuando uno navega hacia atras)
  window.dispatchEvent(navigationEvent);
}
function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Sobre nosotros
      </button>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola este es un clon de React Routerr con fines pedagogicos </p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Ir a home
      </button>
    </>
  );
}
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
