"use client";

import React, { useState } from "react";

export default function Intro() {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/mfDNyq3GSmk?autoplay=1&autohide=1&hd=1&vq=hd720",
  );

  function gotoTime(time) {
    setVideoUrl(
      `https://www.youtube.com/embed/gReRHjppIE4?autoplay=1&autohide=1&hd=1&vq=hd720&start=${time}`,
    );
  }

  return (
    <>
      <div className="z-10 mt-28 px-5">
        <div className="flex flex-row">
          <div id="guide">
            <h2 className="text-xl mb-5">Dropzone 4 Introduction</h2>
            <div
              className="flex sm:w-[600px] md:w-[875px]"
              id="video"
              dangerouslySetInnerHTML={{
                __html: `<iframe style="flex-grow: 1; height: 540px;" src='${videoUrl}' frameborder='0' allowfullscreen=''></iframe>`,
              }}
            />

          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
