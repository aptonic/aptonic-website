"use client";

import { useState } from "react";

export default function Page() {
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => setEmailValue(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "https://licensing.aptonic.com/dz3_send_lost_license",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailValue }),
        },
      );

      const response = await res.json();

      if (response.status !== "success") {
        setError(response.message);
        setEmailValue("");
        setSuccess(false);
      } else {
        setError("");
        setSuccess(true);
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
      <div className="z-10 mt-28 px-5 sm:w-full md:w-1/3">
        <h2 className="mb-5 text-xl">Dropzone 3 Lost Serial</h2>

        <div className="mt-10 text-gray-700">
          <p>
            Put your email address in the field below and we will send you an
            email with your Dropzone 3 serial number.
          </p>

          {success && <div className="text-green-700 mt-8 w-80">We've emailed you your serial number. Check your email.</div>}
          {error && <div className="text-red-500 mt-8 w-80">{error}</div>}
          <div className="mt-5">
            <form id="lostLicenseForm" method="POST" onSubmit={handleSubmit}>
              <input
                className="mb-3 mr-3 w-80"
                type="text"
                name="email"
                onChange={handleChange}
                value={emailValue}
                required
              />
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                type="submit"
              >
                Send Serial
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
