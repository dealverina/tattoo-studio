import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CircularProgressbar } from "react-circular-progressbar";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

export const Skills = () => {
  const [fullBody, setFullBody] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 20) {
          setFullBody(fullBody + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
    }
  }, [fullBody, inView]);

  return (
    <section ref={ref} className="bg-pink-200 section">
      <div className="container mx-auto">
        <div>
          <div>
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
