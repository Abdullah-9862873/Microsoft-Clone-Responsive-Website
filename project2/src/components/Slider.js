import React, { Component } from "react";
import asset1 from "../images/sliderImage1.jpg";
import asset2 from "../images/asset2.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div className="slider1 customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
          <div>
            <div className="imageContainer lg:relative lg:mr-0">
              <img
                className="w-100% md:w-100% md:h-80 lg:h-[30.625rem]"
                src={asset1}
                alt="Product"
              />
              <div className="mx-4 my-4 lg:h-[17.06rem] lg:w-[22rem] lg:flex lg:justify-center lg:items-center lg:absolute lg:top-32 lg:right-14 xl:mr-28 xl:w-[26rem] ">
                <div className="lg:h-[11.5rem] lg:w-[22rem]">
                  <div className="info">
                    <div className="text-lg font-semibold bg-white lg:bg-[#f5f5f7] w-fit">
                      Save on select Surface
                    </div>
                    <div className="mb-6 mt-3 text-base bg-white lg:bg-[#f5f5f7] w-fit xl:w-[26rem]">
                      Unwrap possibility with hot deals on powerful, portable
                      Surface devices for everyone on your list
                    </div>
                  </div>
                  <div className="btn">
                    <button className="text-white bg-black my-2 font-semibold border-sliderBtnBorder pt-[0.625rem] pb-[0.625rem] px-[0.75rem] lg:pt-[0.3rem] lg:pb-[0.3rem] rounded-md w-fit">
                      Shop Surface Devices
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider2 mt-4 customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
          <div>
            <div className="imageContainer2 lg:relative w-fit">
              <img
                className="w-100% md:w-100% md:h-80 lg:h-[30.625rem]"
                src={asset2}
                alt="Product"
              />
              <div className="mx-4 my-4 lg:h-[17.06rem] lg:w-[33rem] lg:flex lg:flex-col lg:justify-center lg:items-center lg:absolute lg:top-32 lg:left-2">
                <div className="lg:h-[11.5rem] lg:w-[31.188rem]">
                  <div className="info">
                    <div className="text-lg font-semibold bg-white lg:bg-transparent w-fit">
                      A sound gift
                    </div>
                    <div className="mb-6 mt-3 text-base bg-white lg:bg-transparent w-fit">
                      From silent nights to party playlists, they’ll never miss
                      a beat with premium audio from Surface
                    </div>
                  </div>

                  <div className="btn">
                    <button className="text-white bg-black my-2 font-semibold border-sliderBtnBorder pt-[0.625rem] pb-[0.625rem] px-[0.75rem] lg:pt-[0.3rem] lg:pb-[0.3rem] rounded-md w-fit">
                      Shop Surface Devices
                    </button>
                    <div className="pt-2 pb-2 pr-[1.325rem] inline-block items-center ml-8 xxsm:ml-0 xxsm:block xsm:ml-8 xsm:inline cursor-pointer font-semibold hover:underline lg:bg-transparent">
                      Shop Surface Headphones 2{" > "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
