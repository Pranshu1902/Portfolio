export default function Header() {
  return (
    <div className="p-4 flex justify-between">
      <div>
        <p
          style={{ height: "50px", width: "50px", fontSize: "25px" }}
          className="p-2 rounded-full bg-[#66fcf1] text-[#1f2833] flex justify-center items-center"
        >
          P
        </p>
      </div>
      <div className="fadeIn">
        <div className="flex flex-row gap-12 text-xl justify-end text-[#c5c6c7]">
          <a
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]"
          >
            Home
          </a>
          <a
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]"
          >
            About
          </a>
          <a
            href="/projects"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]"
          >
            Projects
          </a>
          <a
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]"
          >
            Experience
          </a>
          <a
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
