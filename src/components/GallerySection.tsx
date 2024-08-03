import { useState } from "react";
import { galleryData } from "../data";
import { ColumnsPhotoAlbum } from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import type { Photo } from "react-photo-album";
import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";

const slides = galleryData.images.map(
  ({ original, width, height }) =>
    ({
      src: original,
      width: width,
      height: height,
    } as Photo)
);

export const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const { title, images, btnText, btnIcon } = galleryData;

  return (
    <section className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <ColumnsPhotoAlbum
          photos={images}
          onClick={({ index }) => {
            setIndex(index);
          }}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0, 0,0, 0.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          {btnText} <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};
