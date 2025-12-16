import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { Router } from "./Router";
import { Route } from "./Route";

const NAVIGATION_EVENT = "pushstate";

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
      <Router routes={routes}>
        <Route path={'/'} Component={HomePage}/>
        <Route path={'/about'} Component={AboutPage}/>
      </Router>
    </main>
  );
}

export default App;
