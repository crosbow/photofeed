"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };

  const handleClose = (e) => {
    if (e.target == overlay.current || e.target == wrapper.current) {
      onDismiss();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      onDismiss();
    }
  };

  useEffect(() => {
    // Handle Escape

    window.addEventListener("keydown", onKeyDown);

    return window.removeEventListener("keydown", onkeydown);
  }, []);

  return (
    <div
      ref={overlay}
      onClick={handleClose}
      className="fixed top-0 left-0 h-screen w-full bg-white/10 flex justify-center items-center z-50"
    >
      <div ref={wrapper} className="border p-2 rounded-md bg-black ">
        {children}
      </div>
    </div>
  );
};
export default Modal;
