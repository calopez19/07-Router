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
];


function App() {
  return (
    <main>
      <Router routes={routes}/>
    </main>
  );
}

export default App;
