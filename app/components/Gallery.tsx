"use client";

import Image from "next/image";
import React, { useState } from "react";
import ImageModal from "./ImageModal";
import ImageType from "./Interfaces";

// Function to import all images from the gallery folder
const importAll = (r: __WebpackModuleApi.RequireContext): ImageType[] => {
  return r.keys().map((file): ImageType => {
    const match = file.match(/\/(.+)-(\d{4})\.\w+$/);
    if (!match)
      return { src: r(file).default, name: "Unknown", date: "Unknown" };
    return {
      src: r(file).default,
      name: match[1],
      date: match[2],
    };
  });
};

// Importing images from the 'public/gallery' folder
const imageList: ImageType[] = importAll(
  require.context("../../public/media/gallery", false, /\.(png|jpe?g|svg)$/)
);

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType>(imageList[0]);

  const openModal = (image: ImageType) => {
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-4/5 mx-auto sm:mx-0 sm:w-full h-max justify-center my-10">
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />

      <div className="grid grid-cols-2 gap-10 max-w-3xl">
        <div className="grid gap-10">
          {imageList
            .slice(0, Math.ceil(imageList.length / 2))
            .map((image, index) => (
              <div key={index}>
                <div
                  className="grid border border-gray-600 rounded-2xl hover:cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ gridColumn: 1, gridRow: 1 }}
                  >
                    <Image
                      src={image.src}
                      alt={`Gallery image ${index} did not load`}
                      className="h-auto w-full rounded-2xl hover:scale-100 scale-105 hover:brightness-90 transition"
                    />
                  </div>

                  <Image
                    src={image.src}
                    alt={`Gallery image ${index} did not load`}
                    className="h-auto w-full rounded-2xl blur-sm -z-10"
                    style={{ gridColumn: 1, gridRow: 1 }}
                  />
                </div>

                <div>
                  <p className="text-left mt-3 text-xl font-bold text-gray-50">
                    {image.name}
                  </p>
                  <p className="text-left text-sm text-gray-500">
                    {image.date}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="grid gap-10">
          {imageList
            .slice(Math.ceil(imageList.length / 2))
            .map((image, index) => (
              <div key={index}>
                <div
                  className="grid border border-gray-600 rounded-2xl hover:cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div
                    className="overflow-hidden rounded-2xl"
                    style={{ gridColumn: 1, gridRow: 1 }}
                  >
                    <Image
                      src={image.src}
                      alt={`Gallery image ${index} did not load`}
                      className="h-auto w-full rounded-2xl hover:scale-100 scale-105 hover:brightness-90 transition"
                    />
                  </div>

                  <Image
                    src={image.src}
                    alt={`Gallery image ${index} did not load`}
                    className="h-auto w-full rounded-2xl blur-sm -z-10"
                    style={{ gridColumn: 1, gridRow: 1 }}
                  />
                </div>

                <div>
                  <p className="text-right mt-3 text-xl font-bold text-gray-50">
                    {image.name}
                  </p>
                  <p className="text-right text-sm text-gray-500">
                    {image.date}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
