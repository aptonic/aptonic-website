import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="z-10 px-5">
        <div className="flex flex-row">
          <div className="animate-fade-up">
            <Image
              alt="Dropzone 4 Icon"
              src="/app_icon.png"
              width={256}
              height={256}
              className="inline-block mt-20"
              style={{
                animationDelay: "0.25s",
                animationFillMode: "forwards",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
