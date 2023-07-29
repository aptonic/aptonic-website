import Image from "next/image";

export const metadata = {
  title: "Aptonic - Dropzone 3",
};

export default function Page() {
  return (
    <div className="z-10 mt-28 px-5 sm:w-full lg:max-w-4xl">
      <h2 className="mb-10 text-xl font-medium text-gray-700">Dropzone 3</h2>

      <p className="text-gray-600">
        All development focus has now shifted to Dropzone 4.
        <br />
        We recommend against using Dropzone 3.
        <br /><br />
        However, we provide the download for the last released version of Dropzone 3 below.
      </p>

      <div className="mt-10 w-40 text-gray-600">
        <a href="https://updates.aptonic.com/dz3/Dropzone-3.8.1.zip">
          <div className="text-center text-xs">
            <Image
              width={120}
              height={120}
              src="/actions/zip.png"
              alt="Download"
              className="my-2 mx-auto"
            />
            <div className="text-center text-sm underline">Download Dropzone 3</div>
          </div>
        </a>
      </div>

      <br />
    </div>
  );
}
