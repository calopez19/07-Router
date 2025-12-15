import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { Router } from "./Router";


const NAVIGATION_EVENT = "pushstate";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: '/search/:query',
    component: ({ruoteParams}) => {
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
      <Router routes={routes}/>
    </main>
  );
}

export default App;
