import Image from "next/image";
import appIcon from "/public/app_icon.webp";
import Balancer from "react-wrap-balancer";
import DzReviewCard from "@/components/home/dzreview-card";
import BuyButton from "@/components/home/buy-button";
import BuyLink from "@/components/home/buy-link";
import ProFeatures from "@/components/home/pro-features";
import AppVersion from "@/components/home/app-version";
import VideoDemo from "@/components/home/video-demo";
import "./appstories/appstories.css";

export default async function Home({ isAppStories }) {
  return (
    <>
      <div className="mt-20 px-5">
        <div className="flex flex-col text-center md:flex-row">
          <div
            className="inline-block animate-fade-up opacity-0"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Image
              alt="Dropzone 4 Icon"
              src={appIcon}
              priority={true}
              className="inline-block w-44 md:w-64"
            />
          </div>

          <div className="pt-5 md:pt-10">
            <div>
              <h1
                className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{
                  animationDelay: "0.25s",
                  animationFillMode: "forwards",
                }}
              >
                Dropzone{" "}
                <div className="inline-block rounded-md bg-purple-500 p-1 py-0 font-light font-thin leading-none text-white md:rounded-lg md:p-3 md:py-0">
                  4
                </div>
              </h1>
            </div>
            <div
              className="mt-2 animate-fade-up text-center font-light text-gray-500 opacity-0 md:text-xl"
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
            >
              Enhance productivity on your Mac
            </div>
            <div
              className="mt-4 animate-fade-up text-center font-light text-gray-500 opacity-0 md:text-xl"
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
            >
              <VideoDemo />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-6 w-[20rem] animate-fade-up text-center font-light text-gray-500 opacity-0 md:w-[45rem] md:text-xl"
        style={{
          animationDelay: "0.45s",
          animationFillMode: "forwards",
        }}
      >
        Dropzone is a Mac app that redefines your drag and drop experience,
        accelerates file transfers, simplifies application launches, and
        seamlessly integrates with many services to optimise your workflow and
        increase your productivity.
      </div>

      <div
        className="mt-10 flex w-full animate-fade-up justify-center px-8 text-center opacity-0"
        style={{
          animationDelay: "0.55s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>
          <a
            className="text-blue-400 underline"
            href="https://aptonic.com/blog/dropzone-4-updated-for-macos-sonoma"
          >
            Updated for macOS Sonoma - Read Blog Post
          </a>
        </Balancer>
      </div>
      <div
        className="animate-fade-up opacity-0"
        style={{
          animationDelay: "0.55s",
          animationFillMode: "forwards",
        }}
      >
        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        {isAppStories && (
          <div
            className="mb-10 mt-10 animate-fade-up rounded-md bg-blue-50 p-5 text-center text-white opacity-0"
            style={{
              animationDelay: "0.55s",
              animationFillMode: "forwards",
            }}
          >
            <div className="mb-5 text-xl font-bold text-gray-500">
              Welcome to AppStories Listeners
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="header-fills_appstories__L3G6o mx-auto"
              style={{ height: 70 }}
              viewBox="0 0 392 96"
            >
              <g className="header-fills_grey__vNOOo">
                <path d="M121.8 73.7h9.2v1.7h-7.4v4.8h7v1.7h-7V87h7.4v1.7h-9.2v-15zM137.1 83l-3.8-5.6h2.1l2.6 4.1h.2l2.6-4.1h2l-3.8 5.5 3.8 5.6h-2.1l-2.6-4.2h-.1l-2.6 4.2h-2l3.7-5.5zM145.3 77.4h1.8v1.8h.2c.7-1.2 1.9-2 3.5-2 2.8 0 4.7 2.3 4.7 5.7 0 3.5-1.8 5.7-4.7 5.7-1.5 0-2.9-.8-3.5-2h-.2v5.5h-1.8V77.4zm8.2 5.6c0-2.6-1.2-4.2-3.2-4.2S147 80.4 147 83s1.2 4.2 3.3 4.2c2 0 3.2-1.6 3.2-4.2zM158.3 73h1.8v15.5h-1.8V73zM163 83c0-3.6 2-5.8 5.1-5.8s5.1 2.2 5.1 5.7c0 3.6-2 5.7-5.1 5.7s-5.1-2-5.1-5.6zm8.4 0c0-2.7-1.2-4.2-3.3-4.2s-3.3 1.5-3.3 4.2c0 2.6 1.2 4.2 3.3 4.2s3.3-1.6 3.3-4.2zM176 77.4h1.8v1.7h.2c.4-1.2 1.5-1.8 3-1.8.3 0 .7 0 .9.1V79c-.4-.1-.7-.1-1.1-.1-1.7 0-2.9 1.1-2.9 2.7v6.9H176V77.4zM183.8 74c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2c-.7.1-1.2-.5-1.2-1.2zm.3 3.4h1.8v11.1h-1.8V77.4zM189.3 77.4h1.8v1.7h.2c.6-1.2 1.6-1.9 3.2-1.9 2.5 0 3.9 1.5 3.9 4.1v7.2h-1.8v-6.8c0-2-.8-3-2.6-3s-2.9 1.2-2.9 3.1v6.6h-1.8v-11zM201.5 89.4h1.9c.2.8 1.2 1.4 2.8 1.4 2 0 3.2-.9 3.2-2.6V86h-.2c-.7 1.2-2 1.9-3.5 1.9-2.9 0-4.7-2.2-4.7-5.3 0-3.1 1.8-5.4 4.7-5.4 1.6 0 2.8.8 3.5 2h.1v-1.8h1.8v11c0 2.5-1.9 4.1-5 4.1-2.6 0-4.3-1.2-4.6-3.1zm7.9-6.8c0-2.2-1.2-3.8-3.3-3.8-2.1 0-3.2 1.6-3.2 3.8 0 2.2 1.2 3.8 3.2 3.8s3.3-1.6 3.3-3.8zM221.1 85.7V79h-1.8v-1.5h1.8v-2.9h1.9v2.9h2.4V79H223v6.3c0 1.3.5 1.8 1.6 1.8h.8v1.5c-.4.1-.7.1-1 .1-2.3-.1-3.3-.9-3.3-3zM228.2 73h1.8v6.1h.2c.6-1.2 1.6-1.9 3.2-1.9 2.5 0 3.9 1.5 3.9 4.1v7.2h-1.8v-6.8c0-2-.8-3-2.6-3s-2.9 1.2-2.9 3.1v6.6h-1.8V73zM240 83c0-3.4 2-5.8 5-5.8s4.9 2.2 4.9 5.6v.7h-8c.1 2.3 1.3 3.6 3.3 3.6 1.5 0 2.4-.7 2.7-1.4v-.1h1.8v.1c-.4 1.5-2 3-4.6 3-3.2 0-5.1-2.2-5.1-5.7zm1.9-.9h6.2c-.2-2.2-1.4-3.2-3-3.2-1.8-.1-3 1-3.2 3.2zM257.6 77.4h1.8l2.2 8.9h.2l2.5-8.9h1.7l2.5 8.9h.2l2.2-8.9h1.8l-3.1 11.1h-1.8l-2.5-8.6h-.3l-2.5 8.6h-1.8l-3.1-11.1zM274 83c0-3.6 2-5.8 5.1-5.8 3.2 0 5.1 2.2 5.1 5.7 0 3.6-2 5.7-5.1 5.7-3.2.1-5.1-2-5.1-5.6zm8.4 0c0-2.7-1.2-4.2-3.3-4.2-2.1 0-3.3 1.5-3.3 4.2 0 2.6 1.2 4.2 3.3 4.2 2.1 0 3.3-1.6 3.3-4.2zM287 77.4h1.8v1.7h.2c.4-1.2 1.5-1.8 3-1.8.3 0 .7 0 .9.1V79c-.4-.1-.7-.1-1.1-.1-1.7 0-2.9 1.1-2.9 2.7v6.9H287V77.4zM295.2 73h1.8v15.5h-1.8V73zM299.8 83c0-3.5 1.8-5.8 4.7-5.8 1.5 0 2.9.8 3.5 1.9h.2V73h1.8v15.5h-1.8v-1.8h-.2c-.7 1.2-1.9 2-3.5 2-2.8 0-4.7-2.2-4.7-5.7zm8.4 0c0-2.6-1.2-4.2-3.3-4.2-2 0-3.2 1.6-3.2 4.2s1.2 4.2 3.2 4.2 3.3-1.6 3.3-4.2zM318.8 83c0-3.6 2-5.8 5.1-5.8 3.2 0 5.1 2.2 5.1 5.7 0 3.6-2 5.7-5.1 5.7-3.2.1-5.1-2-5.1-5.6zm8.4 0c0-2.7-1.2-4.2-3.3-4.2-2.1 0-3.3 1.5-3.3 4.2 0 2.6 1.2 4.2 3.3 4.2 2.1 0 3.3-1.6 3.3-4.2zM332.6 78.9h-1.8v-1.5h1.8v-1.2c0-2.2 1.1-3.3 3.2-3.3.4 0 .8 0 1.2.1v1.4c-.2 0-.5-.1-.8-.1-1.3 0-1.8.6-1.8 1.8v1.2h2.5v1.5h-2.5v9.6h-1.8v-9.5zM344.7 85.4c0-2 1.5-3.1 4.1-3.3l3.2-.2v-1c0-1.4-.8-2.1-2.5-2.1-1.3 0-2.2.5-2.5 1.4h-1.8v-.1c.3-1.7 2-2.9 4.4-2.9 2.7 0 4.2 1.4 4.2 3.7v7.6H352v-1.6h-.2c-.7 1.2-1.9 1.8-3.4 1.8-2.1 0-3.7-1.2-3.7-3.3zm4.1 1.8c1.8 0 3.2-1.2 3.2-2.8v-1l-3 .2c-1.7.1-2.4.7-2.4 1.8s.9 1.8 2.2 1.8zM357.1 77.4h1.8v1.8h.2c.7-1.2 1.9-2 3.5-2 2.8 0 4.7 2.3 4.7 5.7 0 3.5-1.8 5.7-4.7 5.7-1.5 0-2.9-.8-3.5-2h-.2v5.5h-1.8V77.4zm8.2 5.6c0-2.6-1.2-4.2-3.2-4.2s-3.3 1.6-3.3 4.2 1.2 4.2 3.3 4.2c2 0 3.2-1.6 3.2-4.2zM370 77.4h1.8v1.8h.2c.7-1.2 1.9-2 3.5-2 2.8 0 4.7 2.3 4.7 5.7 0 3.5-1.8 5.7-4.7 5.7-1.5 0-2.9-.8-3.5-2h-.2v5.5H370V77.4zm8.2 5.6c0-2.6-1.2-4.2-3.2-4.2s-3.3 1.6-3.3 4.2 1.2 4.2 3.3 4.2c2 0 3.2-1.6 3.2-4.2zM382.3 85.7h1.8c.3.9 1.2 1.5 2.6 1.5 1.5 0 2.6-.7 2.6-1.7 0-.8-.6-1.3-1.9-1.6l-1.7-.4c-2.1-.5-3-1.4-3-3 0-1.8 1.8-3.2 4.1-3.2s4 1.2 4.2 3h-1.8c-.2-.9-1.1-1.5-2.4-1.5-1.3 0-2.3.7-2.3 1.7 0 .8.6 1.2 1.9 1.5l1.7.4c2.1.5 3.1 1.4 3.1 3 0 2-1.9 3.4-4.5 3.4-2.5-.1-4.2-1.3-4.4-3.1zM96 6.7c0-.3-.2-.5-.5-.5h-5.1L95.8.7c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-5.4 5.4v-5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.2c-2-1.7-4.2-3.1-6.7-4C77.7.1 74.8 0 66.2 0H29.8c-8.7 0-11.5.2-15.9 1.6-2.5.9-4.7 2.3-6.7 4V.4c.1-.3-.1-.5-.4-.5s-.5.2-.5.5v5.1L.8.1C.7-.1.3-.1.1.1 0 .2 0 .6.1.8l5.4 5.5h-5c-.3-.1-.5.1-.5.4s.2.5.5.5h5.2c-1.7 2-3.1 4.2-4 6.7C.2 18.2.1 21.1.1 29.7V47.8c-.1.1-.1.2 0 .3V66.2c0 8.7.2 11.5 1.6 15.9.9 2.5 2.3 4.7 4 6.7H.5c-.3 0-.5.2-.5.5s.2.5.5.5h5.1L.2 95.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l5.5-5.4v5.1c0 .3.2.5.5.5s.5-.2.5-.5v-5.2c2 1.7 4.2 3.1 6.7 4 4.3 1.5 7.2 1.6 15.8 1.6H48c.1.1.2.1.3 0H66.4c8.7 0 11.5-.2 15.9-1.6 2.5-.9 4.7-2.3 6.7-4v5.2c0 .3.2.5.5.5s.5-.2.5-.5v-5.1l5.4 5.4c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-5.4-5.5h5.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.2c1.7-2 3.1-4.2 4-6.7 1.4-4.3 1.6-7.2 1.6-15.8v-.2-18c.1-.1.1-.2 0-.3V30.1v-.2-.2c0-8.7-.1-11.5-1.6-15.9-.9-2.5-2.3-4.7-4-6.7h5.2c0 .1.2-.1.2-.4zM48.5 30.4c4.3.1 8.4 1.8 11.5 4.8L48.5 46.7V30.4zm-1 16.3L36 35.2c3.1-3 7.2-4.6 11.5-4.8v16.3zm-.7.7H30.5c.1-4.3 1.8-8.4 4.8-11.5l11.5 11.5zm0 1L35.3 59.9c-3-3.1-4.6-7.2-4.8-11.5h16.3zm.7.7v16.3c-4.3-.1-8.4-1.8-11.5-4.8l11.5-11.5zm1 0L60 60.6c-3.1 3-7.2 4.7-11.5 4.8V49.1zm.7-.7h16.3c-.1 4.3-1.8 8.4-4.8 11.5L49.2 48.4zm0-1l11.5-11.5c3 3.1 4.6 7.2 4.8 11.5H49.2zm11.5-12.9c-1.9-1.8-4.2-3.2-6.7-4.1h10.8l-4.1 4.1zm-25.4 0l-4.1-4.1H42c-2.5.9-4.8 2.3-6.7 4.1zm-.7.7c-1.8 1.9-3.2 4.2-4.1 6.8V31.1l4.1 4.1zm0 25.4l-4.1 4.1V53.9c.9 2.5 2.3 4.8 4.1 6.7zm.7.7c1.9 1.8 4.2 3.2 6.8 4.1H31.2l4.1-4.1zm25.4 0l4.1 4.1H54c2.5-.9 4.8-2.3 6.7-4.1zm.7-.7c1.8-1.9 3.2-4.2 4.1-6.7v10.8l-4.1-4.1zm0-25.4l4.1-4.1v10.8c-.9-2.5-2.3-4.8-4.1-6.7zm-12.9-5.8v-6.5c6 .1 11.8 2.4 16.2 6.5H48.5zm-1 0H31.3c4.5-4 10.2-6.3 16.2-6.5v6.5zm-18 18H23c.1-6 2.4-11.8 6.5-16.2v16.2zm0 1v16.2c-4-4.5-6.3-10.2-6.5-16.2h6.5zm18 18v6.5c-6-.1-11.8-2.4-16.2-6.5h16.2zm1 0h16.2c-4.4 4.1-10.2 6.4-16.2 6.5v-6.5zm18-18H73c-.1 6-2.4 11.8-6.4 16.2l-.1-16.2zm0-1V31.2c4.1 4.4 6.4 10.2 6.5 16.2h-6.5zm-1-18.7c-4.7-4.3-10.7-6.7-17-6.8V7.2c5.9.1 11.7 1.4 17 4v17.5zm1-17c3.6 1.9 7 4.3 9.9 7.1l-9.9 9.9v-17zM47.5 22c-6.3.1-12.3 2.5-17 6.8V11.2c5.3-2.6 11.1-3.9 17-4V22zm-18 6.7l-9.9-9.9c2.9-2.9 6.3-5.3 9.9-7.1v17zm-.7.7h-17c1.9-3.6 4.3-7 7.1-9.9l9.9 9.9zm0 1c-4.3 4.7-6.7 10.7-6.8 17H7.3c.1-5.9 1.4-11.7 4-17h17.5zm-6.8 18c.1 6.3 2.5 12.3 6.8 17H11.3c-2.5-5.3-3.9-11.1-4-17H22zm6.8 18l-9.9 9.9c-2.9-2.9-5.3-6.3-7.1-9.9h17zm.7.7v17c-3.6-1.9-7-4.3-9.9-7.1l9.9-9.9zm1 0c4.7 4.3 10.7 6.7 17 6.8v14.7c-5.9-.1-11.7-1.4-17-4V67.1zm18 6.8c6.3-.1 12.3-2.5 17-6.8v17.6c-5.3 2.6-11.1 3.9-17 4V73.9zm18-6.8l9.9 9.9c-2.9 2.9-6.3 5.3-9.9 7.1v-17zm.7-.7h17c-1.9 3.6-4.3 7-7.1 9.9l-9.9-9.9zm0-1c4.3-4.7 6.7-10.7 6.8-17h14.7c-.1 5.9-1.4 11.7-4 17H67.2zm6.8-18c-.1-6.3-2.5-12.3-6.8-17h17.6c2.6 5.3 3.9 11.1 4 17H74zm-6.7-18l9.9-9.9c2.9 2.9 5.3 6.3 7.1 9.9h-17zm9.9-11.3c-3.1-3-6.7-5.6-10.6-7.5V7.2H88L77.2 18.1zm-11.6-8c-2.8-1.3-5.6-2.2-8.5-2.9h8.4l.1 2.9zm-35 0V7.2H39c-2.9.6-5.8 1.6-8.4 2.9zm-1 .5c-3.9 1.9-7.5 4.5-10.6 7.5L8 7.2h21.5l.1 3.4zm-11.4 8.2c-3 3.1-5.6 6.7-7.5 10.6H7.3V7.9l10.9 10.9zm-8 11.6C8.9 33.1 8 36 7.3 38.9v-8.5h2.9zm-3.8 17H1v-17h5.3l.1 17zM1 63.1V48.4h5.3v17H1v-2.3zM7.3 57c.6 2.9 1.6 5.7 2.9 8.5H7.3V57zm3.3 9.4c1.9 3.9 4.5 7.5 7.5 10.6L7.3 87.9V66.4h3.3zm8.3 11.3c3.1 3 6.7 5.6 10.6 7.5v3.3H8l10.9-10.8zm11.6 8c2.7 1.3 5.6 2.2 8.5 2.9h-8.5v-2.9zm35 0v2.9h-8.4c2.9-.7 5.7-1.6 8.4-2.9zm1-.5c3.9-1.9 7.5-4.5 10.6-7.5L88 88.6H66.5v-3.4zM77.8 77c3-3.1 5.6-6.7 7.5-10.6h3.3v21.5L77.8 77zm8-11.6c1.3-2.7 2.2-5.5 2.9-8.5v8.5h-2.9zm3.8-17H95v17h-5.3l-.1-17zM95 32.7v14.7h-5.3v-17H95v2.3zm-6.3 6.2c-.6-2.9-1.6-5.7-2.9-8.5h2.9v8.5zm-3.3-9.5c-1.9-3.9-4.5-7.5-7.5-10.6L88.7 7.9v21.5h-3.3zm2.5-23.2H66.5V.9c8.3 0 11.1.2 15.2 1.5 2.3.9 4.4 2.2 6.2 3.8zM65.5.9v5.3h-17V.9h17zm-18 0v5.3h-17V.9h17zM14.3 2.5C18.4 1.1 21.2.9 29.5.9v5.3H8.1c1.8-1.6 3.9-2.9 6.2-3.7zM2.6 14.2c.8-2.3 2.1-4.4 3.7-6.2v21.4H1c0-8.3.2-11.1 1.6-15.2zM1 66.4h5.3v21.4c-1.6-1.8-2.9-3.9-3.7-6.2C1.2 77.5 1 74.7 1 66.4zm7 23.2h21.5v5.3c-8.3 0-11.1-.2-15.2-1.5-2.3-.9-4.4-2.2-6.3-3.8zm22.5 5.3v-5.3h17v5.3h-17zm18 0v-5.3h17v5.3h-17zm33.2-1.5c-4.1 1.4-6.9 1.5-15.2 1.5v-5.3h21.4c-1.8 1.6-3.9 2.9-6.2 3.8zm11.7-11.8c-.8 2.3-2.1 4.4-3.7 6.2V66.4H95c0 8.3-.2 11.1-1.6 15.2zM95 29.4h-5.3V8c1.6 1.8 2.9 3.9 3.7 6.2 1.4 4.1 1.6 6.9 1.6 15.2z"></path>
              </g>
              <g className="header-fills_light-blue__52iH_">
                <path d="M73.5 15c-.1-.1-.3-.1-.4-.1H22.9c-.2 0-.3 0-.4.1-.3.1-.5.4-.5.8v64.3c0 .5.4.9.9.9 0 0 22.3-14.7 25.1-14.7s25.1 14.6 25.1 14.6c.5 0 .9-.4.9-.9V15.8c0-.4-.2-.7-.5-.8zM152.5 47.1h-7.9l-2.5-11h-9.7l-2.3 11h-7.4l9.8-42h9.3l10.7 42zm-11.9-18l-3.4-13-3.1 13h6.5zM164.6 58.4l-6.6 1.3V17.1h6.2l.4.4c1.5-.6 3-.9 4.6-.9 3.7 0 6.6 1.1 8.5 3.2 2 2.3 3 5.3 2.9 8.4v8.3c0 3.6-1 6.4-3.1 8.4-2.2 2-5.1 3-8.1 2.9-.8 0-1.5 0-2.3-.1-.6-.1-1.1-.2-1.6-.4l-.9-.3v11.4zM174 35v-7c0-3.3-1.5-4.9-4.6-4.9-1.3-.1-2.7.3-3.7 1.2-.8.9-1.3 2.1-1.2 3.4v8.2c0 3.6 1.6 5.4 4.9 5.4 1.8 0 3.1-.5 3.7-1.4.7-1.6 1-3.2.9-4.9zM195.7 58.4l-6.6 1.3V17.1h6.2l.4.4c1.5-.6 3-.9 4.6-.9 3.7 0 6.5 1.1 8.5 3.2 2 2.3 3.1 5.3 2.9 8.4v8.3c0 3.6-1 6.4-3.1 8.4-2.2 2-5.1 3-8.1 2.9-.8 0-1.5 0-2.3-.1-.6-.1-1.1-.2-1.6-.4l-.9-.3v11.4zm9.4-23.4v-7c0-3.3-1.5-4.9-4.6-4.9-1.3-.1-2.7.3-3.7 1.2-.8.9-1.3 2.1-1.2 3.4v8.2c0 3.6 1.6 5.4 4.9 5.4 1.8 0 3.1-.5 3.7-1.4.7-1.6 1.1-3.2.9-4.9zM217.8 36.4l7.1-1c.1 1.6.9 3.2 2.2 4.3 1.4 1.1 3.1 1.7 4.9 1.6 2.4 0 4.2-.5 5.4-1.7a4.6 4.6 0 001.7-3.6c0-1.5-.3-2.9-1.1-4.1-.7-1.2-1.7-2.1-2.9-2.8-1.3-.8-2.6-1.4-3.9-2-1.4-.6-2.8-1.2-4.3-1.9-1.4-.6-2.7-1.4-4-2.2-1.2-.8-2.2-2-2.9-3.3-.8-1.5-1.1-3.1-1.1-4.8 0-2.8 1.3-5.5 3.5-7.3 2.3-2.1 5.7-3.1 10-3.1 3-.1 6 .6 8.8 1.8l-.5 1.1c-.2.7-.5 1.6-.9 2.7s-.6 1.9-.8 2.5c-2.1-.8-4.3-1.2-6.6-1.3-1.8-.1-3.5.3-5 1.2-.9.6-1.4 1.6-1.5 2.7v.4c.1 1 .9 2 2.3 2.9 1.6 1 3.4 1.8 5.1 2.6 2 .9 4 1.8 5.9 2.9 2 1.1 3.7 2.7 4.9 4.6 1.4 2.1 2.1 4.5 2 7 .1 3.3-1.2 6.5-3.5 8.8-2.4 2.3-6 3.5-10.8 3.5-4.4 0-7.8-1.2-10.3-3.5-2.2-2.1-3.6-4.9-3.7-8zM264.5 42.6l-2 5.3c-6.1-.1-9.1-3-9.1-8.7V5.1h6.7V17h5.7l-1.4 6.2h-4.3v16c-.1 1 .3 2.1 1.1 2.7 1 .6 2.1.8 3.3.7zM295.7 28.2v7.9c.1 3-.8 6-2.7 8.3-1.8 2.2-4.6 3.3-8.3 3.3-3.7 0-6.5-1.1-8.5-3.3-1.9-2.3-3-5.3-2.9-8.3v-7.9c0-3.8 1-6.7 2.9-8.7s4.7-3 8.4-3c3-.2 6 1 8.2 3.2 1.9 2 2.9 4.8 2.9 8.5zm-6.5 8.5v-8.5c0-1-.1-1.9-.4-2.8-.2-.7-.6-1.2-1.2-1.6-.4-.3-.9-.5-1.4-.6s-1-.1-1.5-.1c-3.1 0-4.7 1.7-4.7 5.1v8.5c0 3 1.6 4.6 4.7 4.6 1.2 0 2.4-.4 3.3-1.1.8-1 1.3-2.2 1.2-3.5zM309.8 47.1h-6.6v-30h6.1l.5.2c1.3-.4 2.6-.7 4-.7h1.2c.8 0 1.3 0 1.7.1.6.1 1.7.3 3.3.7l-1.6 6.4c-1-.5-2.1-.8-3.2-.8-.9 0-1.8.2-2.6.5-1.8.7-2.9 2.5-2.8 4.4v19.2zM330.3 11.6c-2 0-3.6-1.6-3.6-3.6 0-.9.4-1.8 1.1-2.4.7-.7 1.6-1 2.5-1 1.9.1 3.4 1.6 3.5 3.5 0 .9-.4 1.9-1 2.5-.7.6-1.5 1-2.5 1zm3.2 35.5h-6.6v-30h6.6v30zM363.8 35.7l-14.9.8v1.7c0 2 .9 3.2 2.8 3.5.3 0 .6.1.8.1 1.8 0 4.3-.8 7.4-2.4l2.4 5.7c-3 1.8-6.4 2.8-9.9 2.8h-.5c-2.5.1-5-.6-7-2-1.8-1.5-2.8-3.7-2.8-6.7V26.8c-.2-2.8.9-5.6 3-7.6 2.2-1.9 5.1-2.8 8-2.7 3.3 0 5.9.9 7.8 2.7 1.9 2 2.9 4.7 2.8 7.4l.1 9.1zm-6.6-5.8v-3.2c.1-1-.4-2.1-1.1-2.8-.8-.7-1.8-1-2.8-1-1.2-.1-2.4.3-3.3 1.2-.6.7-1 1.7-1 2.6v3.7l8.2-.5zM369.8 39.5l6.6-.7c.1.8.5 1.5 1.1 2 1 .7 2.2 1.1 3.4 1 1.1.1 2.2-.3 3.1-1 .7-.6 1.1-1.4 1.1-2.3 0-1.1-.5-2.2-1.4-2.8-1-.8-2.2-1.3-3.5-1.7s-2.7-.9-4.1-1.4c-1.4-.6-2.7-1.5-3.7-2.7-1.1-1.3-1.8-3-1.9-4.7 0-.2-.1-.5-.1-.7 0-2 .9-4 2.3-5.4 1.7-1.8 4.3-2.8 8-2.8 1.2 0 2.4.1 3.6.5.8.2 1.6.5 2.4.9l.7.4-1.9 6.1c-.9-.9-2.5-1.4-4.8-1.4-.9-.1-1.7.1-2.5.5-.5.3-.8.7-.7 1 .1.3.1.7.1 1 .1.6.7 1.2 1.8 1.7 1.2.6 2.4 1 3.6 1.5 1.4.5 2.8 1.1 4.1 1.8 1.4.8 2.6 1.9 3.5 3.2 1 1.5 1.5 3.3 1.4 5.2 0 2.5-1 4.9-2.8 6.6-1.9 1.8-4.6 2.7-8.3 2.7-3.4 0-6.1-.8-8-2.5-1.9-1.4-3-3.6-3.1-6z"></path>
              </g>
              <defs>
                <clipPath id="header-fills_outline-path__VA3k2">
                  <path d="M73.5 15c-.1-.1-.3-.1-.4-.1H22.9c-.2 0-.3 0-.4.1-.3.1-.5.4-.5.8v64.3c0 .5.4.9.9.9 0 0 22.3-14.7 25.1-14.7s25.1 14.6 25.1 14.6c.5 0 .9-.4.9-.9V15.8c0-.4-.2-.7-.5-.8z"></path>
                </clipPath>
              </defs>
              <g
                className="header-fills_dark-blue__2mwYY"
                clipPath="url(#header-fills_outline-path__VA3k2)"
              >
                <path d="M96 6.7c0-.3-.2-.5-.5-.5h-5.1L95.8.7c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-5.4 5.4v-5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.2c-2-1.7-4.2-3.1-6.7-4C77.7.1 74.8 0 66.2 0H29.8c-8.7 0-11.5.2-15.9 1.6-2.5.9-4.7 2.3-6.7 4V.4c.1-.3-.1-.5-.4-.5s-.5.2-.5.5v5.1L.8.1C.7-.1.3-.1.1.1 0 .2 0 .6.1.8l5.4 5.5h-5c-.3-.1-.5.1-.5.4s.2.5.5.5h5.2c-1.7 2-3.1 4.2-4 6.7C.2 18.2.1 21.1.1 29.7V47.8c-.1.1-.1.2 0 .3V66.2c0 8.7.2 11.5 1.6 15.9.9 2.5 2.3 4.7 4 6.7H.5c-.3 0-.5.2-.5.5s.2.5.5.5h5.1L.2 95.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l5.5-5.4v5.1c0 .3.2.5.5.5s.5-.2.5-.5v-5.2c2 1.7 4.2 3.1 6.7 4 4.3 1.5 7.2 1.6 15.8 1.6H48c.1.1.2.1.3 0H66.4c8.7 0 11.5-.2 15.9-1.6 2.5-.9 4.7-2.3 6.7-4v5.2c0 .3.2.5.5.5s.5-.2.5-.5v-5.1l5.4 5.4c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-5.4-5.5h5.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.2c1.7-2 3.1-4.2 4-6.7 1.4-4.3 1.6-7.2 1.6-15.8v-.2-18c.1-.1.1-.2 0-.3V30.1v-.2-.2c0-8.7-.1-11.5-1.6-15.9-.9-2.5-2.3-4.7-4-6.7h5.2c0 .1.2-.1.2-.4zM48.5 30.4c4.3.1 8.4 1.8 11.5 4.8L48.5 46.7V30.4zm-1 16.3L36 35.2c3.1-3 7.2-4.6 11.5-4.8v16.3zm-.7.7H30.5c.1-4.3 1.8-8.4 4.8-11.5l11.5 11.5zm0 1L35.3 59.9c-3-3.1-4.6-7.2-4.8-11.5h16.3zm.7.7v16.3c-4.3-.1-8.4-1.8-11.5-4.8l11.5-11.5zm1 0L60 60.6c-3.1 3-7.2 4.7-11.5 4.8V49.1zm.7-.7h16.3c-.1 4.3-1.8 8.4-4.8 11.5L49.2 48.4zm0-1l11.5-11.5c3 3.1 4.6 7.2 4.8 11.5H49.2zm11.5-12.9c-1.9-1.8-4.2-3.2-6.7-4.1h10.8l-4.1 4.1zm-25.4 0l-4.1-4.1H42c-2.5.9-4.8 2.3-6.7 4.1zm-.7.7c-1.8 1.9-3.2 4.2-4.1 6.8V31.1l4.1 4.1zm0 25.4l-4.1 4.1V53.9c.9 2.5 2.3 4.8 4.1 6.7zm.7.7c1.9 1.8 4.2 3.2 6.8 4.1H31.2l4.1-4.1zm25.4 0l4.1 4.1H54c2.5-.9 4.8-2.3 6.7-4.1zm.7-.7c1.8-1.9 3.2-4.2 4.1-6.7v10.8l-4.1-4.1zm0-25.4l4.1-4.1v10.8c-.9-2.5-2.3-4.8-4.1-6.7zm-12.9-5.8v-6.5c6 .1 11.8 2.4 16.2 6.5H48.5zm-1 0H31.3c4.5-4 10.2-6.3 16.2-6.5v6.5zm-18 18H23c.1-6 2.4-11.8 6.5-16.2v16.2zm0 1v16.2c-4-4.5-6.3-10.2-6.5-16.2h6.5zm18 18v6.5c-6-.1-11.8-2.4-16.2-6.5h16.2zm1 0h16.2c-4.4 4.1-10.2 6.4-16.2 6.5v-6.5zm18-18H73c-.1 6-2.4 11.8-6.4 16.2l-.1-16.2zm0-1V31.2c4.1 4.4 6.4 10.2 6.5 16.2h-6.5zm-1-18.7c-4.7-4.3-10.7-6.7-17-6.8V7.2c5.9.1 11.7 1.4 17 4v17.5zm1-17c3.6 1.9 7 4.3 9.9 7.1l-9.9 9.9v-17zM47.5 22c-6.3.1-12.3 2.5-17 6.8V11.2c5.3-2.6 11.1-3.9 17-4V22zm-18 6.7l-9.9-9.9c2.9-2.9 6.3-5.3 9.9-7.1v17zm-.7.7h-17c1.9-3.6 4.3-7 7.1-9.9l9.9 9.9zm0 1c-4.3 4.7-6.7 10.7-6.8 17H7.3c.1-5.9 1.4-11.7 4-17h17.5zm-6.8 18c.1 6.3 2.5 12.3 6.8 17H11.3c-2.5-5.3-3.9-11.1-4-17H22zm6.8 18l-9.9 9.9c-2.9-2.9-5.3-6.3-7.1-9.9h17zm.7.7v17c-3.6-1.9-7-4.3-9.9-7.1l9.9-9.9zm1 0c4.7 4.3 10.7 6.7 17 6.8v14.7c-5.9-.1-11.7-1.4-17-4V67.1zm18 6.8c6.3-.1 12.3-2.5 17-6.8v17.6c-5.3 2.6-11.1 3.9-17 4V73.9zm18-6.8l9.9 9.9c-2.9 2.9-6.3 5.3-9.9 7.1v-17zm.7-.7h17c-1.9 3.6-4.3 7-7.1 9.9l-9.9-9.9zm0-1c4.3-4.7 6.7-10.7 6.8-17h14.7c-.1 5.9-1.4 11.7-4 17H67.2zm6.8-18c-.1-6.3-2.5-12.3-6.8-17h17.6c2.6 5.3 3.9 11.1 4 17H74zm-6.7-18l9.9-9.9c2.9 2.9 5.3 6.3 7.1 9.9h-17zm9.9-11.3c-3.1-3-6.7-5.6-10.6-7.5V7.2H88L77.2 18.1zm-11.6-8c-2.8-1.3-5.6-2.2-8.5-2.9h8.4l.1 2.9zm-35 0V7.2H39c-2.9.6-5.8 1.6-8.4 2.9zm-1 .5c-3.9 1.9-7.5 4.5-10.6 7.5L8 7.2h21.5l.1 3.4zm-11.4 8.2c-3 3.1-5.6 6.7-7.5 10.6H7.3V7.9l10.9 10.9zm-8 11.6C8.9 33.1 8 36 7.3 38.9v-8.5h2.9zm-3.8 17H1v-17h5.3l.1 17zM1 63.1V48.4h5.3v17H1v-2.3zM7.3 57c.6 2.9 1.6 5.7 2.9 8.5H7.3V57zm3.3 9.4c1.9 3.9 4.5 7.5 7.5 10.6L7.3 87.9V66.4h3.3zm8.3 11.3c3.1 3 6.7 5.6 10.6 7.5v3.3H8l10.9-10.8zm11.6 8c2.7 1.3 5.6 2.2 8.5 2.9h-8.5v-2.9zm35 0v2.9h-8.4c2.9-.7 5.7-1.6 8.4-2.9zm1-.5c3.9-1.9 7.5-4.5 10.6-7.5L88 88.6H66.5v-3.4zM77.8 77c3-3.1 5.6-6.7 7.5-10.6h3.3v21.5L77.8 77zm8-11.6c1.3-2.7 2.2-5.5 2.9-8.5v8.5h-2.9zm3.8-17H95v17h-5.3l-.1-17zM95 32.7v14.7h-5.3v-17H95v2.3zm-6.3 6.2c-.6-2.9-1.6-5.7-2.9-8.5h2.9v8.5zm-3.3-9.5c-1.9-3.9-4.5-7.5-7.5-10.6L88.7 7.9v21.5h-3.3zm2.5-23.2H66.5V.9c8.3 0 11.1.2 15.2 1.5 2.3.9 4.4 2.2 6.2 3.8zM65.5.9v5.3h-17V.9h17zm-18 0v5.3h-17V.9h17zM14.3 2.5C18.4 1.1 21.2.9 29.5.9v5.3H8.1c1.8-1.6 3.9-2.9 6.2-3.7zM2.6 14.2c.8-2.3 2.1-4.4 3.7-6.2v21.4H1c0-8.3.2-11.1 1.6-15.2zM1 66.4h5.3v21.4c-1.6-1.8-2.9-3.9-3.7-6.2C1.2 77.5 1 74.7 1 66.4zm7 23.2h21.5v5.3c-8.3 0-11.1-.2-15.2-1.5-2.3-.9-4.4-2.2-6.3-3.8zm22.5 5.3v-5.3h17v5.3h-17zm18 0v-5.3h17v5.3h-17zm33.2-1.5c-4.1 1.4-6.9 1.5-15.2 1.5v-5.3h21.4c-1.8 1.6-3.9 2.9-6.2 3.8zm11.7-11.8c-.8 2.3-2.1 4.4-3.7 6.2V66.4H95c0 8.3-.2 11.1-1.6 15.2zM95 29.4h-5.3V8c1.6 1.8 2.9 3.9 3.7 6.2 1.4 4.1 1.6 6.9 1.6 15.2z"></path>
              </g>
            </svg>
            <div className="mt-5 text-base text-gray-500">
              30% discount on your purchase of Dropzone 4 Pro Lifetime
            </div>
          </div>
        )}

        <div className="items-top mx-auto flex w-9/12 flex-row flex-wrap justify-center gap-y-5">
          <div className="grid text-center">
            <a href="https://aptonic.com/dropzone/latest">
              <button
                type="button"
                className="mr-2 inline-flex rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-8 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-bl"
              >
                <svg
                  className="mr-2 h-5 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download Dropzone 4
              </button>
            </a>
            <div className="pt-1 text-gray-500">
              <AppVersion />
            </div>
          </div>

          <div className="grid text-center">
            <BuyButton hasDiscount={isAppStories} />
            <ProFeatures />
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-9/12 justify-center text-neutral-600">
          <ul className="max-w-xl list-disc px-4 py-2 text-left sm:w-4/5">
            <li className="py-2">Runs on macOS 10.15 and later</li>
            <li className="py-2">
              Free to use and includes a 14 day Dropzone 4 Pro trial
            </li>
            <li className="py-2">
              Unlock all Dropzone 4 Pro features by{" "}
              <BuyLink product_id={613556} coupon={isAppStories ? "APPSTORIES" : ""}>
                purchasing Dropzone 4 Pro Lifetime
              </BuyLink>{" "}
              for {isAppStories ? (
            <>
              <span style={{ textDecoration: 'line-through', color: 'red' }}>$35</span>
              <span> $25</span>
            </>
          ) : (
            <span>$35</span>
          )} or{" "}
              <BuyLink product_id={620999} coupon={isAppStories ? "APPSTORIES" : ""}>
                start a Dropzone 4 Pro subscription
              </BuyLink>{" "}
              for only $1.99/month
            </li>
            <li className="py-2">
              Up to 30% discount if upgrading from Dropzone 3. <br />
              <a className="text-blue-400 underline" href="/upgrade">
                Redeem your discount here
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-3 mt-10 text-center text-sm text-gray-500">
          <Balancer>
            <p>Or grab Dropzone 4 on Setapp or the Mac App Store</p>
          </Balancer>
        </div>

        <div className="mx-auto flex w-9/12 flex-row flex-wrap justify-center gap-y-5 text-center">
          <a href="https://go.setapp.com/stp88?refAppID=155&stc=Aptonic%20Website&utm_medium=available_on_setapp_button&utm_source=155&utm_campaign=https://aptonic.com">
            <Image
              className="sm:mr-2 md:mr-2"
              src="/download-setapp.png"
              alt="Download on Setapp"
              width="220"
              height="56"
            />
          </a>

          <a href="https://apps.apple.com/in/app/dropzone-4/id1485052491?mt=12">
            <Image
              src="/download-mas.png"
              alt="Download on the Mac App Store"
              width="220"
              height="56"
            />
          </a>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto w-9/12 max-w-screen-xl text-center">
          <h1 className="mb-10 font-roboto text-3xl">
            Dropzone makes it faster and easier to:
          </h1>
        </div>

        <div className="mx-auto flex w-9/12 max-w-screen-xl flex-wrap whitespace-nowrap px-2 text-sm text-gray-500 md:w-full">
          <div className="w-full px-10 text-center md:w-1/3 md:py-5">
            <ul>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/move-files.png"
                  alt="Move Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Move Files</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/copy-files.png"
                  alt="Copy Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Copy Files</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/install.png"
                  alt="Install Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3 sm:block md:hidden lg:block">
                  Install Applications
                </span>
                <span className="hidden pl-3 sm:hidden md:block lg:hidden">
                  Install Apps
                </span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/applications.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3 sm:block md:hidden lg:block">
                  Launch Applications
                </span>
                <span className="hidden pl-3 sm:hidden md:block lg:hidden">
                  Launch Apps
                </span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/airdrop.png"
                  alt="AirDrop"
                  width={50}
                  height={50}
                />
                <span className="pl-3">AirDrop</span>
              </li>
            </ul>
          </div>

          <div className="w-full px-10 text-center md:w-1/3 md:py-5">
            <ul>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/imgur.png"
                  alt="Move Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Imgur</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/gdrive.png"
                  alt="Copy Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Google Drive</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/amazons3.png"
                  alt="Install Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Amazon S3</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/sftp.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">SFTP Server</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/ftp.png"
                  alt="AirDrop"
                  width={50}
                  height={50}
                />
                <span className="pl-3">FTP Server</span>
              </li>
            </ul>
          </div>

          <div className="w-full px-10 text-center md:w-1/3 md:py-5">
            <ul>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/moveandrename.png"
                  alt="Move Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Rename &amp; Move Files</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/shorten.png"
                  alt="Copy Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Shorten URLs</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/resize-images.png"
                  alt="Install Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Resize Images</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/tinify.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Compress Images</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/downloader.png"
                  alt="AirDrop"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Download YouTube Videos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="m-5 mb-3 mt-10 text-center text-lg text-gray-500">
          <p>
            Boost your productivity and complete everyday tasks faster with
            Dropzone.
          </p>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-12 font-roboto text-3xl">How to use Dropzone</h1>
        </div>

        <div className="mx-auto w-10/12 max-w-screen-xl text-center">
          <h1 className="mb-3 font-roboto">
            1. Drag a file to the top of your screen
          </h1>

          <Image
            src="/how-to-use1.webp"
            alt="Drag a file to the top of your screen"
            width={589}
            className="mx-auto"
            height={140}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            2. A grid of your actions opens. Drop the file on the action you
            want
          </h1>

          <Image
            src="/how-to-use2.webp"
            alt="A grid of your actions opens. Drop the file on the action you want"
            width={589}
            className="mx-auto"
            height={457}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            3. The action is performed on your file
          </h1>

          <Image
            src="/how-to-use3.webp"
            alt="The action is performed on your file"
            width={589}
            className="mx-auto"
            height={140}
          />
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto w-10/12 max-w-screen-xl text-center">
          <h1 className="mb-10 font-roboto text-3xl">Keyboard shortcuts</h1>

          <h1 className="mb-3 font-roboto">1. Press F3</h1>

          <Image
            src="/f3.png"
            alt="Press F3"
            className="mx-auto"
            width={141}
            height={101}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            2. Dropzone opens and shows the shortcut key overlaid on each icon
          </h1>

          <Image
            src="/keyboard-overlays.webp"
            alt="Dropzone opens and shows the shortcut key overlaid on each icon"
            width={615}
            className="mx-auto"
            height={555}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            3. Hit the shortcut key for the action you want to run
          </h1>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto w-9/12 max-w-screen-xl text-center">
          <h1 className="mb-8 font-roboto text-3xl">
            What people are saying about Dropzone
          </h1>
        </div>

        <DzReviewCard
          name={"Wairami from United States"}
          src={"Mac App Store Review"}
        >
          {`I literally use this every hour I'm at my laptop... Which is roughly
          14 hours a day. This app is game-changing for me. I know it has uses
          other than "store it here to paste where you want later", but that's
          mainly what I use it for, and man... it does it's job superbly. I
          can't recommend this app enough for MacBook users.`}
        </DzReviewCard>

        <DzReviewCard
          name={"Ronny411 from United Kingdom"}
          src={"Mac App Store Review"}
        >
          {`Such a handy little app, if you like a clean and organised working
          environment. I study and work full time; this lets me organise things
          rapidly and without any fuss. Couldn't recommend it more.`}
        </DzReviewCard>

        <DzReviewCard
          name={"DrumGuy68 from United States"}
          src={"Mac App Store Review"}
        >
          {`This app is great for streamlining tasks that you would do on your Mac
          everyday. It also helps keeps the desktop clutter down as you can drag
          an drop whatever you're working with and place it in with out having
          to open up a bunch of folders to get to it. (Pre-setup is required)
          Once you have it setup, it's a snap.`}
        </DzReviewCard>

        <DzReviewCard
          name={"donkey2thekong from United States"}
          src={"Mac App Store Review"}
        >
          {`This App has changed the way I do everything!! It is hands down the
          best app on the market and is the now the app against which I rate all
          others. Dropzone is a 6 for sure!!`}
        </DzReviewCard>

        <DzReviewCard
          name={"barryforque from United States"}
          src={"Mac App Store Review"}
        >
          {`Great, handsome and easy to use. I love the different Dropzone
          functions like automatic copying to folders and automatic moving to
          others. I use it to do no-fuss backups of work files using my Dropbox
          account. Way simpler than Finder or keeping shortcuts on the desktop.`}
        </DzReviewCard>

        <DzReviewCard
          name={"german1608 from Panama"}
          src={"Mac App Store Review"}
        >
          {`This is one of the apps that once you use it you can't live without
          it. It saves a bunch of steps when moving files around. Highly
          recommended.`}
        </DzReviewCard>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto w-9/12 max-w-screen-xl text-center">
          <h1 className="mb-10 font-roboto text-3xl">There&apos;s more...</h1>
        </div>

        <div className="mx-auto w-9/12  max-w-screen-xl text-center">
          <Image
            src="/devicon.png"
            alt="Dropzone Action Development Icon"
            className="mx-auto"
            width={136}
            height={133}
          />

          <div className="mx-auto mb-3 mt-10 text-center text-base text-gray-500">
            <p>
              Easily extend Dropzone by installing more actions in just a few
              clicks.
            </p>

            <br />

            <p>Develop your own Dropzone actions in Ruby or Python.</p>
            <p>
              You can also modify existing actions and share your actions with
              others.
            </p>

            <br />

            <p>We can&apos;t wait to see what you make.</p>
          </div>

          <div className="mx-auto mt-12 flex max-w-md justify-center text-center text-base font-bold text-blue-500">
            <a href="/actions">
              <div className="mx-auto mr-10 flex items-center">
                <svg
                  className="mr-2 flex w-7 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z" />
                </svg>
                <span className="flex">Install Actions</span>
              </div>
            </a>

            <a href="https://github.com/aptonic/dropzone4-actions/blob/master/README.md#introducing-the-dropzone-4-api">
              <div className="mx-auto flex items-center">
                <svg
                  className="mr-2 flex w-5 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
                </svg>
                <span className="flex">Developer Documentation</span>
              </div>
            </a>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}
