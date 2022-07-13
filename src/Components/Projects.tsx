import { useEffect } from "react";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import codeLogo from "../code.png";
import { projectType } from "../Types/DataType";

// Import project images
import MoneyManager from "../Images/projects/money_manager.png";
import PChat from "../Images/projects/p_chat.png";
import TheGladdenProject from "../Images/projects/gladdenproject.png";
import TaskManager from "../Images/projects/task_manager.png";
import MartialArts from "../Images/projects/martial arts.png";
import Jarvis from "../Images/projects/jarvis.png";
import Breakout from "../Images/projects/breakout.png";
import MazeSolver from "../Images/projects/maze.png";
import Atm from "../Images/projects/atm.png";

export default function Projects() {
  const projects: projectType[] = [
    {
      name: "Money Manager",
      description:
        "Ever felt like spending a lot of money without keeping any track? Use our site to manage all your money and know exactly where it is going.",
      link: "https://money-manager-pranshu1902.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Money-Manager-fe",
      image: MoneyManager,
      tech: [
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "P-Chat",
      description:
        "Chat like never before. A free and open-source chatting site to connect with your friends. Built using Django. Fast, secure, reliable, easy to use.",
      link: "http://p-chat-pranshu1902.herokuapp.com/",
      githubLink: "https://github.com/Pranshu1902/P-Chat/",
      image: PChat,
      tech: [{ name: "Django" }, { name: "Tailwind" }],
    },
    {
      name: "The Gladden Project",
      description:
        "Feel like you want some personalized advice for your mental stress but are afraid to share you personal info with stranger? Then use your platform where you can get personalized guidance from our bot without worrying about privacy.",
      link: "http://pranshu1902.github.io/TheGladdenProject/",
      githubLink: "https://github.com/Pranshu1902/TheGladdenProject/",
      image: TheGladdenProject,
      tech: [{ name: "JavaScript" }],
    },
    {
      name: "Task Manager",
      description:
        "Ever felt like you have a lot of tasks and not able to keep record of all of them? Well maybe you write down the tasks on a paper but to put them with priority and update them constantly can be hectic on paper. That's why I made this.",
      link: "https://pranshu19-task-manager.herokuapp.com/",
      githubLink: "https://github.com/Pranshu1902/WD-202-Task-Manager/",
      image: TaskManager,
      tech: [{ name: "Django" }, { name: "Tailwind" }],
    },
    {
      name: "Martial Arts Simulator",
      description:
        "This is an online game where I have simulted a martial artist with some commands like kick, punch, block, etc.",
      link: "/Martial%20arts/index.html",
      githubLink:
        "https://github.com/Pranshu1902/pranshu1902.github.io/tree/master/Martial arts",
      image: MartialArts,
      tech: [{ name: "JavaScript" }],
    },
    {
      name: "Jarvis: Meeting Manager",
      description:
        "Automatically joins meetings for me based on the time table without any commands. Also, it acts as a virtual assistant and helps me with day-to-day tasks.",
      link: "https://drive.google.com/u/0/uc?id=1ewjKZQvJko5kxUpUTeKQ5z1BGsah-34l&export=download",
      githubLink: "https://github.com/Pranshu1902/Voice-Assistant-Jarvis",
      image: Jarvis,
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
    {
      name: "Breakout: Sixth Sense",
      description:
        "Forget keyboards, use your hand gestures to play the game of breakout.",
      link: "https://pranshu1902.itch.io/breakout-sixth-sense-game",
      githubLink: "https://github.com/Pranshu1902/Breakout-Sixth-sense-version",
      image: Breakout,
      tech: [{ name: "Python" }, { name: "PyGame" }, { name: "OpenCV" }],
    },
    {
      name: "Maze Solver AI",
      description:
        "This AI solves the maze using Depth-First Search and Breadth-First Search and returns an image comparing both algorithms. I have also made a GUI for this.",
      githubLink: "https://github.com/Pranshu1902/Maze-Solver",
      image: MazeSolver,
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
    {
      name: "ATM",
      description: "Built a GUI based ATM which stores data in a csv file.",
      githubLink: "https://github.com/Pranshu1902/ATM",
      image: Atm,
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
  ];

  useEffect(() => {
    document.title = "Projects | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      <Header />
      <div className="w-full pt-6 p-36 flex flex-col gap-4">
        <div
          style={{ paddingBottom: "3%" }}
          className="flex flex-row pt-6 justify-start items-center"
        >
          <img
            src={codeLogo}
            alt="code logo"
            className="bg-transparent w-1/6 flex"
          />
          <h1 className="text-[#66fcf1] font-bold flex text-8xl">Projects</h1>
        </div>
        <div
          className="text-3xl flex justify-end"
          style={{ paddingBottom: "15%" }}
        >
          Some of the things I've built
        </div>
        {/* Projects List */}
        <div className="flex flex-col gap-36">
          {projects.map((project: projectType, index) => {
            const styleClass: string =
              index % 2 == 0
                ? "flex flex-col lg:flex-row"
                : "flex flex-col lg:flex-row-reverse";
            return (
              <div className={styleClass + " gap-12"}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <img className="rounded-lg" src={project.image} alt="" />
                </div>
                {/* Text */}
                <div className="flex flex-col justify-center h-full w-1/2">
                  <p className="text-4xl text-[#66fcf1] font-bold pb-4">
                    {project.name}
                  </p>
                  <p className="text-xl pb-4 bg-[#112240] rounded-lg p-4">
                    {project.description}
                  </p>
                  <p className="flex gap-4 pb-4">
                    {project.tech.map((tech) => (
                      <div className="font-bold">{tech.name}</div>
                    ))}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target={"_blank"}
                      rel={"relnoreferrer"}
                      className="text-3xl hover:text-[#66fcf1] hover:scale-125 transition duration-500"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target={"_blank"}
                        rel={"relnoreferrer"}
                        className="text-3xl hover:text-[#66fcf1] hover:scale-125 transition duration-500"
                      >
                        <i className="fa fa-external-link"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
}
