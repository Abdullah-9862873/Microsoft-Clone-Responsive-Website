import React, { Component } from "react";
import image1Container2 from "../images/image1Container2.jpg";
import image2Container2 from "../images/image2Container2.webp";
import image3Container2 from "../images/image3Container2.jpg";
import image4Container2 from "../images/image4Container2.jpg";
import imageAFterContainer2 from "../images/imageAfterContainer2.jpg";

export default class Container2 extends Component {
  render() {
    return (
      <div className="customsmall:flex customsmall:flex-wrap customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem] ">
        <div className="mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
          <img className="w-[100%]" src={image1Container2} alt="Product" />
          <div className="mt-4 mb-2 text-[1.3125rem] font-semibold">
            Save up to $300 on Surface Pro 9
          </div>
          <p className="mt-1 mb-[0.35rem]">
            {" "}
            Keep spirits bright with a game-changing combo of laptop power and
            tablet flexibility—all in one ultra-portable device. Offer ends
            12/25.{" "}
          </p>
          <button className="text-[#950c17] mt-4 mb-4 cursor-pointer no-underline font-semibold">
            Shop Surface Pro 9 {" > "}
          </button>
        </div>
        <div className="mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
          <img className="w-[100%]" src={image2Container2} alt="Product" />
          <div className="mt-4 mb-2 text-[1.3125rem] font-semibold">
            Up to $400 off select Surface Laptop Studio
          </div>
          <p className="mt-1 mb-[0.35rem]">
            {" "}
            Save now on the ultimate gift for creators: a laptop, tablet, and
            portable canvas in one amazing device. Offer ends 12/22.{" "}
          </p>
          <button className="text-[#950c17] mt-4 mb-4 cursor-pointer no-underline font-semibold">
            Shop Surface Laptop Studio {" > "}
          </button>
        </div>
        <div className="mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
          <img className="w-[100%]" src={image3Container2} alt="Product" />
          <div className="mt-4 mb-2 text-[1.3125rem] font-semibold">
            $60 off Xbox Series S
          </div>
          <p className="mt-1 mb-[0.35rem]">
            {" "}
            Score savings on the smallest, sleekest Xbox yet. Only $239.99,
            while supplies last. Offer ends 12/31.{" "}
          </p>
          <button className="text-[#950c17] mt-4 mb-4 cursor-pointer no-underline font-semibold">
            Shop Xbox Series S {" > "}
          </button>
        </div>
        <div className="mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
          <img className="w-[100%]" src={image4Container2} alt="Product" />
          <div className="mt-4 mb-2 text-[1.3125rem] font-semibold">
            Xbox Series X
          </div>
          <p className="mt-1 mb-[0.35rem]">
            {" "}
            Give thrills that’ll last all year with the fastest, most powerful
            Xbox ever. Available now.{" "}
          </p>
          <button className="text-[#950c17] mt-4 mb-4 cursor-pointer no-underline font-semibold">
            Shop Xbox Series X {" > "}
          </button>
        </div>
      </div>
    );
  }
}
