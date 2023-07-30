export const metadata = {
  title: "Aptonic - Dropzone 4 Sandboxing",
};

export default function Page() {
  return (
    <div className="z-10 mt-28 px-5 sm:w-full lg:max-w-4xl">
      <h2 className="mb-10 text-xl font-medium text-gray-700">
        Dropzone 4 Sandboxing
      </h2>

      <div className="mx-auto font-sans text-gray-600">
        <p className="my-4">
          There are two slightly different versions of Dropzone 4 available. One
          is the version available on the Mac App Store which runs sandboxed and
          the other is the non-Mac App Store version available for download
          direct from our site which runs unsandboxed.
        </p>
        <p className="my-4">
          The sandboxed version available on the Mac App Store cannot write to
          arbitrary directories or run AppleScript. Therefore actions that do
          either of these things will not work under the sandboxed version.
        </p>
        <p className="my-4">
          If you'd like to run actions that are incompatible with sandboxing,
          simply download the non-Mac App Store version of Dropzone 4 from the
          link below.
        </p>

        <a className="underline" href="https://updates.aptonic.com/dropzone4-latest">
          <div className="mx-auto w-56 text-center">
            <img
              className="mx-auto mt-8 h-24 w-24"
              src="/actions/zip.png"
              alt="Download icon"
            />
            <div className="my-2 text-base">
              Download non-Mac App Store Version of Dropzone 4
            </div>
          </div>
        </a>
      </div>
      <br />
    </div>
  );
}
