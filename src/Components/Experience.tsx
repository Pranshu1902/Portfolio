import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import experienceLogo from "../experience.png";

export default function Experience() {
  useEffect(() => {
    document.title = "Experience | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header />
      <div
        className="pt-6 p-36 flex flex-col gap-4 justify-start"
        // style={{ paddingLeft: "20%" }}
      >
        {/* Intro */}
        <div className="flex flex-row gap-6 p-12 w-full items-center">
          <div className="flex justify-center items-center w-1/5">
            <img className="bg-transparent" src={experienceLogo} alt="" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-6xl">Experience</h1>
          </div>
        </div>

        {/* Experiene */}
        <div
          className="flex justify-center items-center w-full"
          style={{ borderLeft: "6px solid #66fcf1", height: "500px" }}
        ></div>

        {/* Footer */}
        <div className="w-full absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
