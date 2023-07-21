export const dynamic = 'force-dynamic'
export const revalidate = 0

import Image from "next/image";
import SupportItem from "@/components/support/support-item";

import playIcon from "/public/support/play.svg";
import plusIcon from "/public/support/plus.svg";
import upgradeIcon from "/public/support/upgrade.svg";
import keyIcon from "/public/support/key.svg";
import mailIcon from "/public/support/mail.svg";
import pressIcon from "/public/support/press.svg";
import forumsIcon from "/public/support/forums.svg";

export default function Page() {
  return (
    <>
      <div className="z-10 ml-5 mr-10 mt-32 px-5 md:w-10/12 lg:w-8/12">
        <div className="flex flex-row">
          <div
            className="w-full animate-fade-up opacity-0"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <div className="flex">
              <div className="mr-16 mt-[-25px] hidden w-28 shrink-0 md:block">
                <Image
                  alt="Dropzone 4 Icon"
                  src="/app_icon.png"
                  priority={true}
                  width={207}
                  height={207}
                  className=""
                />

                <Image
                  alt="Dropzone 4 Icon"
                  src="/rocket.png"
                  width={207}
                  height={207}
                  priority={true}
                  className="mt-[280px]"
                />
              </div>

              <div>
                <SupportItem
                  title="Dropzone Introduction Video"
                  icon={playIcon}
                  link="/intro"
                >
                  This short video will teach you the basics of using Dropzone.
                </SupportItem>

                <SupportItem
                  title="Dropzone 4 Add-on Actions"
                  icon={plusIcon}
                  link="/actions"
                >
                  You can extend Dropzone by installing add-on actions from
                  here.
                </SupportItem>

                <SupportItem
                  title="Dropzone 4 Pro Upgrade Pricing"
                  icon={upgradeIcon}
                  link="/upgrade"
                >
                  Enter your Dropzone 3 serial on this page to receive up to a
                  30% discount on Dropzone 4 Pro.
                </SupportItem>

                <SupportItem
                  title="How to Register Dropzone 4 Pro Lifetime (for non-Mac App Store customers)"
                  icon={keyIcon}
                  link="/guide"
                >
                  If you lost your Dropzone license put your email address in{" "}
                  <a className="underline" href="/lost_serial">
                    on this page
                  </a>{" "}
                  and we'll send it to you again. Having trouble registering
                  Dropzone? - There's solutions for that{" "}
                  <a className="underline" href="/guide">
                    here.
                  </a>
                </SupportItem>

                <SupportItem
                  title="Email Us"
                  icon={mailIcon}
                  link="mailto:support@aptonic.com"
                >
                  If you're having problems, email us at: support@aptonic.com
                </SupportItem>

                <SupportItem
                  title="Dropzone Press Kit (Updated Feb 2023)"
                  icon={pressIcon}
                  link="/Dropzone-4-Press-Kit.zip"
                >
                  A zip archive containing Dropzone product information, app
                  icon and screenshots.
                </SupportItem>

                <hr className="my-10 h-px border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />

                <SupportItem
                  title="Forums"
                  icon={forumsIcon}
                  link="https://forums.aptonic.com"
                >
                  The Dropzone Forums are a great place to get help from us and
                  to discuss Dropzone with other users. You may want to check
                  there first.
                </SupportItem>

                <SupportItem
                  title="Further Inquiries or Say Hello"
                  icon={mailIcon}
                  link="mailto:contact@aptonic.com"
                >
                  If you have any questions do not hesitate to email us at
                  contact@aptonic.com
                </SupportItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}
