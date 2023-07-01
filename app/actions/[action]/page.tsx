"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Install({ params }: { params: { action: string } }) {
  useEffect(() => {
    window.location.assign("dropzone://" + params.action);
  }, []);

  return (
    <div className="mt-28 mb-5 flex flex-row items-center">
      <Image
        alt="Dropzone 4 Icon"
        src="/app_icon.png"
        width={128}
        height={128}
        className="mt-20 mr-5 inline-block"
      />
      <div>
        <h2 className="text-xl text-violet-900 mt-20 mb-5">
          Installing {decodeURIComponent(params.action)}
        </h2>
        <p className="text-sm text-gray-700">
          The action should now download and install automatically.
        </p>

        <a href="/actions" className="text-shadow mt-5 select-none inline-block cursor-pointer rounded-lg border border-gray-300 bg-gradient-to-b from-white to-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gradient-to-b hover:from-gray-100 hover:to-white active:relative active:translate-y-1">
          Go Back
        </a>
      </div>
    </div>
  );
}
