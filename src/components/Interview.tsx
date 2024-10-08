import "../modalVideo.scss";
import ModalVideo from "react-modal-video";
import { interviewData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

export const Interview = () => {
  const { title, btnText, btnIcon } = interviewData;
  const [open, isOpen] = useState(false);

  return (
    <div id="interview" className="pt-28">
      <motion.section
        className="bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col items-start max-w-[880px]">
              {/* tittle */}
              <motion.h3
                className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8"
                variants={fadeIn("down")}
              >
                {title}
              </motion.h3>
              <motion.div variants={fadeIn("down")}>
                {/* play btn */}
                <div
                  onClick={() => isOpen(true)}
                  className="flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition"
                >
                  {/* border */}
                  <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
                    {/* inner */}
                    <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                      <div className="pl-1">{btnIcon}</div>
                    </div>
                  </div>
                  {/* btn text */}
                  <div className="font-primary uppercase">{btnText}</div>
                </div>
              </motion.div>
              {/* modal video */}
              <ModalVideo
                channel="youtube"
                isOpen={open}
                videoId="_l1mqYQuNf8"
                onClose={() => isOpen(false)}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
