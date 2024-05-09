"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/vecteezy_smart-watch-vector-icon_14602156-removebg-preview.png";

export default function Navigation() {
  return (
    <nav className="h-[15vh] bg-[#4923bce8] flex flex-row-reverse justify-around text-[#c41a7d] items-center  ">
      <div>
        <button className="p-2 w-[120px] bg-white uppercase rounded-md hover:bg-[#c41a7d] hover:text-white">
          {" "}
          buy now
        </button>
      </div>
      <div className=" text-white">
        <ul className="flex space-x-11 cursor-pointer  ">
          <li className="hover:text-[#c41a7d]">Home</li>
          <li className="hover:text-[#c41a7d]">Product</li>
          <li className="hover:text-[#c41a7d]">About us</li>
          <li className="hover:text-[#c41a7d]">Contacts</li>
        </ul>
      </div>
      <div>
        <Image src={logo} alt="logo" width={90} />
      </div>
    </nav>
  );
}
