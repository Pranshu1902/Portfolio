import { useEffect } from "react";
import { linkType } from "../Types/DataType";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

export default function Contact() {
  const filters: linkType[] = [
    { title: "Home", active: false, link: "/" },
    { title: "About", active: false, link: "/about" },
    { title: "Projects", active: false, link: "/projects" },
    { title: "Experience", active: false, link: "/experience" },
    { title: "Contact", active: true, link: "/contact" },
  ];

  useEffect(() => {
    document.title = "Contact | Pranshu Aggarwal";
  }, []);

  return (
    <div className="absolute bg-gradient-to-br from-[#0a192f] via-[#0a192f] to-[#112240] text-[#c5c6c7] w-full min-h-screen">
      {/* Header */}
      <Header filters={filters} />

      <div className="p-4 md:p-24 flex flex-col gap-4 justify-start">
        {/* Intro */}
        <div className="flex flex-row gap-6 p-4 md:p-12 w-full items-center">
          <div className="flex justify-center items-center text-6xl text-[#66fcf1]">
            <i className="fa fa-envelope"></i>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-[#66fcf1] font-bold text-6xl">Contact</h1>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-24 pl-24 md:w-1/4">
          <div className="text-2xl hover:text-[#66fcf1]">
            <i className="fa fa-map-marker"></i>&nbsp; New Delhi, India
          </div>
          <a
            href="https://github.com/Pranshu1902/"
            target={"_blank"}
            rel={"noreferrer"}
            className="text-2xl hover:text-[#66fcf1]"
          >
            <i className="fa fa-github"></i>&nbsp; pranshu1902
          </a>
          <a
            href="https://medium.com/@pranshu1902"
            target={"_blank"}
            rel={"noreferrer"}
            className="text-2xl hover:text-[#66fcf1]"
          >
            <i className="fa fa-medium"></i>&nbsp; pranshu1902
          </a>
          <a
            href="https://twitter.com/Pranshu1902/"
            target={"_blank"}
            rel={"noreferrer"}
            className="text-2xl hover:text-[#66fcf1]"
          >
            <i className="fa fa-twitter"></i>&nbsp; pranshu1902
          </a>
          <a
            href="https://www.linkedin.com/in/pranshu-aggarwal-4aa8181b4/"
            target={"_blank"}
            rel={"noreferrer"}
            className="text-2xl hover:text-[#66fcf1]"
          >
            <i className="fa fa-linkedin"></i>&nbsp; LinkedIn
          </a>
          <a
            href="mailto:pranshu.aggarwal2021@vitstudent.ac.in"
            target={"_blank"}
            rel={"noreferrer"}
            className="text-2xl hover:text-[#66fcf1]"
          >
            <i className="fa fa-envelope-o"></i>&nbsp;Email
          </a>
        </div>

        {/* Footer */}
        <div className="w-full absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
