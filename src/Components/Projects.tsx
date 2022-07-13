import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import codeLogo from "../code.png";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | Pranshu Aggarwal";
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      <Header />
      <div className="w-full pt-6 p-36 flex flex-col gap-4">
        <div className="flex flex-row gap-4 pt-12 justify-start items-center">
          <img
            src={codeLogo}
            alt="code logo"
            className="bg-transparent w-1/4 flex items-start justify-start"
          />
          <h1 className="text-[#66fcf1] font-bold flex justify-center items-center text-6xl">
            Projects
          </h1>
        </div>
        {/* Money Manager */}
        <div>
          <h1 className="text-[#64ffda] text-3xl font-bold">Money Manager</h1>
        </div>
      </div>
      <div className="w-full absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
