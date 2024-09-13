import React, { useEffect } from "react";
import ImageType from "./Interfaces";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  image: ImageType;
  onClose: () => void;
}

const ImageModal: React.FC<ModalProps> = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      if (!document) return;

      const scrollPosition = window.scrollY;
      document.body.style.overflowY = "scroll";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflowY = "";
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  });

  return (
    <div
      className="fixed flex inset-0 z-50 items-center justify-center bg-black bg-opacity-80 w-full h-screen transition-opacity duration-500"
      style={
        isOpen
          ? { opacity: 100, pointerEvents: "auto" }
          : { opacity: 0, pointerEvents: "none" }
      }
    >
      <div className="absolute w-full h-full" onClick={onClose} />
      <div className="relative w-3/5 h-auto sm:w-1/3 sm:h-max bg-white flex flex-col items-center rounded-2xl">
        <button
          className="absolute -right-7 text-white text-2xl z-[70] hover:scale-125 transition duration-100"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="grid h-full w-auto">
          <Image
            src={image!.src}
            alt={`${image?.name} did not load`}
            className="w-full h-auto rounded-2xl rounded-b-none jusify-start z-[60]"
            style={{ gridColumn: 1, gridRow: 1 }}
          />
          <Image
            src={image!.src}
            alt={`${image?.name} did not load`}
            className="w-full h-auto rounded-2xl rounded-b-none jusify-start blur-lg translate-y-1 saturate-200 scale-[98%]"
            style={{ gridColumn: 1, gridRow: 1 }}
          />
        </div>

        <div className="h-max w-full justify-end bg-black rounded-2xl rounded-t-none">
          <div>
            <p className="text-center mt-3 text-lg font-bold text-gray-50">
              {image.name}
            </p>
            <p className="text-center mb-3 mt-1 text-sm text-gray-300">
              by GawxArt, {image.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
