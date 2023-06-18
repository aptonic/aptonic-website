"use client";

import Script from "next/script";
import "../../helpers/paddle.d";

export default function Paddle() {
  return (
    <Script
      key="init-paddle"
      src="https://cdn.paddle.com/paddle/paddle.js"
      onLoad={() => {
        window.Paddle.Setup({
          vendor: 118414,
          eventCallback: function (data) {},
        });
      }}
    />
  );
}
