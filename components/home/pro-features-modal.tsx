import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="rounded-2xl md:border bg-white md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center text-sm text-gray-500 space-y-3 md:m-10 bg-white text-center">

          <Image
            src="/Dropzone4-Pro-Heading.png"
            alt="Precedent Logo"
            className="md:w-96 w-80"
            width={404}
            height={70}
          />

          <p className="md:w-96 w-80 text-sm text-gray-500">
            Get these features when you upgrade to Dropzone 4 Pro
          </p>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-2 pt-8">
            <div className="flex items-center">
              <Image
                src="/actions/gdrive.png"
                alt="Google Drive"
                width={50}
                height={50}
                className="mr-5"
              />
              <span>Google Drive Uploading</span>
            </div>

            <div className="flex items-center">
              <Image
                src="/actions/amazons3.png"
                alt="Amazon S3 Uploading"
                width={50}
                height={50}
                className="mr-5"
              />
              Amazon S3 Uploading
            </div>

            <div className="flex items-center">
              <Image
                src="/actions/sftp.png"
                alt="SFTP/FTP Uploading"
                width={50}
                height={50}
                className="mr-5"
              />
              SFTP/FTP Uploading
            </div>

            <div className="flex items-center">
              <Image
                src="/actions/moveandrename.png"
                alt="Rename &amp; Move Files"
                width={50}
                height={50}
                className="mr-5"
              />
              Rename &amp; Move Files
            </div>

            <div className="flex items-center">
              <Image
                src="/quicklook.png"
                alt="Quick Look"
                width={50}
                height={50}
                className="mr-5"
              />
              Quick Look Drop Bar items
            </div>

            <div className="flex items-center">
              <Image
                src="/stack.png"
                alt="Seperate Drop Bar stacks"
                width={50}
                height={50}
                className="mr-5"
              />
              Seperate Drop Bar stacks
            </div>


            <div className="flex items-center">
              <Image
                src="/actions/openurl.png"
                alt="Add unlimited Open URL actions"
                width={50}
                height={50}
                className="mr-5"
              />
              Add unlimited Open URL actions
            </div>

            <div className="flex items-center">
              <Image
                src="/actions/applescript.png"
                alt="Run AppleScript"
                width={50}
                height={50}
                className="mr-5"
              />
              Add Run AppleScript actions
            </div>

            <div className="flex items-center">
              <Image
                src="/f3.png"
                alt="F3"
                width={50}
                height={50}
                className="mr-5"
              />
              Action/macOS Service Key Triggers
            </div>

            <div className="flex items-center">
              <Image
                src="/devicon.png"
                alt="F3"
                width={50}
                height={50}
                className="mr-5"
              />
              Install add-on actions or develop your own
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
