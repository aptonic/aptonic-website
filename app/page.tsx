import Image from "next/image";
import appIcon from "/public/app_icon.png";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function Home() {
  return (
    <>
      <div className="mt-20 px-5">
        <div className="flex flex-col text-center md:flex-row">
          <div
            className="inline-block  animate-fade-up opacity-0"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Image
              alt="Dropzone 4 Icon"
              src={appIcon}
              className="inline-block w-44 md:w-64"
            />
          </div>

          <div className="pt-5 md:pt-14">
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
              className="mt-6 animate-fade-up text-center font-light text-gray-500 opacity-0 md:text-xl"
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
        className="mt-6 w-8/12 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{
          animationDelay: "0.25s",
          animationFillMode: "forwards",
        }}
      >
        Dropzone is a productivity app for the Mac that makes it faster and
        easier to move and copy files, launch applications, upload to many
        different services, and much more.
      </div>

      <div className="px-5 mt-10 flex justify-center text-center">
        <Balancer>
          <Link className="text-blue-500 underline" href="/blog/dropzone-4-versus-dropzone-3-should-i-upgrade/">Dropzone 4 versus Dropzone 3 - Read Blog Post</Link>
        </Balancer>
      </div>

      <div className="w-9/12 px-5">
        <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
      </div>

      <div className="flex w-full flex-wrap flex-row items-center justify-center">
        <button
          type="button"
          className="inline-flex mr-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-2 py-2 sm:px-5 sm:py-3 text-center text-xs sm:text-sm font-medium text-white hover:bg-gradient-to-bl">
          <svg className="fill-current w-3 h-4 mr-1 sm:w-4 sm:h-5 sm:mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          Download Dropzone 4
        </button>

        <button className="inline-flex mr-2 group relative items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 
        to-blue-500 p-0.5 text-xs sm:text-sm font-medium text-gray-900 hover:text-white group-hover:from-purple-600 group-hover:to-blue-500">
          <span className="relative rounded-md bg-white px-2 py-1.5 sm:px-5 sm:py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
            <svg
              className="inline-block w-3 h-4 mr-1 sm:w-4 sm:h-4 sm:mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Buy Dropzone 4
          </span>
        </button>
      </div>
    </>
  );
}
