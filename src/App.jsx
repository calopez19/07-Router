import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para crear un React Router</p>
      <a href="/about">Sobre nosotros</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hola este es un clon de React Routerr con fines pedagogicos </p>
      <a href="/">Ir a home</a>
    </>
  );
}
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  );
}

export default App;
