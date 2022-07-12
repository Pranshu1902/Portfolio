import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import computerLogo from "../computer.png";

export default function Home() {
  useEffect(() => {
    document.title = "Pranshu Aggarwal";
  }, []);

  return (
    <div className="bg-[#1f2833] text-[#c5c6c7] w-full min-h-screen">
      <Header />
      <div
        className="w-full pt-6 p-36 flex flex-row gap-4"
        style={{ paddingLeft: "20%" }}
      >
        <div className="flex flex-col gap-4 pt-12 justify-start items-start">
          <p className="text-[#64ffda] flex justify-start items-start">
            Hi, I am
          </p>
          <h1 className="text-[#66fcf1] font-bold text-6xl">
            Pranshu Aggarwal
          </h1>
          <p className="pt-12 w-2/3">
            Tech enthusiast and self-taught programmer. Started learning to code
            as a hobby rather than a career focus. Familiar with a variety of
            programming languages including Python, Javascript, Typescript,
            Java, R. <br />
            <p className="text-[#66fcf1]">Sic Parvis Magna!</p>
          </p>
          <button className="w-1/6 mt-6 transition duration-500 bg-[#66fcf1] hover:bg-[#45a29e] text-black rounded-lg p-2">
            Know More
          </button>
        </div>
        <div className="flex justify-start items-center w-full">
          <img className="bg-[#1f2833]" src={computerLogo} alt="" />
        </div>
      </div>
      <div className="w-full absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
