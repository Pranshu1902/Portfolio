import { useEffect } from "react";
import profile from "../Images/profile.jpg";
import Footer from "./Common/Footer";
import OnePageHeader from "./Common/OnePageHeader";
import computerLogo from "../computer.png";
import mongo from "../Images/tech/mongodb.png";
import Nextjs from "../Images/tech/nextjs.png";
import React from "../Images/tech/React.png";
import Django from "../Images/tech/django.png";
import Nodejs from "../Images/tech/nodejs.png";
import Typescript from "../Images/tech/typescript.svg";
import Tailwind from "../Images/tech/tailwindcss.svg";
import JavaScript from "../Images/tech/js.png";
import Python from "../Images/tech/python.png";
import threejs from "../Images/tech/threejs.png";
import blender from "../Images/tech/blender.png";
import androidStudio from "../Images/tech/androidStudio.png";
import kotlin from "../Images/tech/kotlin.png";
import express from "../Images/tech/expressjs.png";
import { linkType, projectType } from "../Types/DataType";
import { TypeAnimation } from "react-type-animation";
// import { Link } from "raviger";

import codeLogo from "../code.png";

import data from "./blog.json";
import voting1 from "../Images/projects/voting1.png";
import voting2 from "../Images/projects/voting2.png";
import voting3 from "../Images/projects/voting3.png";
import voting4 from "../Images/projects/voting4.png";
import voting5 from "../Images/projects/voting5.png";
import care from "../Images/projects/care.png";
import unilink1 from "../Images/projects/unilink1.png";
import unilink2 from "../Images/projects/unilink2.png";
import unilink3 from "../Images/projects/unilink3.png";
import gladdenProject from "../Images/projects/thegladdenproject.png";
import BizzCard from "../Images/projects/bizzcard.png";
import BizzCard1 from "../Images/projects/bizzcard1.png";
import BizzCard2 from "../Images/projects/bizzcard2.png";
import BooksWorld from "../Images/projects/books_world.png";
import BooksWorld1 from "../Images/projects/books_world1.png";
import BooksWorld2 from "../Images/projects/books_world2.png";
import BooksWorld3 from "../Images/projects/books_world3.png";
import MoneyManager from "../Images/projects/money_manager.png";
import MoneyManager1 from "../Images/projects/money_manager1.png";
import MoneyManager2 from "../Images/projects/money_manager2.png";
import PChat from "../Images/projects/p_chat.png";
import TheGladdenProject from "../Images/projects/gladdenproject.png";
// import TaskManager from "../Images/projects/task_manager.png";
import MartialArts from "../Images/projects/martial arts.png";
import Jarvis from "../Images/projects/jarvis.png";
import Breakout from "../Images/projects/breakout.png";
import MazeSolver from "../Images/projects/maze.png";
import Atm from "../Images/projects/atm.png";
import Carousal from "./Common/Carousal";
import experienceLogo from "../experience.png";
import { experienceType } from "../Types/DataType";
import egov from "../Images/experience/egov.png";
import unilink from "../Images/experience/unilink.png";
import gdsc from "../Images/experience/gdsc.png";
import pupilfirst from "../Images/experience/pupilfirst.png";
import MIC from "../Images/experience/mic.png";
import Ecell from "../Images/experience/ecell.png";
import Android from "../Images/experience/android.png";
import Gdc from "../Images/experience/gdc.png";
import Vitrendz from "../Images/experience/vitrendz.png";
import Biosphere from "../Images/experience/biosphere.png";

import { Carousel } from "react-responsive-carousel";

