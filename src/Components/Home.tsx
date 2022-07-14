import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import computerLogo from "../computer.png";
import { Link } from "raviger";

export default function Home() {
  useEffect(() => {
    document.title = "Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header />
      <div
        className="pt-6 p-36 flex flex-col gap-4 justify-center w-full"
        // style={{ paddingLeft: "20%" }}
      >
        {/* Intro */}
        <div className="flex flex-row gap-4 pb-48 p-12 justify-center">
          <div className="flex flex-col gap-4 pt-12 justify-start items-start">
            <p className="text-[#64ffda] flex justify-start items-start">
              Hi, I am
            </p>
            <h1 className="text-[#66fcf1] font-bold text-7xl">
              Pranshu Aggarwal
            </h1>
            <p className="pt-12 w-2/3 text-xl">
              Tech enthusiast and self-taught programmer. Started learning to
              code as a hobby rather than a career focus. Familiar with a
              variety of programming languages including Python, Javascript,
              Typescript, Java, R. <br />
              <p className="text-[#66fcf1]">Sic Parvis Magna!</p>
            </p>
            <Link
              href="/contact"
              className="w-1/6 mt-6 flex justify-center items-center font-bold transition duration-500 bg-[#66fcf1] hover:bg-[#45a29e] text-black rounded-lg p-2"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex justify-start items-center w-3/4">
            <img className="bg-transparent" src={computerLogo} alt="" />
          </div>
        </div>

        {/* About me */}
        <div className="flex flex-row-reverse justify-center items-center gap-4 w-full">
          <div className="flex flex-col gap-4 w-1/2 justify-center">
            <h1 className="text-3xl font-bold text-[#ccd6f6]">About Me</h1>
            <hr />
            <div className="pt-6">
              <p>
                Hello, I'm Pranshu, a sophmore CS undergrad at VIT, Chennai.
              </p>
            </div>
            <div>
              <p>I build websites.</p>
            </div>
            <div>
              <p>
                I'm a GDC Fellow '22 @
                <a
                  href="https://www.pupilfirst.org/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-[#64ffda] txt hover:underline transition duration-1000"
                >
                  Pupilfirst
                </a>
                &nbsp; working with &nbsp;
                <a
                  href="https://www.aicte-india.org/"
                  rel="noreferrer"
                  target={"_blank"}
                  className="text-[#64ffda] txt hover:underline transition duration-1000"
                >
                  AICTE
                </a>
                &nbsp; as a full-stack web developer.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Technologies I have worked with:</p>
              <div>
                <span className="fa fa-react"></span>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="https://avatars.githubusercontent.com/u/70687348?v=4"
              alt="profile"
              width={"40%"}
              className="rounded-full border-2 border-[#64ffda] p-3"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
