"use client";

import Image from "next/image";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import 'node_modules/react-modal-video/scss/modal-video.scss';

export default function VideoDemo() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="mfDNyq3GSmk"
          onClose={() => setOpen(false)}
        />,
        document.body,
      )}

      <a
        className="cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image
          alt="Watch Demo"
          src="/watch-demo.png"
          width="134"
          height="40"
          priority={true}
          className="inline-block"
        />
      </a>
    </>
  );
}
