import { useRoutes } from "raviger";
import AppContainer from "../AppContainer";
import Experience from "../Components/Experience";
import Home from "../Components/Home";
import Projects from "../Components/Projects";

const routes = {
  "/": () => <Home />,
  "/projects": () => <Projects />,
  "/experience": () => <Experience />,
};

export default function AppRouter() {
  let route = useRoutes(routes);
  return <AppContainer>{route}</AppContainer>;
}
