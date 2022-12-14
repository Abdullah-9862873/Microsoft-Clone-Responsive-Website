import React, { Component, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { HideOn } from "react-hide-on-scroll";

export default function Footerr() {
  return (
    <div className="lg:w-[62rem] customLarge:w-[68.8rem] xl:w-[76.3rem] 2xl:w-[92.3rem]">
      <div>
        <div className="flex space-x-2 mt-[2.813rem] ml-5 lg:w-[61.9rem] customLarge:w-[67.8rem] xl:w-[75.3rem] 2xl:w-[91.3rem]">
          <div>
            <p className="mb-3 font-semibold">Follow Microsoft&nbsp;</p>
          </div>
          <div className="flex space-x-4">
            <span className="ml-6">
              <FontAwesomeIcon icon={brands("facebook")} />
            </span>
            <span>
              <FontAwesomeIcon icon={brands("twitter")} />
            </span>
            <span>
              <FontAwesomeIcon icon={brands("linkedin")} />
            </span>
          </div>
        </div>

        <div>
          <HideOn atHeight height={1000} inverse={true}>
            <button className="backToTopBtn mt-3 text-center py-[0.625rem] px-12 bg-backToTopBtn text-black font-medium leading-1 cursor-pointer text-[1rem]  ml-2 mb-6 rounded-md ssmall:fixed ssmall: ssmall:right-0 ssmall:bottom-0">
              <FontAwesomeIcon icon={solid("arrow-up")} /> Back to Top
            </button>
          </HideOn>
        </div>
      </div>

      <div className="bg-[#f2f2f2] pb-5 flex flex-wrap lg:w-[64rem] customLarge:w-[72.5rem] xl:w-[75rem] 2xl:w-[92rem]">
        <div className="pl-3 ml-4 w-[8rem] lg:w-[7.46rem] customLarge:w-[8.873rem] xl:w-[10.123rem] 2xl:w-[12.783]">
          <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
            What's New
          </h2>
          <ul className="space-y-2 no-hover:underline text-[#616161] text-[0.688rem]">
            <li className="cursor-pointer mt-4 hover:underline">
              Surface Pro 9
            </li>
            <li className="cursor-pointer hover:underline">Surface Laptop 5</li>
            <li className="cursor-pointer hover:underline">
              Surface Studio 2+
            </li>
            <li className="cursor-pointer hover:underline">
              Surface Laptop Go 2
            </li>
            <li className="cursor-pointer hover:underline">
              Surface Laptop Studio
            </li>
            <li className="cursor-pointer hover:underline">Surface Duo 2</li>
            <li className="cursor-pointer hover:underline">Microsoft 365</li>
            <li className="cursor-pointer hover:underline">Window 11 apps</li>
          </ul>
        </div>
        <div className="pl-3 ml-4 w-[10rem] lg:w-[9.46rem] customLarge:w-[10.873rem] xl:w-[12.123rem] 2xl:w-[14.783rem]">
          <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
            Microsoft Store
          </h2>
          <ul className="space-y-2 no-hover:underline text-[#616161] text-[0.688rem]">
            <li className="cursor-pointer mt-4 hover:underline">
              Account Profile
            </li>
            <li className="cursor-pointer hover:underline">Download Center</li>
            <li className="cursor-pointer hover:underline">
              Microsoft Store support
            </li>
            <li className="cursor-pointer hover:underline">Returns</li>
            <li className="cursor-pointer hover:underline">Order Tracking</li>
            <li className="cursor-pointer hover:underline">
              Personal shopping appointments
            </li>
            <li className="cursor-pointer hover:underline">
              Microsoft Store Promise
            </li>
            <li className="cursor-pointer hover:underline">
              Flexible Payments
            </li>
          </ul>
        </div>
        <div className="pl-3 ml-4 w-[12rem] lg:w-[11.46rem] customLarge:w-[12.873rem] xl:w-[14.123rem] 2xl:w-[16.783rem]">
          <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
            Education
          </h2>
          <ul className="space-y-2 no-hover:underline text-[#616161] text-[0.688rem]">
            <li className="cursor-pointer mt-4 hover:underline">
              Microsoft in education
            </li>
            <li className="cursor-pointer hover:underline">
              Devices for education
            </li>
            <li className="cursor-pointer hover:underline">
              Microsoft Teams for Education
            </li>
            <li className="cursor-pointer hover:underline">
              Microsoft 365 Education
            </li>
            <li className="cursor-pointer hover:underline">
              Education consultation appointment
            </li>
            <li className="cursor-pointer hover:underline">
              Educator training and development
            </li>
            <li className="cursor-pointer hover:underline">
              Deals for students and parents
            </li>
            <li className="cursor-pointer hover:underline">
              Azure for students
            </li>
          </ul>
        </div>
        <div className="pl-3 ml-4 w-[9rem] lg:w-[8.46rem] customLarge:w-[9.873rem] xl:w-[11.123rem] 2xl:w-[13.783rem]">
          <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
            Business
          </h2>
          <ul className="space-y-2 no-hover:underline text-[#616161] text-[0.688rem]">
            <li className="cursor-pointer mt-4 hover:underline">
              Microsoft Cloud
            </li>
            <li className="cursor-pointer hover:underline">
              Microsoft Security
            </li>
            <li className="cursor-pointer hover:underline">Dynamics 365</li>
            <li className="cursor-pointer hover:underline">Microsoft 365</li>
            <li className="cursor-pointer hover:underline">
              Microsoft Power Platform
            </li>
            <li className="cursor-pointer hover:underline">Microsoft Teams</li>
            <li className="cursor-pointer hover:underline">
              Microsoft Industry
            </li>
            <li className="cursor-pointer hover:underline">Small Business</li>
          </ul>
        </div>
        <div className="pl-3 ml-4 w-[8rem] lg:w-[7.46rem] customLarge:w-[8.873rem] xl:w-[10.123rem] 2xl:w-[12.783rem]">
          <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
            Developer & IT
          </h2>
          <ul className="space-y-2 no-hover:underline text-[#616161] text-[0.688rem]">
            <li className="cursor-pointer mt-4 hover:underline">Azure</li>
            <li className="cursor-pointer hover:underline">Developer Center</li>
            <li className="cursor-pointer hover:underline">Documentation</li>
            <li className="cursor-pointer hover:underline">Microsoft Learn</li>
            <li className="cursor-pointer hover:underline">
              Microsoft Tech Community
            </li>
            <li className="cursor-pointer hover:underline">
              Azure Marketplace
            </li>
            <li className="cursor-pointer hover:underline">AppSource</li>
            <li className="cursor-pointer hover:underline">Visual Studio</li>
          </ul>
        </div>
        <div className="pl-3 ml-4 w-[8rem] lg:w-[7.46rem] customLarge:w-[8.873rem] xl:w-[10.123rem] 2xl:w-[12.783rem]">
          <h2 className="text-[#616161] text-[0.94rem] leading-5 font-semibold mt-6 pt-7">
            Company
          </h2>
          <ul className="space-y-2 no-hover:underline text-[#616161] text-[0.688rem]">
            <li className="cursor-pointer mt-4 hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">About Microsoft</li>
            <li className="cursor-pointer hover:underline">Company news</li>
            <li className="cursor-pointer hover:underline">
              Privacy at Microsoft
            </li>
            <li className="cursor-pointer hover:underline">Investors</li>
            <li className="cursor-pointer hover:underline">
              Diversity and inclusion
            </li>
            <li className="cursor-pointer hover:underline">Accessibility</li>
            <li className="cursor-pointer hover:underline">Sustainability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
