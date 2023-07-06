"use client";

import { useDemoModal } from "@/components/home/pro-features-modal";
import ReactDOM from "react-dom";

export default function ProFeatures() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <div>
      {typeof window !== 'undefined' && ReactDOM.createPortal(<DemoModal />, document.body)}
      <a href="#!" onClick={() => setShowDemoModal(true)} className="underline pt-2 text-sm text-gray-500">
        Dropzone 4 Pro Features
      </a>
    </div>
  );
}
