import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Home from "../Components/Home";
import Projects from "../Components/Projects";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/projects": () => <Projects />,
  "/experience": () => <Experience />,
  "/contact": () => <Contact />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <AppContainer>{route}</AppContainer>;
}
