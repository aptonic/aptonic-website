export default function  Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="leading-[48px]">
        {/* Here we are using the "dark" feature. Use this if you are supporting dark mode */}
        <div className="inline-block m-5 p-10 bg-orange-800 text-xl font-medium border-b-4 border-indigo-500">404</div>
        <div className="inline-block">
          <h2 className="text-base font-light">This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}
