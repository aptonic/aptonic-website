"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [snValue, setSnValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => setSnValue(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "https://licensing.aptonic.com/get_license_file",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sn: snValue }),
        },
      );

      const response = await res.text();

      if (response === "") {
        setError("The entered serial is invalid.");
        setSnValue("");
      } else {
        setError("");
        // If the response is not empty, submit the form in the traditional way
        const form = document.getElementById("licenseForm") as HTMLFormElement;
        form.submit();
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="z-10 mt-28 sm:w-full lg:max-w-4xl px-5">
        <h2 className="mb-5 text-xl">
          How to Register Dropzone 4 Pro Lifetime
        </h2>
        <Image
          src="/registration-step1.png"
          alt="Registration Step 1"
          width={694}
          height={462}
          quality={100}
        />
        <br />
        <Image
          src="/registration-step2.png"
          alt="Registration Step 2"
          width={694}
          height={462}
          quality={100}
        />
        <br />
        <Image
          src="/registration-step3.png"
          alt="Registration Step 3"
          width={694}
          height={462}
          quality={100}
        />

        <br />
        <Image
          src="/registration-step4.png"
          alt="Registration Step 4"
          width={694}
          height={462}
          quality={100}
        />

        <h2 className="mb-5 mt-10 text-xl">
          Fixing a Registration Details Invalid message
        </h2>

        <p className="text-gray-500">
          In some cases, you may receive a Registration Details Invalid error
          box. There are a number of things you can try to fix this:
        </p>
        <br />
        <ul className="list-inside list-disc leading-loose text-gray-500 marker:text-gray-500 mb-6">
          <li>
            First make certain the serial you pasted into the Serial # field is
            the same as what we sent you. A Dropzone serial is in the format
            XXXX-XXXX-XXXX-XXXX-XXXX - It is not case sensitive. It's best to
            copy the serial from the email you got by selecting it in the email,
            pressing Cmd-C (copy), then switching back to Dropzone and then
            pressing Cmd-V (paste) once the cursor is flashing in the Serial #
            field.
          </li>
          <li>
            Another common reason the registration can fail is if you
            accidentally paste the serial number in twice.
          </li>
          <li>
            Dropzone contacts our server to check your license so you must be
            connected to the internet for registration to work.
          </li>
          <li>
            Are you running any firewall software such as LittleSnitch that
            could be blocking the connection to our server? If so disable it and
            try registering again.
          </li>
          <li>
            Sometimes rebooting your Mac and trying to register again can
            resolve this.
          </li>
          <li>
            If you're still stuck, there's an alternative method you can use to
            register. Put your serial number in the box below and click the
            Download License File button.
          </li>
        </ul>

        {error && <div className="text-red-500">{error}</div>}
        <div className="mt-5">
          <form
            id="licenseForm"
            action="https://licensing.aptonic.com/get_license_file"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              className="w-80 mr-3 mb-3"
              type="text"
              name="sn"
              onChange={handleChange}
              value={snValue}
              required
            />
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="submit"
            >
              Download License File
            </button>
          </form>
          <br />
          <p className="text-gray-500">
            A file named dropzone4-license.txt will be downloaded. After
            downloading this file, close Dropzone and relaunch it. Dropzone
            looks for the dropzone4-license.txt file first in your Downloads
            folder and then on your Desktop - Make sure the
            dropzone4-license.txt file is placed in one of these folders.
            Dropzone should find the license file and complete the registration
            upon relaunch.
          </p>
        </div>

        <br />
        <br />
      </div>
    </>
  );
}
