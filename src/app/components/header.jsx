"use client";

import Image from "next/image";
import image from "../../../public/images/-original-imagmkcmnswrpx8e.png";
import image1 from "../../../public/images/36-322-aster-android-ios-fitshot-yes-original-imagma8gxk6wnjyy.png";
import videobtn from "../../../public/images/play-button.png";
import localFont from "next/font/local";
const myFont2 = localFont({ src: "../fonts/Eurostile.ttf" });
// Import useState from 'react' library
import { useState } from "react";
export default function Homeproduct() {
  const [img1, setImg1] = useState(true);
  const [img2, setImg2] = useState(false);

  return (
    <section
      className={` flex justify-between items-center ${myFont2.className}`}
    >
      <div className="ml-40  space-y-6">
        <h1 className="uppercase text-[#f44949] font-semibold">smart watch</h1>
        <p className="text-5xl w-[420px] uppercase">
          this will change your life forever!
        </p>
        <p className="w-[420px] text-lg opacity-60">
          Experience seamless connectivity and unparalleled convenience with our
          smartwatch. Stay effortlessly organized with notifications, track your
          fitness goals.
        </p>
        <p className="text-2xl font-bold ">100$</p>
        <div className="flex space-x-6 items-center">
          <button
            type="button"
            className="p-2 w-[120px] uppercase rounded-md text-lg bg-[#ff2b71] !text-white"
          >
            Buy Now
          </button>
          <button
            type="video"
            className="p-2 w-[160px] uppercase rounded-md text-sm flex space-x-3 justify-center items-center"
          >
            <span>
              <Image src={videobtn} alt="videobtn" width={25} />
            </span>
            <span>watch video</span>
          </button>
        </div>
      </div>
      <div className="space-y-8 cursor-pointer">
        <div
          className={`w-[120px] h-[120px] flex justify-center items-center  rounded-lg ${
            img1 ? "bg-purple-500" : "bg-purple-500/40"
          }`}
          onClick={() => {
            setImg2(false);
            setImg1(true);
          }}
        >
          <Image src={image} width={70} alt="smartwatch" />
        </div>
        <div
          className={`w-[120px] h-[120px] flex justify-center items-center  rounded-lg ${
            img2 ? "bg-purple-500" : "bg-purple-500/40"
          }`}
          onClick={() => {
            setImg1(false);
            setImg2(true);
          }}
        >
          <Image src={image1} width={70} alt="smartwatch" />
        </div>
      </div>

      <div className=" relative mt-20 mr-20 w-[400px] h-[600px] overflow-x-hidden">
        <Image
          src={image}
          alt="smartwatch"
          className={`${img1 ? "transentrer" : " rig transsorti"} absolute `}
        />{" "}
        <Image
          src={image1}
          alt="smartwatch"
          className={`${img2 ? "transentrer" : " rig transsorti"} absolute`}
        />
      </div>
    </section>
  );
}
