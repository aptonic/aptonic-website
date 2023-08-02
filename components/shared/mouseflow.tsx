"use client";

import Script from "next/script";

export default function Mouseflow() {
  return (
    <Script id="mouseflow">
      {`
        window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/b50d881d-5adc-42d8-a210-5228fd502263.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })();
    `}
    </Script>
  );
}
