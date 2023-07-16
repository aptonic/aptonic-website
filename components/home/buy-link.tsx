"use client";

export default function BuyLink({
    children,
    product_id,
    coupon,
  }: {
    children: React.ReactNode;
    product_id: number;
    coupon?: string;
  }) {
  return (
    <a
      onClick={() => {
        const checkoutOptions: { product: number; coupon?: string; } = { product: product_id };

        if (coupon) {
          checkoutOptions.coupon = coupon;
        }

        window.Paddle.Checkout.open(checkoutOptions);
      }}
      href="#!"
      className="text-blue-400 underline"
    >
      {children}
    </a>
  );
}