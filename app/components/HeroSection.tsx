"use client";

import React, { useEffect, useState, useRef } from "react";
import HeroCallToAction from "./HeroCallToAction";

const HeroSection = () => {
  const [imageIndex, setImageIndex] = useState(2);
  const [ghostImageIndex, setGhostImageIndex] = useState(3);
  const [imageUrl, setImageUrl] = useState("url('/media/hero-1.png')");
  const [ghostImageUrl, setGhostImageUrl] = useState(
    "url('/media/hero-2.png')"
  );
  let incrementInterval: ReturnType<typeof setInterval>;

  const mouseTrailer = useRef<HTMLDivElement>(null);
  const ghostImage = useRef<HTMLDivElement>(null);
  const heroImage = useRef<HTMLDivElement>(null);
  const ctaButton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    incrementInterval = setInterval(() => {
      incrementIndex();
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTrailer.current || !ghostImage.current) return;
      const x =
        e.clientX - mouseTrailer.current!.offsetWidth / 2;
      const y =
        e.clientY -
        64.8 -
        mouseTrailer.current!.offsetHeight / 2;
      const scroll = window.scrollY;

      // Moving mouse trailer
      const mouseTrailerKeyframes = {
        transform: `translate(${x}px, ${y}px)`,
      };

      // Undoing movement on ghost image
      const ghostImageKeyframes = {
        transform: `translate(${-x}px, ${-y - scroll}px)`,
      };

      mouseTrailer.current!.animate(mouseTrailerKeyframes, {
        duration: 300,
        fill: "forwards",
      });

      ghostImage.current!.animate(ghostImageKeyframes, {
        duration: 300,
        fill: "forwards",
      });
    };

    const handleScroll = (e: Event) => {
      if (!mouseTrailer.current || !ghostImage.current) return;
      const scroll = window.scrollY;
  
      const ghostImageKeyframes = {
        transform: `translate(-${
          mouseTrailer.current!.getBoundingClientRect().left
        }px, ${
          64.8 - mouseTrailer.current!.getBoundingClientRect().top - scroll
        }px)`,
      };
      ghostImage.current!.animate(ghostImageKeyframes, {
        duration: 0,
        fill: "forwards",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(incrementInterval);
    };
    
  });

  function incrementIndex() {

      const newIndex = imageIndex == 7 ? 1 : imageIndex + 1;
      const newGhostIndex = newIndex == 7 ? 1 : newIndex + 1;

      setImageIndex(newIndex);
      setGhostImageIndex(newGhostIndex);
      setImageUrl(`url('/media/hero-${imageIndex}.png')`);

      setTimeout(() => {
        setGhostImageUrl(`url('/media/hero-${ghostImageIndex}.png')`);
      }, 500);

      clearInterval(incrementInterval);
  }

  function fitBlobToButton() {
    mouseTrailer.current!.style.transitionDuration = "0.7s";
    mouseTrailer.current!.style.height = "0px";
    mouseTrailer.current!.style.width = "0px";
  }

  function unfitBlobFromButton() {
    mouseTrailer.current!.style.height = "208px";
    mouseTrailer.current!.style.width = "240px";
    mouseTrailer.current!.style.transitionDuration = "0.8s";
  }

  return (
    <section className="group grid overflow-hidden hover:cursor-none">
      <div
        className="h-screen w-screen relative bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: imageUrl, gridColumn: 1, gridRow: 1 }}
        ref={heroImage}
        onClick={incrementIndex}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black from-5% via-transparent via-[percentage:40%_70%] to-black" />
        <div className="relative flex flex-col items-center justify-end h-5/6 text-center text-white">
          <div
            className="w-max h-max z-40"
            onMouseOver={fitBlobToButton}
            onMouseLeave={unfitBlobFromButton}
            ref={ctaButton}
          >
            <HeroCallToAction />
          </div>
        </div>
      </div>

      <div
        ref={mouseTrailer}
        className=" w-60 h-52 animate-blob overflow-hidden fixed z-30 pointer-events-none opacity-0 transition-all duration-800 ease-in-out group-hover:opacity-100"
      >
        <div className="w-7 h-7 rounded-full border-[7px] animate-pulse border-white/40 fixed z-20 translate-x-[106px] translate-y-[90px]" />
        <div
          className="fixed w-screen h-screen bg-cover bg-center transition-all duration-1000 delay-500 z-10 overflow-hidden"
          ref={ghostImage}
          style={{
            backgroundImage: ghostImageUrl,
          }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black from-5% via-transparent via-[percentage:40%_70%] to-black" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
