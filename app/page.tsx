import Image from "next/image";
import appIcon from "/public/app_icon.png";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import DzReviewCard from "@/components/home/dzreview-card";
import BuyButton from "@/components/home/buy-button";
import BuyLink from "@/components/home/buy-link";
import ProFeatures from "@/components/home/pro-features";

export default async function Home() {
  //const { DemoModal } = ;

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
              priority={true}
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
                <div className="inline-block rounded-md bg-purple-500 p-1 py-0 font-light font-thin leading-none text-white md:rounded-lg md:p-3 md:py-0">
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
        className="mt-6 w-[20rem] animate-fade-up text-center font-light text-gray-500 opacity-0 md:w-[45rem] md:text-xl"
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
        className="mt-10  flex w-full animate-fade-up justify-center px-8 text-center opacity-0"
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
        className="w-9/12 animate-fade-up opacity-0"
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
            <a href="https://updates.aptonic.com/dropzone4-latest">
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
            </a>
            <span className="pt-2 text-sm text-gray-500">Version 4.6.1</span>
          </div>

          <div className="grid text-center">
            <BuyButton />
            <ProFeatures />
          </div>
        </div>

        <div className="mt-10 flex justify-center text-neutral-600">
          <ul className="max-w-xl list-disc px-10 py-2 text-left sm:w-4/5">
            <li className="py-2">Runs on macOS 10.15 and later</li>
            <li className="py-2">
              Free to use and includes a 14 day Dropzone 4 Pro trial
            </li>
            <li className="py-2">
              Unlock all Dropzone 4 Pro features by{" "}
              <BuyLink product_id={613556}>
                purchasing Dropzone 4 Pro Lifetime
              </BuyLink>{" "}
              for $40 or{" "}
              <BuyLink product_id={620999}>
                start a Dropzone 4 Pro subscription
              </BuyLink>{" "}
              for only $1.99/month
            </li>
            <li className="py-2">
              Up to 30% discount if upgrading from Dropzone 3. Redeem your
              discount <Link className="text-blue-400 underline" href="/upgrade">here</Link>
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

        <div className="mx-auto max-w-screen-xl text-sm">
          <div className="-mx-2 flex flex-wrap">
            <div className="flex w-full justify-center py-5 text-center md:w-1/3 md:px-5">
              <div className="block min-h-full max-w-sm rounded-lg border border-gray-200 bg-white p-6  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p className="font-roboto text-gray-700">
                  &ldquo;Now that the best parts of Dropzone 4 are free,
                  there&apos;s simply no reason not to install this must-have
                  menubar utility.&rdquo;
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center py-5 text-center md:w-1/3 md:px-5">
              <div className="block min-h-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p className="font-roboto text-gray-700">
                  &ldquo;Dropzone catapults drag and drop into the twenty-first
                  century with one-stop-shop access to files and applications,
                  timesaving actions, and effortless menu bar access. Install
                  it, and you&apos;ll forget all about your Mac&apos;s Dock and
                  Launchpad.&rdquo;
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center py-5 text-center md:w-1/3 md:px-5">
              <div className="block min-h-full max-w-sm rounded-lg border border-gray-200 bg-white p-6 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <p className="font-roboto text-gray-700">
                  &ldquo;Dropzone provides fantastic shortcuts for moving,
                  copying, uploading files and performing various tasks.
                  Everything is handled via drag-and-drop, saving you time with
                  common, tedious tasks.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-10 font-roboto text-3xl">
            Dropzone makes it faster and easier to:
          </h1>
        </div>

        <div className="mx-auto flex max-w-screen-xl flex-wrap whitespace-nowrap px-2 text-sm text-gray-500">
          <div className="w-full px-10 text-center md:w-1/3 md:py-5">
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
                <span className="pl-3 sm:block md:hidden lg:block">
                  Install Applications
                </span>
                <span className="hidden pl-3 sm:hidden md:block lg:hidden">
                  Install Apps
                </span>
              </li>
              <li className="flex items-center py-1">
                <Image
                  src="/actions/applications.png"
                  alt="Launch Applications"
                  width={50}
                  height={50}
                />
                <span className="pl-3 sm:block md:hidden lg:block">
                  Launch Applications
                </span>
                <span className="hidden pl-3 sm:hidden md:block lg:hidden">
                  Launch Apps
                </span>
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

          <div className="w-full px-10 text-center md:w-1/3 md:py-5">
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

          <div className="w-full px-10 text-center md:w-1/3 md:py-5">
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
          <p>
            Boost your productivity and complete everyday tasks faster with
            Dropzone.
          </p>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-12 font-roboto text-3xl">How to use Dropzone</h1>
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-3 font-roboto">
            1. Drag a file to the top of your screen
          </h1>

          <Image
            src="/how-to-use1.png"
            alt="Drag a file to the top of your screen"
            width={589}
            className="mx-auto"
            height={140}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            2. A grid of your actions opens. Drop the file on the action you
            want
          </h1>

          <Image
            src="/how-to-use2.png"
            alt="A grid of your actions opens. Drop the file on the action you want"
            width={589}
            className="mx-auto"
            height={457}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            3. The action is performed on your file
          </h1>

          <Image
            src="/how-to-use3.png"
            alt="The action is performed on your file"
            width={589}
            className="mx-auto"
            height={140}
          />
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-10 font-roboto text-3xl">Keyboard shortcuts</h1>

          <h1 className="mb-3 font-roboto">1. Press F3</h1>

          <Image
            src="/f3.png"
            alt="Press F3"
            className="mx-auto"
            width={141}
            height={101}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            2. Dropzone opens and shows the shortcut key overlaid on each icon
          </h1>

          <Image
            src="/keyboard-overlays.png"
            alt="Dropzone opens and shows the shortcut key overlaid on each icon"
            width={615}
            className="mx-auto"
            height={555}
          />

          <h1 className="mb-3 mt-16 font-roboto">
            3. Hit the shortcut key for the action you want to run
          </h1>
        </div>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-12 font-roboto text-3xl">
            What people are saying about Dropzone
          </h1>
        </div>

        <DzReviewCard
          name={"Wairami from United States"}
          src={"Mac App Store Review"}
        >
          {`I literally use this every hour I'm at my laptop... Which is roughly
          14 hours a day. This app is game-changing for me. I know it has uses
          other than "store it here to paste where you want later", but that's
          mainly what I use it for, and man... it does it's job superbly. I
          can't recommend this app enough for MacBook users.`}
        </DzReviewCard>

        <DzReviewCard
          name={"Ronny411 from United Kingdom"}
          src={"Mac App Store Review"}
        >
          {`Such a handy little app, if you like a clean and organised working
          environment. I study and work full time; this lets me organise things
          rapidly and without any fuss. Couldn't recommend it more.`}
        </DzReviewCard>

        <DzReviewCard
          name={"DrumGuy68 from United States"}
          src={"Mac App Store Review"}
        >
          {`This app is great for streamlining tasks that you would do on your Mac
          everyday. It also helps keeps the desktop clutter down as you can drag
          an drop whatever you're working with and place it in with out having
          to open up a bunch of folders to get to it. (Pre-setup is required)
          Once you have it setup, it's a snap.`}
        </DzReviewCard>

        <DzReviewCard
          name={"donkey2thekong from United States"}
          src={"Mac App Store Review"}
        >
          {`This App has changed the way I do everything!! It is hands down the
          best app on the market and is the now the app against which I rate all
          others. Dropzone is a 6 for sure!!`}
        </DzReviewCard>

        <DzReviewCard
          name={"barryforque from United States"}
          src={"Mac App Store Review"}
        >
          {`Great, handsome and easy to use. I love the different Dropzone
          functions like automatic copying to folders and automatic moving to
          others. I use it to do no-fuss backups of work files using my Dropbox
          account. Way simpler than Finder or keeping shortcuts on the desktop.`}
        </DzReviewCard>

        <DzReviewCard
          name={"german1608 from Panama"}
          src={"Mac App Store Review"}
        >
          {`This is one of the apps that once you use it you can't live without
          it. It saves a bunch of steps when moving files around. Highly
          recommended.`}
        </DzReviewCard>

        <div className="px-5">
          <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="mb-10 font-roboto text-3xl">There&apos;s more...</h1>
        </div>

        <div className="mx-auto max-w-screen-xl text-center">
          <Image
            src="/devicon.png"
            alt="Dropzone Action Development Icon"
            className="mx-auto"
            width={136}
            height={133}
          />

          <div className="mb-3 mt-10 text-center text-base text-gray-500">
            <p>
              Easily extend Dropzone by installing more actions in just a few
              clicks.
            </p>

            <br />

            <p>Develop your own Dropzone actions in Ruby or Python.</p>
            <p>
              You can also modify existing actions and share your actions with
              others.
            </p>

            <br />

            <p>We can&apos;t wait to see what you make.</p>
          </div>

          <div className="mx-auto mt-12 flex max-w-md justify-center text-center text-base font-bold text-blue-500">
            <Link href="/actions">
              <div className="mx-auto mr-10 flex items-center">
                <svg
                  className="mr-2 flex w-7 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z" />
                </svg>
                <span className="flex">Install Actions</span>
              </div>
            </Link>

            <Link href="https://github.com/aptonic/dropzone4-actions/blob/master/README.md#introducing-the-dropzone-4-api">
              <div className="mx-auto flex items-center">
                <svg
                  className="mr-2 flex w-5 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
                </svg>
                <span className="flex">Developer Documentation</span>
              </div>
            </Link>
          </div>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}