export default function Portfolio() {
  const technologies = [
    { name: "Django", img: Django },
    { name: "MongoDb", img: mongo },
    { name: "Express.Js", img: express },
    { name: "React / React Native", img: React },
    { name: "NodeJs", img: Nodejs },
    { name: "Next.Js", img: Nextjs },
    { name: "Tailwind", img: Tailwind },
    { name: "TypeScript", img: Typescript },
    { name: "JavaScript", img: JavaScript },
    { name: "Python", img: Python },
    { name: "Kotlin", img: kotlin },
    { name: "Android Studio", img: androidStudio },
    { name: "ThreeJs", img: threejs },
    { name: "Blender", img: blender },
  ];

  const filters: linkType[] = [
    { title: "Home", active: true, link: "/" },
    { title: "About", active: false, link: "#about" },
    { title: "Blogs", active: false, link: "#blogs" },
    { title: "Projects", active: false, link: "#projects" },
    { title: "Experience", active: false, link: "#experience" },
  ];

  // projects
  const projects: projectType[] = [
    {
      name: "Online Voting",
      description:
        "One shot platform to host elections and view results. Manage your voters, view live results, get result graphs and much more.",
      link: "https://online-voting-pranshu1902.onrender.com/",
      githubLink: "https://github.com/Pranshu1902/Online-Voting",
      image: [voting1, voting2, voting3, voting4, voting5],
      tech: [
        { name: "ExpressJs" },
        { name: "NodeJs" },
        { name: "EJS" },
        { name: "Postgres" },
      ],
    },
    {
      name: "Care",
      description:
        "Care is an integrated tele-triage+bed allocation+patient shifting tool for implementing a decentralised Covid19 management strategy.",
      link: "https://care.coronasafe.in/",
      githubLink: "https://github.com/coronasafe/care_fe/",
      image: [care],
      tech: [
        { name: "Django" },
        { name: "React" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Uni-Link",
      description:
        "There are numerous universities with thousands of clubs gathered inside but they are not connected. Every club has a different website and some of the clubs have no website at all. Hence our platform helps in linking them together, helping students save time and effort. Uni-Link provides features like club email subscriptions, public forums, etc. This project was built by team: United Developers under HackVSIT Hackathon.",
      link: "https://uni-link-fe.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/UniLink_fe/",
      image: [unilink1, unilink2, unilink3],
      tech: [
        { name: "MongoDb" },
        { name: "Express.js" },
        { name: "React.js" },
        { name: "Node.js" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "The Gladden Project",
      description:
        "People are not comfortable in sharing their personal life with stranger over the phone, that's why we created this amazing chatbot which offers you the same experience without having you to worry about your confidentiality.",
      link: "https://the-gladden-project.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/The-Gladden-Project-fe/",
      image: [gladdenProject],
      tech: [
        { name: "Machine Learning" },
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Bizz Card",
      description:
        "Create your digital identity today by using our simple and easy to use website to leave an amazing first impression. Created this project as a team for a hackathon.",
      link: "https://bizz-card.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Bizz-Card-fe/",
      image: [BizzCard, BizzCard1, BizzCard2],
      tech: [
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Books World",
      description:
        "One place to manage all the books you ever read. Get detailed analysis on the book you read, all comments on your books to track your records.",
      link: "https://books-world-pranshu1902.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Books-World-fe/",
      image: [BooksWorld, BooksWorld1, BooksWorld2, BooksWorld3],
      tech: [
        { name: "React" },
        { name: "Django" },
        { name: "Typescript" },
        { name: "Tailwind" },
      ],
    },
    {
      name: "Money Manager",
      description:
        "Ever felt like spending a lot of money without keeping any track? Use our site to manage all your money and know exactly where it is going.",
      link: "https://money-manager-pranshu1902.netlify.app/",
      githubLink: "https://github.com/Pranshu1902/Money-Manager-fe",
      image: [MoneyManager, MoneyManager1, MoneyManager2],
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
      image: [PChat],
      tech: [{ name: "Django" }, { name: "Tailwind" }],
    },
    {
      name: "The Gladden Project",
      description:
        "Feel like you want some personalized advice for your mental stress but are afraid to share you personal info with stranger? Then use your platform where you can get personalized guidance from our bot without worrying about privacy.",
      link: "http://pranshu1902.github.io/TheGladdenProject/",
      githubLink: "https://github.com/Pranshu1902/TheGladdenProject/",
      image: [TheGladdenProject],
      tech: [{ name: "JavaScript" }],
    },
    // {
    //   name: "Task Manager",
    //   description:
    //     "Ever felt like you have a lot of tasks and not able to keep record of all of them? Well maybe you write down the tasks on a paper but to put them with priority and update them constantly can be hectic on paper. That's why I made this.",
    //   link: "https://pranshu19-task-manager.herokuapp.com/",
    //   githubLink: "https://github.com/Pranshu1902/WD-202-Task-Manager/",
    //   image: [TaskManager],
    //   tech: [{ name: "Django" }, { name: "Tailwind" }],
    // },
    {
      name: "Martial Arts Simulator",
      description:
        "This is an online game where I have simulted a martial artist with some commands like kick, punch, block, etc.",
      link: "https://pranshu1902.github.io/Martial%20arts/index.html",
      githubLink:
        "https://github.com/Pranshu1902/pranshu1902.github.io/tree/master/Martial arts",
      image: [MartialArts],
      tech: [{ name: "JavaScript" }],
    },
    {
      name: "Jarvis: Meeting Manager",
      description:
        "Automatically joins meetings for me based on the time table without any commands. Also, it acts as a virtual assistant and helps me with day-to-day tasks.",
      link: "https://drive.google.com/u/0/uc?id=1ewjKZQvJko5kxUpUTeKQ5z1BGsah-34l&export=download",
      githubLink: "https://github.com/Pranshu1902/Voice-Assistant-Jarvis",
      image: [Jarvis],
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
    {
      name: "Breakout: Sixth Sense",
      description:
        "Forget keyboards, use your hand gestures to play the game of breakout.",
      link: "https://pranshu1902.itch.io/breakout-sixth-sense-game",
      githubLink: "https://github.com/Pranshu1902/Breakout-Sixth-sense-version",
      image: [Breakout],
      tech: [{ name: "Python" }, { name: "PyGame" }, { name: "OpenCV" }],
    },
    {
      name: "Maze Solver AI",
      description:
        "This AI solves the maze using Depth-First Search and Breadth-First Search and returns an image comparing both algorithms. I have also made a GUI for this.",
      githubLink: "https://github.com/Pranshu1902/Maze-Solver",
      image: [MazeSolver],
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
    {
      name: "ATM",
      description: "Built a GUI based ATM which stores data in a csv file.",
      githubLink: "https://github.com/Pranshu1902/ATM",
      image: [Atm],
      tech: [{ name: "Python" }, { name: "Tkinter" }],
    },
  ];

  // Experience page
  const experiences: experienceType[] = [
    {
      name: "eGov Foundation",
      image: egov,
      description:
        "Part of a team building the CARE software deployed in multiple states of India in hospitals.",
      position: "SDE Intern",
      tech: ["Django", "React"],
      startDate: "Nov 2022",
      endDate: "Present",
    },
    {
      name: "Google Developer Student Club",
      image: gdsc,
      description:
        "Working with a great community working in fields like Open-source, Data Science, Blockchain.",
      position: "Web Developer",
      tech: ["MERN", "Tailwind"],
      startDate: "Oct 2022",
      endDate: "Present",
    },
    {
      name: "Uni-Link",
      image: unilink,
      description:
        "Unilink helps connect college students in a professional way ensuring that they have an enriching experience at college.",
      position: "Co-Founder",
      tech: ["Entrepreneurship", "Leadership", "Web Dev"],
      startDate: "Oct 2022",
      endDate: "Present",
    },

    {
      name: "Pupilfirst",
      image: pupilfirst,
      description:
        "Teaching Assistant of web development courses on Pupilfirst LMS, helping 3000+ students.",
      position: "Teaching Assistant",
      tech: ["Web development", "Teaching", "Leadership"],
      startDate: "Sept 2022",
      endDate: "Present",
    },
    {
      name: "Microsoft Innovations Club",
      image: MIC,
      description: "Member of a club, an official initiative of Microsoft.",
      position: "Member of Tech Team",
      tech: ["React", "Django", "JavaScript", "Tailwind"],
      startDate: "Aug 2022",
      endDate: "Present",
    },
    {
      name: "E-cell",
      image: Ecell,
      description:
        "Entrepreneurship club working to create great websites on entrepreneurships.",
      position: "Member of Tech Team",
      tech: ["React", "JavaScript", "Tailwind"],
      startDate: "Aug 2022",
      endDate: "Present",
    },
    {
      name: "Android Club",
      image: Android,
      description:
        "Member of a team working to create great websites and android apps.",
      position: "Member of Tech Team",
      tech: ["React", "React Native", "JavaScript", "NodeJS", "Tailwind"],
      startDate: "Jul 2022",
      endDate: "Present",
    },
    {
      name: "VITrendz",
      image: Vitrendz,
      description:
        "Member of a team working on a project to make a lost and found website for VIT students.",
      position: "Front-End Developer",
      tech: ["React", "JavaScript", "NodeJS", "Tailwind"],
      startDate: "Jun 2022",
      endDate: "Aug 2022",
    },
    {
      name: "GDC Internship",
      description:
        "Interning with Coronasafe and Pupilfirst in collaboration with AICTE.",
      position: "Full Stack Developer",
      image: Gdc,
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "May 2022",
      endDate: "Nov 2022",
    },
    {
      name: "Biosphere Club, VIT",
      description:
        "Member of the website team of a club raising awareness regarding climate change and its impact.",
      position: "Full Stack Developer",
      image: Biosphere,
      tech: ["Javascript", "Tailwind"],
      startDate: "Feb 2022",
      endDate: "Jul 2022",
    },
    {
      name: "GDC Fellowship",
      description:
        "One of the 40 out of 48k applicant students selected for GDC fellowship with AICTE for a training + internship programme.",
      position: "Full Stack Developer",
      image: Gdc,
      tech: ["React", "Django", "Typescript", "Tailwind"],
      startDate: "Jan 2022",
      endDate: "May 2022",
    },
  ];

  useEffect(() => {
    document.title = "Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <div className="fixed w-full bg-[#0f2853] backdrop-blur z-10">
        <OnePageHeader filters={filters} />
      </div>

      {/* Home Section */}
      <div className="mt-24 pt-6 pb-24 p-4 md:p-24 flex flex-col gap-4 justify-center items-center w-full">
        {/* Intro */}
        <div className="flex flex-col-reverse md:flex-row gap-4 pb-24 justify-center items-center">
          <div className="flex flex-col gap-4 justify-start items-start">
            <p className="text-[#01d293] flex justify-start items-start">
              Hi, I am
            </p>
            <h1 className="text-[#66fcf1] font-bold text-5xl md:text-7xl">
              <TypeAnimation
                sequence={[
                  "Pranshu Aggarwal",
                  2000,
                  "A Self-taught programmer",
                  2000,
                  "A Tech Enthusiast",
                  3000,
                  "A Serial Chiller",
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="pt-12 w-full md:w-2/3 text-xl">
              Tech enthusiast and self-taught programmer. Started learning to
              code as a hobby rather than a career focus. Familiar with a
              variety of technology including Django, React, Python, Javascript,
              Typescript, Java, etc. <br />
              <p className="text-[#01d293] pt-2 text-2xl">Sic Parvis Magna</p>
            </p>
            <a
              href="mailto:pranshu1902@gmail.com"
              className="md:w-1/6 mt-6 flex justify-center items-center font-bold transition duration-500 bg-[#66fcf1] hover:bg-[#45a29e] text-black rounded-lg p-2"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex justify-center items-center w-3/4">
            <img className="bg-transparent" src={computerLogo} alt="" />
          </div>
        </div>

        {/* About Section */}
        <div
          id="about"
          className="p-4 md:p-24 flex flex-col gap-4 justify-start"
        >
          {/* Intro */}
          <div className="flex flex-row gap-6 pb-12 w-full items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h1 className="text-[#66fcf1] font-bold text-6xl">About</h1>
            </div>
          </div>

          <div className="pl-12 h-full pb-24">
            <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-4 w-full h-full">
              <div className="flex flex-col gap-4 md:w-1/2 justify-center text-xl">
                <div className="pt-6">
                  <p>
                    Hello, I'm Pranshu, a sophomore CS undergrad at VIT,
                    Chennai.
                  </p>
                </div>
                <div>
                  <p>
                    I am a self-taught programmer. Started learning to code as a
                    hobby rather than a career focus. I build websites for
                    people from all walks of life. Primarily using Django, MERN
                    stack.
                  </p>
                </div>
                <div>
                  <p>
                    I also write blogs, find them &nbsp;
                    <a
                      href="https://medium.com/@pranshu1902"
                      rel="noreferrer"
                      target={"_blank"}
                      className="text-[#64ffda] txt hover:underline transition duration-1000"
                    >
                      here
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <p>
                    I'm a GDC Fellow '22 and Teaching Assistant @
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
                  <p>Entrepreneurship and self-help books enthusiast.</p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center items-center">
                <img
                  src={profile}
                  alt="profile"
                  width={"40%"}
                  className="rounded-sm border-2 border-[#64ffda] md:p-3"
                />
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-2 justify-center items-center pt-12">
          <p className="text-3xl text-[#ccd6f6] font-bold">
            Technologies I have worked with:
          </p>
          <div className="flex flex-wrap md:flex-row gap-8 p-6">
            {technologies.map((tech) => (
              <div className="flex flex-row gap-4 justify-center items-center hover:scale-110 transition duration-300">
                <img src={tech.img} width={50} height={40} alt="" />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div
        id="blogs"
        className="pt-6 pb-24 p-4 md:p-24 flex flex-col gap-4 w-full"
      >
        <div style={{ paddingBottom: "3%" }} className="flex flex-row pt-6">
          <h1 className="text-[#66fcf1] font-bold flex text-5xl md:text-8xl">
            Blogs
          </h1>
        </div>
        <div className="text-3xl" style={{ paddingBottom: "15%" }}>
          Some of my latest blogs
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-row gap-12 overflow-auto">
            <Carousel autoPlay={true} infiniteLoop={true}>
              {data.map((blog) => (
                <div className="bg-[#112240] flex flex-row w-full h-4/5 flex-shrink-0 flex-nowrap rounded-lg p-3 shadow-lg hover:shadow-2xl transition duration-300">
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="md:w-1/3 flex justify-center">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="rounded-md w-fit object-scale-down"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-2xl font-medium text-[#66fcf1]">
                        {blog.title}
                      </p>
                      <p className="pt-6 pb-6">{blog.intro}</p>
                      <a
                        className="px-8 mt-6 border-2 border-[#01d293] text-[#01d293] p-2 rounded-lg"
                        target="_blank"
                        rel="noreferrer"
                        href={blog.url}
                      >
                        Read
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <a
            href="https://medium.com/@pranshu1902"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center"
          >
            <button className="px-8 hover:bg-[#112240] transition duration-300 border-2 border-[#01d293] text-[#01d293] p-2 rounded-lg">
              Read More
            </button>
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="w-full p-4 pb-24 md:p-24 flex flex-col gap-4"
      >
        <div
          style={{ paddingBottom: "3%" }}
          className="flex flex-row pt-6 justify-start items-center"
        >
          <img
            src={codeLogo}
            alt="code logo"
            className="bg-transparent w-1/6 flex"
          />
          <h1 className="text-[#66fcf1] font-bold flex text-5xl md:text-8xl">
            Projects
          </h1>
        </div>
        <div
          className="text-3xl flex justify-start pl-12"
          style={{ paddingBottom: "15%" }}
        >
          Some things I've built
        </div>
        {/* Projects List */}
        <div className="flex w-auto">
          {/* centerMode={true} */}
          <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={true} width={"40%"}>
            {projects.map((project: projectType, index) => {
              const styleClass: string =
                index % 2 === 0
                  ? "flex flex-col lg:flex-row"
                  : "flex flex-col lg:flex-row";
              return (
                <div
                  className={
                    styleClass + " gap-12 flex flex-shrink-0 flex-nowrap w-fit"
                  }
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 h-fit shadow-lg">
                    {project.image.length === 1 ? (
                      <img
                        className="rounded-lg"
                        src={project.image[0]}
                        alt=""
                      />
                    ) : (
                      <div className="z-0">
                        <Carousal image={project.image} />
                      </div>
                    )}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col h-full w-full lg:w-1/2">
                    <p className="text-4xl text-[#66fcf1] font-bold pb-4">
                      {project.name}
                    </p>
                    <p className="text-xl pb-4 bg-[#112240] rounded-lg p-4 shadow-lg">
                      {project.description}
                    </p>
                    <p className="flex flex-wrap gap-4 pb-4 text-xl">
                      {project.tech.map((tech: any) => (
                        <div className="font-bold">{tech.name}</div>
                      ))}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target={"_blank"}
                        rel={"noreferrer"}
                        className="text-3xl hover:text-[#66fcf1] hover:scale-125 transition duration-500"
                      >
                        <i className="fa fa-github"></i>
                      </a>
                      {project.link && (
                        <a
                          href={project.link}
                          target={"_blank"}
                          rel={"noreferrer"}
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
          </Carousel>
        </div>
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        className="p-4 md:p-24 flex flex-col gap-4 justify-start"
      >
        {/* Intro */}
        <div className="flex flex-row gap-2 md:p-12 w-full items-center">
          <div className="flex justify-center items-center w-1/3 md:w-1/5">
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
                    <div className="flex flex-col md:flex-row md:w-2/5 gap-4 bg-[#112240] rounded-lg p-3 shadow-lg">
                      <div className="flex justify-center items-center w-1/4">
                        <img
                          src={experience.image}
                          alt={experience.name + " logo"}
                          className="rounded-full w-5/6"
                        />
                      </div>
                      <div className="flex flex-col md:w-3/4">
                        <p className="text-2xl font-bold text-[#66fcf1]">
                          {experience.name}
                        </p>
                        <p className="text-xl pt-2 text-[#01d293]">
                          {experience.position}
                        </p>
                        <p>{experience.description}</p>
                        <p className="flex flex-row flex-wrap gap-2 font-bold">
                          {experience.tech.map((tech: string) => {
                            return <p className="truncate">{tech}</p>;
                          })}
                        </p>
                        <p className="pt-4">
                          {experience.startDate} - {experience.endDate}
                        </p>
                      </div>
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
                    <div className="flex flex-col md:flex-row md:w-2/5 gap-4 bg-[#112240] rounded-lg p-3 shadow-lg">
                      <div className="flex justify-center items-center w-1/4">
                        <img
                          src={experience.image}
                          alt={experience.name + " logo"}
                          className="rounded-full w-5/6"
                        />
                      </div>
                      <div className="flex flex-col md:w-3/4">
                        <p className="text-2xl font-bold text-[#66fcf1]">
                          {experience.name}
                        </p>
                        <p className="text-xl pt-2 text-[#01d293]">
                          {experience.position}
                        </p>
                        <p>{experience.description}</p>
                        <p className="flex flex-row flex-wrap gap-2 font-bold">
                          {experience.tech.map((tech: string) => {
                            return <p className="truncate">{tech}</p>;
                          })}
                        </p>
                        <p className="pt-4">
                          {experience.startDate} - {experience.endDate}
                        </p>
                      </div>
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
