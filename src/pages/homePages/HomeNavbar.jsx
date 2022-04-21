import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <div className="z-10 p-8">
        <ul className="flex justify-end items-center gap-5">
          <li>
            <Link className="text-white border border-[#2D2A99] py-2 px-5 rounded-md hover:bg-[#2D2A99] hover:text-white" to="/login">Login</Link>
           
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeNavbar;
