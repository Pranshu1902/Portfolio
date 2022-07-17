import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import computerLogo from "../computer.png";
import { Link } from "raviger";
import React from "../Images/tech/React.png";
import Django from "../Images/tech/django.png";
import Typescript from "../Images/tech/typescript.svg";
import Tailwind from "../Images/tech/tailwindcss.svg";
import JavaScript from "../Images/tech/js.png";
import Python from "../Images/tech/python.png";
import Git from "../Images/tech/git.png";
import Github from "../Images/tech/github1.svg";
import VSCode from "../Images/tech/vsc.svg";
import Ubuntu from "../Images/tech/ubuntu.png";
import npm from "../Images/tech/npm.png";
import { linkType } from "../Types/DataType";

export default function Home() {
  const technologies = [
    { name: "React", img: React },
    { name: "Django", img: Django },
    { name: "Tailwind", img: Tailwind },
    { name: "TypeScript", img: Typescript },
    { name: "JavaScript", img: JavaScript },
    { name: "Python", img: Python },
    { name: "Github", img: Github },
    { name: "Git", img: Git },
    { name: "VSCode", img: VSCode },
    { name: "Ubuntu", img: Ubuntu },
    { name: "npm", img: npm },
  ];

  const filters: linkType[] = [
    { title: "Home", active: true, link: "/" },
    { title: "About", active: false, link: "/about" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: false, link: "/experience" },
    { title: "Contact", active: false, link: "/contact" },
  ];

  useEffect(() => {
    document.title = "Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header filters={filters} />
      <div className="pt-6 pb-24 p-4 md:p-24 flex flex-col gap-4 justify-center items-center w-full">
        {/* Intro */}
        <div className="flex flex-col-reverse md:flex-row gap-4 pb-48 justify-center items-center">
          <div className="flex flex-col gap-4 justify-start items-start">
            <p className="text-[#64ffda] flex justify-start items-start">
              Hi, I am
            </p>
            <h1 className="text-[#66fcf1] font-bold text-7xl">
              Pranshu Aggarwal
            </h1>
            <p className="pt-12 w-full md:w-2/3 text-xl">
              Tech enthusiast and self-taught programmer. Started learning to
              code as a hobby rather than a career focus. Familiar with a
              variety of technology including Django, React, Python, Javascript,
              Typescript, Java, etc. <br />
              <p className="text-[#66fcf1] pt-2 text-2xl">Sic Parvis Magna</p>
            </p>
            <Link
              href="/contact"
              className="md:w-1/6 mt-6 flex justify-center items-center font-bold transition duration-500 bg-[#66fcf1] hover:bg-[#45a29e] text-black rounded-lg p-2"
            >
              Get in Touch
            </Link>
          </div>
          <div className="flex justify-center items-center w-3/4">
            <img className="bg-transparent" src={computerLogo} alt="" />
          </div>
        </div>

        {/* About me */}
        <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 w-full">
          <div className="flex flex-col gap-4 md:w-1/2 justify-center text-xl">
            <h1 className="text-3xl font-bold text-[#ccd6f6]">About Me</h1>
            <hr />
            <div className="pt-6">
              <p>
                Hello, I'm Pranshu, a sophomore CS undergrad at VIT, Chennai.
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
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://avatars.githubusercontent.com/u/70687348?v=4"
              alt="profile"
              width={"40%"}
              className="rounded-full border-2 border-[#64ffda] md:p-3"
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-2 justify-center items-center pt-36">
          <p className="text-3xl text-[#ccd6f6] font-bold">
            Technologies I have worked with:
          </p>
          <div className="flex flex-wrap md:flex-row gap-8 p-6">
            {technologies.map((tech) => (
              <div className="flex flex-row gap-4 justify-center items-center">
                <img src={tech.img} width={50} height={40} alt="" />
                <p>{tech.name}</p>
              </div>
            ))}
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
