"use client";

import BuyLink from "@/components/home/buy-link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Coupons = {
  lifetime_coupon: string;
  subscription_coupon: string;
};

type CouponData = {
  status: string;
  message: string;
  coupons: Coupons;
};

export default function Upgrade() {
  const searchParams = useSearchParams();
  const [couponData, setCouponData] = useState<CouponData | null>(null);
  const [serial, setSerial] = useState("");

  useEffect(() => {
    window.scroll(0, 0);

    if (searchParams) {
      const serialParam = searchParams.get("serial");
      if (serialParam) {
        setSerial(serialParam as string);
      }
    }
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://licensing.aptonic.com/get_upgrade_discount_coupons",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serial: serial }),
      },
    );

    const data = await response.json();
    setCouponData(data);

    if (data.status !== "success") {
      setSerial("");
    }

    window.scroll(0, 0);
  };

  return (
    <>
      <div className="z-10 mt-28 px-5 text-gray-500 sm:w-full lg:max-w-4xl">
        <h2 className="mb-5 text-xl">Dropzone 4 Pro Upgrade Pricing</h2>

        <Image
          src="/Dropzone3_To_Dropzone4.png"
          alt="Dropzone 3 to Dropzone 4"
          width={320}
          height={123}
          quality={100}
        />
        <br />

        {(!couponData || (couponData && couponData.status !== "success")) && (
          <div>
            <p className="font-bold">
              If you're a Dropzone 3 customer, then you're eligible for a
              significant discount on your upgrade to Dropzone 4 Pro.
            </p>
            <br />
            <p>
              Enter your Dropzone 3 Serial for 30% off Dropzone 4 Pro Lifetime
              or 10% recurring off your monthly subscription.
            </p>
            <br />

            {couponData && couponData.status !== "success" && (
              <p className="text-red-500">
                {couponData.status === "error"
                  ? couponData.message
                  : "An unknown error occurred."}
                <br />
                <br />
              </p>
            )}

            <form id="upgradeForm" method="POST" onSubmit={handleSubmit}>
              <label>
                Dropzone 3 Serial Number:
                <br />
                <input
                  className="mb-3 mr-3 w-80"
                  type="text"
                  name="serial"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  required
                />
              </label>
              <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                type="submit"
              >
                Get Discount
              </button>
            </form>
          </div>
        )}
        {couponData && couponData.status === "success" && (
          <div>
            <div>
              <h2 className="mb-5">
                Your Dropzone 4 Pro Lifetime coupon code:
              </h2>
              <div className="flex items-center">
                <div className="w-min border border-slate-400 bg-indigo-100 p-5 text-3xl font-bold text-gray-600">
                  {couponData.coupons.lifetime_coupon}
                </div>
                <div className="ml-4 text-sm md:text-2xl">
                  30% discount
                  <br />
                  $28 USD one off
                </div>
              </div>
              <div className="mt-4">
                <BuyLink
                  product_id={613556}
                  coupon={couponData.coupons.lifetime_coupon}
                >
                  Buy now with discount code applied
                </BuyLink>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="mb-5">
                Your Dropzone 4 Pro Subscription coupon code:
              </h2>
              <div className="flex items-center">
                <div className="w-min border border-slate-400 bg-violet-100 p-5 text-3xl font-bold text-gray-600">
                  {couponData.coupons.subscription_coupon}
                </div>
                <div className="ml-4 text-sm md:text-2xl">
                  15% recurring monthly discount
                  <br />
                  $1.69 USD/month
                </div>
              </div>
              <div className="mt-4">
                <BuyLink
                  product_id={620999}
                  coupon={couponData.coupons.subscription_coupon}
                >
                  Subscribe now with discount code applied
                </BuyLink>
              </div>
            </div>
            <br />
            <br />
            <div className="text-sm italic">
              You can come back to this page and enter your Dropzone 3 serial to
              view your coupons anytime. Coupon codes may only be used during
              checkout one time.
            </div>
          </div>
        )}
        <br />
        {(!couponData || (couponData && couponData.status !== "success")) && (
          <p>
            Need help finding your Dropzone 3 serial? You can put your email in{" "}
            <a href="/lost_serial/3" className="text-blue-400 underline">
              on this page
            </a>{" "}
            and we will email it to you.
            <br />
            <br />
            If you purchased Dropzone 3 on the Mac App Store and do not have a
            serial number email{" "}
            <a
              className="text-blue-400 underline"
              href="mailto:support@aptonic.com"
            >
              support@aptonic.com
            </a>{" "}
            and we will assist you.
          </p>
        )}
      </div>
      <br />
      <br />
    </>
  );
}
