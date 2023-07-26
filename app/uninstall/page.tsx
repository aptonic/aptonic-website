import Image from "next/image";

export const metadata = {
  title: "Aptonic - Uninstall Dropzone 4",
};

export default function Page() {
  return (
    
    <div className="z-10 mt-28 px-5 sm:w-full lg:max-w-4xl">
      <h2 className="mb-10 text-xl font-medium text-gray-700">
        How to Uninstall Dropzone 4
      </h2>

      <div className="text-gray-700">
        <p>
          Close Dropzone 4 by clicking on the icon in the menu bar, clicking the
          white Settings gear in the top right and choosing 'Quit' from the
          menu.
        </p>

        <Image
          alt="Uninstall Step 1"
          src="/uninstall1.png"
          width={600}
          height={510}
          className="mt-5"
        />
        <br />
        <br />

        <p>
          Now go into your Applications folder in Finder and drag the Dropzone 4
          application to the bin. Then empty the bin.
        </p>

        <Image
          alt="Uninstall Step 2"
          src="/uninstall2.png"
          width={600}
          height={510}
          className="mt-5"
        />
        <br />

        <p className="pb-5">That's it, Dropzone is gone from your Mac.</p>

        <p>
          We are also happy to provide a full refund if you purchased Dropzone
          within the last 30 days (although please note we are unable to refund Mac App Store
          purchases)
          <br /><br />
          If you have issues or feedback about Dropzone, please feel free to{" "}
          <a className="underline" href="mailto:support@aptonic.com">email us.</a>
          <br />
        </p>
        <br />

        <br />
        <br />
      </div>
    </div>
  );
}
