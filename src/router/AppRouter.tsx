import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import About from "../Components/About";
import Blogs from "../Components/Blogs";
import Experience from "../Components/Experience";
import Home from "../Components/Home";
import Projects from "../Components/Projects";
import Portfolio from "../Components/Portfolio";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/blogs": () => <Blogs />,
  "/projects": () => <Projects />,
  "/experience": () => <Experience />,
  "/portfolio": () => <Portfolio />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <AppContainer>{route}</AppContainer>;
}
