"use client";

import ActionDescription from "../shared/action-description";
import Image from "next/image";

import React, { useEffect, useState } from "react";

interface Item {
  icon: string;
  name: string;
  description: string;
}

type ActionsVariant = "main" | "untested" | "mas";

export default function Actions({
  variant,
  title,
}: {
  variant: ActionsVariant;
  title: string;
}) {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    let url = "";

    if (variant === "main") {
      url = "https://actions.aptonic.com/actions/actions.json";
    } else if (variant === "untested") {
      url = "https://actions.aptonic.com/actions/untested_actions.json";
    } else if (variant === "mas") {
      url = "https://actions.aptonic.com/actions/mas_actions.json";
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mx-10 mt-28 flex flex-col lg:max-w-4xl">
        {variant !== "untested" && (
          <div className="flex flex-row items-start md:items-center">
            <Image
              src="/devicon.png"
              alt="Dropzone Action Development Icon"
              className="mr-5"
              width={90}
              height={90}
            />
            <div>
              <h2 className="text-2xl text-gray-700">{title}</h2>
              <p className="text-base text-gray-500">
                Below are add-ons for Dropzone 4 Pro. Click the Install button
                to add them to your grid.
              </p>
            </div>
          </div>
        )}

        {variant === "untested" && (
          <div>
            <div className="flex flex-row items-start md:items-center">
              <div>
                <h2 className="text-2xl text-gray-700">Untested Actions</h2>
              </div>
            </div>

            <div className="-mb-2 mt-5 flex flex-row items-center">
              <div className="p-5">
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="60px"
                  viewBox="0 0 576 512"
                  className="fill-red-500"
                >
                  <path
                    d="M569.5,440c18.5,32-4.7,72-41.6,72H48.1c-36.9,0-60-40.1-41.6-72L246.4,24c18.5-32,64.7-32,83.2,0L569.5,440
	L569.5,440z M288,354c-25.4,0-46,20.6-46,46s20.6,46,46,46s46-20.6,46-46S313.4,354,288,354z M244.3,188.7l7.4,136
	c0.3,6.4,5.6,11.3,12,11.3h48.5c6.4,0,11.6-5,12-11.3l7.4-136c0.4-6.9-5.1-12.7-12-18.7h-63.4C249.4,176,244,181.8,244.3,188.7
	L244.3,188.7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-base text-gray-500">
                  <span className="font-bold">
                    We have not tested the actions below. They may not work
                    properly and have bugs.
                  </span>
                  <br />
                  Please file bug reports for these actions on GitHub{" "}
                  <a
                    className="text-blue-400 underline"
                    href="https://github.com/aptonic/dropzone4-actions/issues"
                  >
                    here.
                  </a>
                  <br />
                  Actions we have reviewed and tested are available{" "}
                  <a className="text-blue-400 underline" href="/actions">
                    here.
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full">
          <hr className="my-5 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        {data.map((item, index) => (
          <div key={index}>
            <div className="mb-5 flex flex-row items-center">
              <img src={item.icon} alt={item.name} className="mr-8 w-[75px]" />
              <div>
                <h2 className="text-xl text-violet-900">{item.name}</h2>
                <ActionDescription item={item} />
                <a
                  href={`/actions/${item.name}`}
                  className="min-w-40 min-h-16 relative float-left mt-2 rounded border-b-2 border-purple-800 bg-purple-600 px-1.5 py-0 pb-0 pr-2 pt-1 font-roboto text-sm leading-6 text-white"
                >
                  <svg
                    className="mr-1 inline-block pb-1"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      d="M12,18 L12,8 L12,18 Z M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M17,12 L12,7 L7,12"
                      transform="matrix(1 0 0 -1 0 24)"
                    />
                  </svg>
                  Install
                </a>
              </div>
            </div>

            {index < data.length - 1 && (
              <div className="w-full">
                <hr className="my-5 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
              </div>
            )}
          </div>
        ))}
        <br />
        <br />
      </div>
    </>
  );
}
