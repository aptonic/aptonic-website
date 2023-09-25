export const metadata = {
  title: "Aptonic - Dropzone 4 Release Notes",
};

import "./releasenotes.css";

const getReleaseNotes = async () => {
    const data = await fetch("https://updates.aptonic.com/dz4/releasenotes/releasenotes.html");
    const releasenotes = await data.text();
    return releasenotes;
  };
  
  export default async function ReleaseNotes() {
    const releasenotes = await getReleaseNotes();

    return (
      <div className="z-10 mt-28 px-5 sm:w-full lg:max-w-4xl">
        <h2 className="mb-10 text-xl font-medium text-gray-700">Dropzone 4 Release Notes</h2>
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: releasenotes }}></div>
      </div>
    );
  }