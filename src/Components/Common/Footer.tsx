export default function Footer() {
  return (
    <div className="bg-[#171a26] w-full p-3 flex flex-row justify-center gap-6">
      <div>
        <div className="flex justify-center items-center gap-6 text-2xl">
          {/* <div className="font-bold">Contact</div> */}
          <div className="text-4xl flex gap-4">
            <a
              href="https://github.com/Pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-github hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://twitter.com/pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-twitter hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://medium.com/@pranshu1902/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-medium hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pranshu-aggarwal-4aa8181b4/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-linkedin hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/15925350/pranshu-aggarwal"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa fa-stack-overflow hover:text-[#64ffda] hover:scale-125 transition duration-200"></i>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-xl">
          Made with&nbsp;<i className="fa fa-heart text-red-500"></i>&nbsp;by
          Pranshu
        </div>
      </div>
      {/* <div className="flex justify-end items-center">
        <i className="fa fa-copyright"></i>&nbsp; Pranshu 2022
      </div> */}
    </div>
  );
}
