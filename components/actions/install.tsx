"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function InstallAction({
  params,
}: {
  params: { action: string };
}) {
  const searchParams = useSearchParams();
  const mas = searchParams && searchParams.get("mas");

  useEffect(() => {
    !mas && window.location.assign("dropzone://" + params.action);
  }, []);

  if (mas === "1") {
    return (
      <div className="mb-5 mt-16 items-center p-10 text-gray-700 md:mt-20 md:flex md:flex-row">
        <Image
          alt="Dropzone 4 Icon"
          src="/app_icon.webp"
          width={256}
          height={256}
          priority={true}
          className="mr-5 inline-block w-36 md:mt-20 md:w-72"
        />
        <div>
          <h2 className="mb-5 mt-10 text-xl text-violet-900 md:mt-20">
            Download {decodeURIComponent(params.action)} Action
          </h2>
          <p className="text-base font-medium">
            Download the action bundle by clicking the Download button below.
          </p>

          <p className="mb-5 mt-2 text-sm">
            After download, open your downloads folder and double click the{" "}
            <span className="font-medium">
              {decodeURIComponent(params.action)}.dzbundle
            </span>{" "}
            file to install it.
          </p>

          <a
            href="/actions/mas"
            className="text-shadow mr-3 mt-5 inline-block cursor-pointer select-none rounded-lg border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gradient-to-b hover:from-gray-100 hover:to-white active:relative active:translate-y-1"
          >
            <div className="inline-flex">
              <svg
                className="h-4 w-0 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              ></svg>
              Back to Actions List
            </div>
          </a>

          <a
            href={`https://github.com/aptonic/dropzone4-actions-zipped/raw/master/${params.action}.dzbundle`}
            className="text-shadow mt-5 inline-block cursor-pointer select-none rounded-lg border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gradient-to-b hover:from-gray-100 hover:to-white active:relative active:translate-y-1"
          >
            <div className="inline-flex">
              <svg
                className="mr-2 h-4 w-4 translate-y-[2px] fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5 mt-16 items-center p-10 text-gray-700 md:mt-20 md:flex md:flex-row">
      <Image
        alt="Dropzone 4 Icon"
        src="/app_icon.webp"
        width={256}
        height={256}
        priority={true}
        className="mr-5 inline-block w-36 md:mt-20 md:w-72"
      />
      <div>
        <h2 className="mb-5 mt-10 text-xl text-violet-900 md:mt-20">
          Installing {decodeURIComponent(params.action)} Action...
        </h2>
        <p className="text-base font-medium">
          The action should now download and install automatically.
        </p>

        <p className="pt-5 text-sm">
          If nothing happens, please ensure Dropzone 4 is installed and running.
        </p>
        <p className="pt-1 text-sm">
          You can download Dropzone 4{" "}
          <a
            className="underline"
            href="https://updates.aptonic.com/dropzone4-latest"
          >
            here
          </a>
        </p>

        <p className="pt-5 text-sm">
          You can download the action bundle manually{" "}
          <a
            className="underline"
            href={`https://github.com/aptonic/dropzone4-actions-zipped/raw/master/${params.action}.dzbundle`}
          >
            here
          </a>
        </p>

        <a
          href="/actions"
          className="text-shadow mt-5 inline-block cursor-pointer select-none rounded-lg border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gradient-to-b hover:from-gray-100 hover:to-white active:relative active:translate-y-1"
        >
          Back to Actions List
        </a>
      </div>
    </div>
  );
}
