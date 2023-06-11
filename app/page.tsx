import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import appIcon from "/public/app_icon.png";

import { nFormatter } from "@/lib/utils";

export default async function Home() {
  return (
    <>
      <div className="z-10 mt-20 px-5">
        <div className="flex flex-col text-center md:flex-row">
          <div
            className="animate-fade-up  opacity-0 inline-block"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Image alt="Dropzone 4 Icon" src={appIcon} className="w-20 md:w-64 inline-block" />
          </div>

          <div className="md:pt-14 pt-5">
            {" "}
            <div>
              <h1
                className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{
                  animationDelay: "0.15s",
                  animationFillMode: "forwards",
                }}
              >
                Dropzone{" "}
                <div className="inline-block rounded-md bg-indigo-500 p-1 py-0 font-light font-thin leading-none text-white md:rounded-lg md:p-3 md:py-0">
                  4
                </div>
              </h1>
            </div>
            <div
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
              style={{
                animationDelay: "0.25s",
                animationFillMode: "forwards",
              }}
            >
              Enhance productivity on your Mac
            </div>
          </div>
        </div>
      </div>
      <div
        className="z-10 mt-6 w-8/12 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{
          animationDelay: "0.25s",
          animationFillMode: "forwards",
        }}
      >
        Dropzone is a productivity app for the Mac that makes it faster and
        easier to move and copy files, launch applications, upload to many
        different services, and much more.
      </div>
    </>
  );
}
