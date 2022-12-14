import React, { Component } from "react";
import image1Container3 from "../images/image1Container3.jpg";
import image2Container3 from "../images/image2Container3.webp";
import image3Container3 from "../images/image3Container3.webp";
import image4Container3 from "../images/image4Container3.webp";

export default class Container3 extends Component {
  render() {
    return (
      <div className="mt-11 customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
        <div className="font-semibold mb-3 ml-5 text-[1.5rem] mr-4 lg:w-[62.5rem] customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
          For Business
        </div>
        <div className="customsmall:flex customsmall:flex-wrap">
          <div className="cursor-pointer  mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
            <div>
              <img
                className="w-[90%] m-auto"
                src={image1Container3}
                alt="product"
              />
            </div>
            <div>
              <span className="bg-[#950c17] text-white inline-block py-[0.3rem] px-3 text-base cursor-pointer mt-[0.9rem] mb-2">
                New
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5">
                Surface Pro 9 for Business
              </h2>
            </div>
            <div>
              <p className="mt-4">
                {" "}
                Empower flexible, all-day impact with tablet portability and
                laptop performance.{" "}
              </p>
            </div>
            <div>
              <button className="text-[#950C17] pr-[1.3125em] mt-2 mb-14">
                Shop now {" > "}
              </button>
            </div>
          </div>
          <div className="cursor-pointer  mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
            <div>
              <img
                className="w-[90%] m-auto"
                src={image2Container3}
                alt="product"
              />
            </div>
            <div>
              <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 mt-4">
                Get Microsoft Teams for free
              </h2>
            </div>
            <div>
              <p className="mt-4">
                {" "}
                Online meetings, chat, and shared cloud storage—all in one
                place.{" "}
              </p>
            </div>
            <div>
              <button className="text-[#950C17] pr-[1.3125em] mt-2 mb-14">
                Sign up for free {" > "}
              </button>
            </div>
          </div>
          <div className="cursor-pointer  mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
            <div>
              <img
                className="w-[90%] m-auto"
                src={image3Container3}
                alt="product"
              />
            </div>
            <div>
              <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 mt-4">
                Welcome to your Windows 365 Cloud PC
              </h2>
            </div>
            <div>
              <p className="mt-2">
                {" "}
                Securely stream your Windows experience from the Microsoft cloud
                to any device.{" "}
              </p>
            </div>
            <div>
              <button className="text-[#950C17] pr-[1.3125em] mt-4 mb-14">
                Get it today {" > "}
              </button>
            </div>
          </div>
          <div className="cursor-pointer mb-9 ml-5 mr-5 customsmall:w-[14.12rem] customLarge:w-[14.62rem] xl:w-[16.50rem] 2xl:w-[20.50rem]">
            <div>
              <img
                className="w-[90%] m-auto"
                src={image4Container3}
                alt="product"
              />
            </div>
            <div>
              <h2 className="font-semibold text-[1.3125rem] mb-2 leading-5 mt-4">
                Thrive in a hybrid world
              </h2>
            </div>
            <div>
              <p className="mt-2">
                {" "}
                Discover tools, resources, and strategies to help your employees
                succeed in the new world of flexible work.{" "}
              </p>
              <button className="text-[#950C17] pr-[1.3125em] mt-2 mb-14 ml-5">
                Learn more {" > "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
