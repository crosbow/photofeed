"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      onDismiss();
    }
  };

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }

    // Handle Escape
    window.addEventListener("keydown", onKeyDown);
    return window.removeEventListener("keydown", onkeydown);
  }, []);

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onDismiss}
      className="bg-zinc-900 text-white shadow-xl rounded-md"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};
export default Modal;
