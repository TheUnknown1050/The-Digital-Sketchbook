import React from "react";
import Gallery from "./Gallery";
import Image from "next/image";

const SketchbookSection = () => {
  return (
    <section id="sketchbook-section">
      <div className="w-full h-44" />

      <div className="w-4/5 sm:max-w-3xl m-auto mb-20">
        <Image
          src="/media/pineapple.png"
          alt="pineapple"
          width={150}
          height={150}
          draggable={false}
          className="absolute left-24 translate-y-28 rotate-45 -z-10 select-none"
        />

        <Image
          src="/media/crocs.png"
          alt="crocs"
          width={240}
          height={240}
          draggable={false}
          className="absolute right-6 translate-y-96 -z-10 -rotate-6 select-none"
        />

        <Image
          src="/media/sketchbook.png"
          alt="sketchbook"
          width={150}
          height={150}
          draggable={false}
          className="absolute left-[45%] -translate-y-20 -z-10 -rotate-6 select-none"
        />
        <Image
          src="/media/sketchbook.png"
          alt=""
          width={150}
          height={150}
          draggable={false}
          className="absolute left-[45%] -translate-y-20 -z-20 -rotate-6 invert brightness-0 saturate-100 opacity-35 scale-[103%] select-none"
        />

        <h2 className="text-5xl font-extrabold mb-4 pt-24 text-center text-white">
          This is the{" "}
          <span className="bg-clip-text text-transparent font-black bg-gradient-to-r from-blue-600 to-cyan-400">
            digital sketchbook
          </span>
        </h2>

        <p className="text-white text-left">
          It's more than just a sketchbook. It's a collection of some of Gawx's
          finest works. Each piece tells a story, capturing moments of
          creativity, inspiration, and dedication from over half a decade of
          eating pineapple. Explore and immerse yourself in the digital
          sketchbook. You can touch, but be careful! Some of these are so good
          they might knock your Crocs off.
        </p>
      </div>

      <Gallery />
    </section>
  );
};

export default SketchbookSection;
