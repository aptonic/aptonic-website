import Image from "next/image";
import appIcon from "/public/app_icon.png";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function Home() {
  return (
    <>
      <div className="mt-20 px-5">
        <div className="flex flex-col text-center md:flex-row">
          <div
            className="inline-block animate-fade-up opacity-0"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Image
              alt="Dropzone 4 Icon"
              src={appIcon}
              className="inline-block w-44 md:w-64"
            />
          </div>

          <div className="pt-5 md:pt-14">
            <div>
              <h1
                className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                style={{
                  animationDelay: "0.25s",
                  animationFillMode: "forwards",
                }}
              >
                Dropzone{" "}
                <div className="inline-block rounded-md bg-indigo-500 p-1 py-0 font-light font-thin leading-none text-white md:rounded-lg md:p-3 md:py-0">
                  4
                </div>
              </h1>
            </div>
            <div
              className="mt-6 animate-fade-up text-center font-light text-gray-500 opacity-0 md:text-xl"
              style={{
                animationDelay: "0.35s",
                animationFillMode: "forwards",
              }}
            >
              Enhance productivity on your Mac
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-6 w-[20rem]  animate-fade-up text-center font-light text-gray-500 opacity-0 md:w-[45rem] md:text-xl"
        style={{
          animationDelay: "0.45s",
          animationFillMode: "forwards",
        }}
      >
        Dropzone is a productivity app for the Mac that makes it faster and
        easier to move and copy files, launch applications, upload to many
        different services, and much more.
      </div>

      <div
        className="mt-10 flex animate-fade-up justify-center px-5 text-center opacity-0"
        style={{
          animationDelay: "0.55s",
          animationFillMode: "forwards",
        }}
      >
        <Balancer>
          <Link
            className="text-blue-400 underline"
            href="/blog/dropzone-4-versus-dropzone-3-should-i-upgrade/"
          >
            Dropzone 4 versus Dropzone 3 - Read Blog Post
          </Link>
        </Balancer>
      </div>

      <div
        className="w-9/12 animate-fade-up px-5 opacity-0"
        style={{
          animationDelay: "0.55s",
          animationFillMode: "forwards",
        }}
      >
        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-y-5">
          <div className="grid text-center">
            <button
              type="button"
              className="mr-2 inline-flex rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-8 py-4 text-center text-sm font-medium text-white hover:bg-gradient-to-bl"
            >
              <svg
                className="mr-2 h-5 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download Dropzone 4
            </button>
            <span className="pt-2 text-sm text-gray-500">Version 4.6.1</span>
          </div>

          <div className="grid text-center">
            <a
              href="#!"
              className="buy ctabutton paddle_button"
              data-product="613556"
              data-theme="none"
            >
              <button
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 
            to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white group-hover:from-purple-600 group-hover:to-blue-500"
              >
                <span className="relative rounded-md bg-white px-5 py-3.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                  <svg
                    className="mr-2 inline-block h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <span>Buy Dropzone 4 for $40</span>
                </span>
              </button>
            </a>

            <span className="pt-2 text-sm text-gray-500">
              Dropzone 4 Pro Features
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center text-neutral-600">
          <ul className="max-w-xl  list-disc px-10 py-2 text-left sm:w-4/5">
            <li className="py-2">Runs on macOS 10.15 and later</li>
            <li className="py-2">
              Free to use and includes a 14 day Dropzone 4 Pro trial
            </li>
            <li className="py-2">
              Unlock all Dropzone 4 Pro features by purchasing Dropzone 4 Pro
              Lifetime for $40 or start a Dropzone 4 Pro subscription for only
              $1.99/month
            </li>
            <li className="py-2">
              Up to 30% discount if upgrading from Dropzone 3. Redeem your
              discount here
            </li>
          </ul>
        </div>

        <div className="mb-3 mt-10 text-center text-sm text-gray-500">
          <p>Or grab Dropzone 4 on Setapp or the Mac App Store</p>
        </div>

        <div className="flex w-full flex-row flex-wrap justify-center gap-y-5 text-center">
          <Link href="https://go.setapp.com/stp88?refAppID=155&stc=Aptonic%20Website&utm_medium=available_on_setapp_button&utm_source=155&utm_campaign=https://aptonic.com">
            <Image
              className="mr-2"
              src="/download-setapp.png"
              alt="Download on Setapp"
              width="220"
              height="56"
            />
          </Link>

          <Link href="https://apps.apple.com/in/app/dropzone-4/id1485052491?mt=12">
            <Image
              src="/download-mas.png"
              alt="Download on the Mac App Store"
              width="220"
              height="56"
            />
          </Link>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl px-2 text-sm">
          <div className="-mx-2 flex flex-wrap">
            <div className="w-full px-10 py-5 text-center lg:w-1/3">
              <div className="min-h-full block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p className="font-normal text-gray-700">
                  &ldquo;Now that the best parts of Dropzone 4 are free, there&apos;s
                  simply no reason not to install this must-have menubar
                  utility.&rdquo;
                </p>
              </div>
            </div>
            <div className="w-full px-10 py-5 text-center lg:w-1/3">
              <div className="min-h-full block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <p className="font-normal text-gray-700">
                &ldquo;Dropzone catapults drag and drop into the twenty-first century
                with one-stop-shop access to files and applications, timesaving
                actions, and effortless menu bar access. Install it, and you&apos;ll
                forget all about your Mac&apos;s Dock and Launchpad.&rdquo;
                </p>
              </div>
            </div>
            <div className="w-full px-10 py-5 text-center lg:w-1/3">
              <div className="min-h-full block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p className="font-normal text-gray-700">
                  &ldquo;Dropzone provides fantastic shortcuts for moving, copying,
                  uploading files and performing various tasks. Everything is
                  handled via drag-and-drop, saving you time with common, tedious
                  tasks.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="text-3xl mb-10 font-roboto">Dropzone makes it faster and easier to:</h1>
        </div>

        <div className="mx-auto flex max-w-screen-xl flex-wrap px-2 text-sm text-gray-500">
          <div className="features-left w-full px-10 py-5 text-center sm:w-1/3">
            <ul>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/move-files.png"
                  alt="Move Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Move Files</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/copy-files.png"
                  alt="Copy Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Copy Files</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/install.png"
                  alt="Install Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Install Applications</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/applications.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Launch Applications</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/airdrop.png"
                  alt="AirDrop"
                  width={50}
                  height={50}
                />
                <span className="pl-3">AirDrop</span>
              </li>
            </ul>
          </div>

          <div className="w-full px-10 py-5 text-center sm:w-1/3">
            <ul>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/imgur.png"
                  alt="Move Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Imgur</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/gdrive.png"
                  alt="Copy Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Google Drive</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/amazons3.png"
                  alt="Install Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Amazon S3</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/sftp.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">SFTP Server</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/ftp.png"
                  alt="AirDrop"
                  width={50}
                  height={50}
                />
                <span className="pl-3">FTP Server</span>
              </li>
            </ul>
          </div>

          <div className="w-full px-10 py-5 text-center sm:w-1/3">
            <ul>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/moveandrename.png"
                  alt="Move Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Rename &amp; Move Files</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/shorten.png"
                  alt="Copy Files"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Shorten URLs</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/resize-images.png"
                  alt="Install Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Resize Images</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/tinify.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Compress Images</span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/downloader.png"
                  alt="AirDrop"
                  width={50}
                  height={50}
                />
                <span className="pl-3">Download YouTube Videos</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-3 mt-10 text-center text-lg text-gray-500">
          <p>Boost your productivity and complete everyday tasks faster with Dropzone.</p>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>



        <br />
        <br />
      </div>
    </>
  );
}
