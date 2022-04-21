import React from "react";
import HomeNavbar from "./homePages/HomeNavbar";
import Videos from ".././assets/video.mp4";
import Img from "../assets/profile.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="w-fll">
          <video
            autoPlay
            muted
            loop
            className="h-screen w-full object-cover -z-10 absolute"
            src={Videos}
          />
          <HomeNavbar />
          <div className="text-white px-3">
            <div className="flex h-[85vh] flex-col justify-center items-center">
              <img
                src={Img}
                alt="profile_pic"
                className="w-52 h-52 object-cover rounded-full"
              />
              <div className="flex gap-5 py-5">
                <a
                  className="text-2xl hover:text-gray-500"
                  href="https://www.facebook.com/profile.php?id=100009264083773"
                >
                  <BsFacebook />
                </a>
                <a
                  className="text-2xl hover:text-gray-500 text-center"
                  href="https://www.instagram.com/coderfaisal/"
                >
                  <FaInstagram />
                </a>
                <a
                  className="text-2xl hover:text-gray-500"
                  href="https://www.instagram.com/coderfaisal/"
                >
                  <BsTwitter />
                </a>
              </div>
              <h1 className="text-white text-2xl font-bold pb-2 text-center">
                Welcome to my personal site
              </h1>
              <p className="text-gray-300 text-center">
                You know! I'm a front-end
                <strong className="text-white">Designer</strong>& 
                <strong className="text-white">Developer</strong>.
              </p>
              <span className="text-gray-300 mb-2">
                You can hair me any time
              </span>
              <div className="text-white pt-5">
                <Link
                  className="py-3 px-10 bg-[#2D2A99] hover:text-white rounded-md border-[#2D2A99] hover:bg-transparent hover:border hover:no-underline"
                  to="/home"
                >
                  Get Start
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
