export default function SupportItem({ title, link, icon, children }) {

  return (
    <div className="mb-10">
      <a href={link} className="hover:underline inline-block">
        <div
          className="bg-auto w-10 bg-no-repeat pb-10 -mb-10 pl-14"
          style={{
            backgroundImage: `url(${icon.src})`,
            width: '100%',
            height: '100%',
          }}
        ></div>
        <div className="ml-[60px] text-gray-700 font-medium">{title}</div>
      </a>
      <div className="mb-10 ml-[60px] mt-0.5 text-sm text-gray-500">
        {children}
      </div>
    </div>
  );
}
