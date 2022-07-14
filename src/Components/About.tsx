import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

export default function About() {
  useEffect(() => {
    document.title = "Experience | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header />

      <div className="pt-6 p-36 flex flex-col gap-4 justify-start">
        {/* Intro */}
        <div className="flex flex-row gap-6 p-12 w-full items-center">
          <div className="flex justify-center items-center text-6xl text-[#66fcf1]">
            <i className="fa fa-info-circle"></i>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-6xl">About</h1>
          </div>
        </div>

        <div>
          <div className="flex flex-row justify-center items-center gap-4 w-full">
            <div className="flex flex-col gap-4 w-1/2 justify-center">
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
    </div>
  );
}
