import React, { Component } from "react";
import imageAfterContainer3 from "../images/imageAfterContainer3.jpg";

export default class imageAfterContainer extends Component {
  render() {
    return (
      <div className="customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
        <div className="lg:relative">
          <img src={imageAfterContainer3} alt="ad" />
          <div className="lg:h-[14rem] lg:w-[37rem] lg:flex lg:justify-center lg:flex-col lg:absolute lg:top-32 lg:mt-11 xl:mr-52 xl:w-[32rem] customLarge:ml-5">
            <div>
              <h2 className="font-semibold text-[1.8125rem] ml-5 mb-2 lg:text-white lg:mb-1">
                Gaining more every down
              </h2>
            </div>
            <div>
              <p className="ml-5 lg:text-white lg:mb-6 md:w-[29.5rem]">
                Microsoft and the NFL are always striving to power a better
                game, from preseason to playoffs
              </p>
            </div>
            <div>
              <button className="text-white bg-black mt-2 mb-2 py-[0.625rem] px-3 ml-5 lg:bg-white lg:text-black lg:font-semibold lg:hover:bg-[#f5f5f7]">
                Read the Story
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
