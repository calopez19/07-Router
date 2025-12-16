import "./App.css";
import { lazy, Suspense } from "react";
import HomePage from "./pages/Home";
import { Router } from "./Router";
import { Route } from "./Route";

const NAVIGATION_EVENT = "pushstate";

const lazyAboutPage = lazy(() => {
  return import("./pages/AboutPage.jsx"); //
})
const lazyHomePage = lazy(() => {
  return import("./pages/Home.jsx"); //
})
const routes = [
  {
    path: '/search/:query',
    Component: ({ruoteParams}) => {
      return (
        <>
          <h1>Buscador, has buscado {ruoteParams.query}</h1>
        </>
      )
    }
  }
];


function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes}>
        <Route path={'/'} Component={lazyHomePage}/>
        <Route path={'/about'} Component={lazyAboutPage}/>
      </Router>
      </Suspense>
    </main>
  );
}

export default App;
