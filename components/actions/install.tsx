"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function InstallAction({ params }: { params: { action: string } }) {
  useEffect(() => {
    window.location.assign("dropzone://" + params.action);
  }, []);

  return (
    <div className="mt-16 md:mt-20 mb-5 md:flex md:flex-row p-10 items-center text-gray-700">
      <Image
        alt="Dropzone 4 Icon"
        src="/app_icon.png"
        width={256}
        height={256}
        priority={true}
        className="w-36 md:w-72 md:mt-20 mr-5 inline-block"
      />
      <div>
        <h2 className="text-xl text-violet-900 mt-10 md:mt-20 mb-5">
          Installing {decodeURIComponent(params.action)} Action...
        </h2>
        <p className="text-base font-medium">
          The action should now download and install automatically.
        </p>

        <p className="pt-5 text-sm">If nothing happens, please ensure Dropzone 4 is installed and running.</p>
        <p className="text-sm pt-1">You can download Dropzone 4 <a className="underline" href="https://updates.aptonic.com/dropzone4-latest">here</a></p>

        <p className="pt-5 text-sm">You can download the action bundle manually <a className="underline" href={`https://github.com/aptonic/dropzone4-actions-zipped/raw/master/${params.action}.dzbundle`}>here</a></p>

        <a href="/actions" className="text-shadow mt-5 select-none inline-block cursor-pointer rounded-lg border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gradient-to-b hover:from-gray-100 hover:to-white active:relative active:translate-y-1">
          Back to Actions List
        </a>
      </div>
    </div>
  );
}
