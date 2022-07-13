import { Link } from "raviger";

export default function Header() {
  return (
    <div className="p-6 flex justify-between">
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
          <Link
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1] transition duration-500"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1] transition duration-500"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1] transition duration-500"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1] transition duration-500"
          >
            Experience
          </Link>
          <Link
            href="/"
            className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1] transition duration-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
