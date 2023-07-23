"use client";

import ActionDescription from "@/components/shared/action-description";
import Image from "next/image";

import React, { useEffect, useState } from "react";

interface Item {
  icon: string;
  name: string;
  description: string;
}

export default function ActionsMasPage() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetch("https://actions.aptonic.com/actions/mas_actions.json")
      .then((response) => response.json())
      .then((data) => setData(data));
      window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-28 mx-10 flex flex-col lg:max-w-4xl">
        <div className="flex flex-row items-start md:items-center">
          <Image
            src="/devicon.png"
            alt="Dropzone Action Development Icon"
            className="mr-5"
            width={90}
            height={90}
          />
          <div>
            <h2 className="text-2xl">Install Dropzone 4 Pro Cloud Actions</h2>
            <p className="text-base text-gray-500">
              Below are add-ons for Dropzone 4 Pro. Click the Install button to
              add them to your grid.
            </p>
          </div>
        </div>

        <div className="w-full">
          <hr className="my-5 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        {data.map((item, index) => (
          <div key={index} >
            <div className="mb-5 flex flex-row items-center">
              <img src={item.icon} alt={item.name} className="mr-8 w-[75px]" />
              <div>
                <h2 className="text-xl text-violet-900">{item.name}</h2>
                <p className="text-sm text-gray-700">
                  <ActionDescription item={item} />
                </p>
                <a href={`/actions/${item.name}`} className="min-w-40 min-h-16 relative float-left font-roboto mt-2 rounded border-b-2 border-purple-800 bg-purple-600 px-1.5 py-0 pb-0 pr-2 pt-1 text-sm leading-6 text-white">
                  <svg
                    className="pb-1 mr-1 inline-block"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      d="M12,18 L12,8 L12,18 Z M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M17,12 L12,7 L7,12"
                      transform="matrix(1 0 0 -1 0 24)"
                    />
                  </svg>
                  Install
                </a>
              </div>
            </div>

            <div className="w-full">
              <hr className="my-5 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
