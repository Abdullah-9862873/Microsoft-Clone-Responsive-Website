import React, { Component } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class Navbar extends Component {
  render() {
    return (
      <div className="customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
        <div className="navbar flex justify-between p-4 lg:w-[63.8rem] lg:mr-0 customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
          <div className="flex justify-center items-center md:order-2">
            <div className="hamburger ustify-center cursor-pointer inline-block md:hidden">
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
              <div className="line h-0.5 w-6 my-1 bg-black"></div>
            </div>
            <div className="search md:hidden ml-3 cursor-pointer">
              <FontAwesomeIcon icon={solid("magnifying-glass")} />
            </div>
          </div>

          <div className="logo text-center md:order-1 flex">
            <div className="flex justify-center items-center cursor-pointer">
              <img className="w-20" src={logo} alt="logo" />
            </div>
            <div className="features absolute  w-fit bg-gray-200 md:static md:w-auto md:bg-white inset-0 md:flex md:mx-4 md:space-x-2 -translate-x-96 md:-translate-x-0">
              <div className="fitem text-[#262626] text-[0.75rem] mt-1 cursor-pointer">
                Microsoft 365
              </div>
              <div className="fitem text-[#262626] text-[0.75rem] mt-1 cursor-pointer hover:underline">
                Teams
              </div>
              <div className="fitem text-[#262626] text-[0.75rem] mt-1 cursor-pointer hover:underline">
                Windows
              </div>
              <div className="fitem text-[#262626] text-[0.75rem] mt-1 cursor-pointer hover:underline">
                Surface
              </div>
              <div className="fitem text-[#262626] text-[0.75rem] mt-1 cursor-pointer hover:underline">
                Xbox
              </div>
              <div className="fitem text-[#262626] text-[0.75rem] mt-1 cursor-pointer hover:underline">
                More
              </div>
            </div>
          </div>
          <div className="cart text-center md:order-3 flex">
            <div className="search hidden md:block hover:underline cursor-pointer">
              <span className="mr-4">
                All Microsoft{" "}
                <span>
                  <FontAwesomeIcon icon={solid("angle-down")} />
                </span>
              </span>
              <span className="mr-6">
                <FontAwesomeIcon icon={solid("magnifying-glass")} />
              </span>
            </div>
            <div>
              <span className=" cursor-pointer">
                <FontAwesomeIcon icon={solid("cart-shopping")} />{" "}
              </span>
              <span className="cursor-pointer ml-2">Account</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
