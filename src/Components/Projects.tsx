import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Pranshu Aggarwal";
  }, []);

  return (
    <div className="bg-[#1f2833] text-[#c5c6c7] w-full min-h-screen">
      <Header />
      <div>
        <h1>Projects</h1>
      </div>
      <div className="w-full absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
