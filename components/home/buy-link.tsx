"use client";

export default function BuyLink({
    children,
    product_id,
  }: {
    children: React.ReactNode;
    product_id: number;
  }) {
  return (
    <a
      onClick={() => {
        window.Paddle.Checkout.open({ product: product_id });
      }}
      href="#!"
      className="text-blue-400 underline"
    >
      {children}
    </a>
  );
}
