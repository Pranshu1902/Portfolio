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
          <p className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]">
            Home
          </p>
          <p className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]">
            About
          </p>
          <p className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]">
            Projects
          </p>
          <p className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]">
            Experience
          </p>
          <p className="hover:text-[#66fcf1] hover:border-b-2 hover:border-[#66fcf1]">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}
