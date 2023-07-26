"use client";

import React, { useState } from "react";

export default function Intro() {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/gReRHjppIE4?autoplay=1&autohide=1&hd=1&vq=hd720",
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
            <h2 className="text-xl mb-5">Learn how to use Dropzone</h2>
            <div
              className="flex sm:w-[620px] md:w-[675px]"
              id="video"
              dangerouslySetInnerHTML={{
                __html: `<iframe style="flex-grow: 1; height: 540px;" src='${videoUrl}' frameborder='0' allowfullscreen=''></iframe>`,
              }}
            />

            <div className="mt-5">
              <ul className="list-disc list-inside text-blue-500 leading-loose marker:text-gray-500">
                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(9)}>
                    Using the Dropzone grid
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(70)}>
                    Dragging files onto an action
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(91)}>
                    Running an action using the keyboard
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(116)}>
                    Changing the key assigned to an action
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(138)}>
                    Uploading images to Imgur
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(200)}>
                    Accessing Recently Shared URLs
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(222)}>
                    Using Drop Bar
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(368)}>
                    Using the Say Text action
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(393)}>
                    Sending files to Dropzone using a keyboard shortcut
                  </a>
                </li>

                <li>
                  <a className="cursor-pointer" onClick={() => gotoTime(423)}>
                    Support options
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
