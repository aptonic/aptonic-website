"use client";

import { useDemoModal } from "@/components/home/pro-features-modal";
import ReactDOM from "react-dom";

export default function ProFeatures() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <div className="pt-1">
      {typeof window !== 'undefined' && ReactDOM.createPortal(<DemoModal />, document.body)}
      <a onClick={() => setShowDemoModal(true) } className="cursor-pointer underline text-sm text-gray-500">
        Dropzone 4 Pro Features
      </a>
    </div>
  );
}
