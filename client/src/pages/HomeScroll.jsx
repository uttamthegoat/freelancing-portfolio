/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


const technologies = ["Web Development", "App Development", "UI/UX Design", "Web Design", "Web Automation", "Web Scraping", "Web Sockets"];

export const HomeScroll = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentItem < technologies.length - 1) {
        setCurrentItem((prevItem) => (prevItem + 1) % technologies.length);
      } else {
        clearInterval(intervalId);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [technologies]);

  return (
    <div>
      <motion.div
        key={currentItem}
        style={{ overflow: "hidden", width: "100%" }}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-gray-400 text-xl sm:text-3xl font-semibold mb-2">
          {technologies[currentItem]}
        </h1>
      </motion.div>
    </div>
  );
};


export const RevealText = ({ children, delay, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay+0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: color||"black",
          zIndex: 1,
        }}
      />
    </div>
  );
};