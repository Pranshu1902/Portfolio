import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import experienceLogo from "../experience.png";
import { experienceType, linkType } from "../Types/DataType";

export default function Experience() {
  const experiences: experienceType[] = [
    {
      name: "VITrendz",
      description:
        "Member of a team working on a project to make a lost and found website for VIT students.",
      position: "Front-End Developer",
      image: "",
      tech: ["React", "JavaScript", "NodeJS", "Tailwind"],
      startDate: "Jun 2022",
      endDate: "Present",
    },
    {
      name: "GDC Internship",
      description:
        "Interning with Coronasafe and Pupilfirst in collaboration with AICTE.",
      position: "Full Stack Developer",
      image: "",
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "May 2022",
      endDate: "Present",
    },
    {
      name: "Biosphere Club, VIT",
      description:
        "Member of the website team of a club raising awareness regarding climate change and its impact.",
      position: "Full Stack Developer",
      image: "",
      tech: ["Javascript", "Tailwind"],
      startDate: "Feb 2022",
      endDate: "Present",
    },
    {
      name: "GDC Fellowship",
      description:
        "One of the 40 out of 48k applicant students selected for GDC fellowship with AICTE for a training + internship programme.",
      position: "Full Stack Developer",
      image: "",
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "Jan 2022",
      endDate: "May 2022",
    },
  ];

  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "About", active: false, link: "/about" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: true, link: "/experience" },
    { title: "Contact", active: false, link: "/contact" },
  ];

  useEffect(() => {
    document.title = "Experience | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header filters={filters} />
      <div
        className="p-4 md:p-24 flex flex-col gap-4 justify-start"
        // style={{ paddingLeft: "20%" }}
      >
        {/* Intro */}
        <div className="flex flex-row gap-2 md:p-12 w-full items-center">
          <div className="flex justify-center items-center w-1/5">
            <img className="bg-transparent" src={experienceLogo} alt="" />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-5xl md:text-6xl">
              Experience
            </h1>
          </div>
        </div>

        {/* Experiene */}
        <div className="h-full w-full flex justify-center items-center pb-24">
          <div className="flex flex-col gap-12 w-screen">
            {experiences.map((experience: experienceType, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="left-0 flex flex-row gap-4 justify-start items-center">
                    <div className="flex flex-col md:w-2/5 gap-4 bg-[#112240] rounded-lg p-3 shadow-lg">
                      <p className="text-2xl font-bold text-[#66fcf1]">
                        {experience.name}
                      </p>
                      <p>{experience.description}</p>
                      <p className="flex flex-row gap-4 font-bold">
                        {experience.tech.map((tech: string) => {
                          return <p>{tech}</p>;
                        })}
                      </p>
                      <p>
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                    <div>
                      <p className="p-2 bg-[#66fcf1] rounded-full"></p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="right-0 flex flex-row gap-4 justify-end items-center">
                    <div>
                      <p className="p-2 bg-[#66fcf1] rounded-full"></p>
                    </div>
                    <div className="flex flex-col md:w-2/5 gap-4 bg-[#112240] rounded-lg p-3 shadow-lg">
                      <p className="text-2xl font-bold text-[#66fcf1]">
                        {experience.name}
                      </p>
                      <p>{experience.description}</p>
                      <p className="flex flex-row flex-wrap gap-4 font-bold">
                        {experience.tech.map((tech: string) => {
                          return <p>{tech}</p>;
                        })}
                      </p>
                      <p>
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
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
