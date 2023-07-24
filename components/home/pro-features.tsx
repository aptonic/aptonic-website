"use client";

import { useProFeaturesModal } from "@/components/home/pro-features-modal";
import ReactDOM from "react-dom";

export default function ProFeatures() {
  const { ProFeaturesModal, setShowProFeaturesModal } = useProFeaturesModal();
  return (
    <div className="pt-1">
      {typeof window !== 'undefined' && ReactDOM.createPortal(<ProFeaturesModal />, document.body)}
      <a onClick={() => setShowProFeaturesModal(true) } className="cursor-pointer underline text-sm text-gray-500">
        Dropzone 4 Pro Features
      </a>
    </div>
  );
}
