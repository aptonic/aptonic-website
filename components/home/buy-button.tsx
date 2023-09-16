"use client";

export default function BuyButton() {
  return (
    <>
      <button
        onClick={() => {
          window.Paddle.Checkout.open({ product: 613556 });
        }}
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
          <span>Buy Dropzone 4 for $35</span>
        </span>
      </button>
    </>
  );
}
