import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceCard = ({ title, rotation, imageSrc, yOffset }) => (
  <motion.div
    className="absolute w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[380px] rounded-[20px] md:rounded-[35px] overflow-hidden"
    style={{
      rotate: rotation,
      left: "calc(50% - 100px)", // Adjusted for mobile
      top: "calc(50% - 150px)", // Shift slightly upward on mobile
      y: yOffset,
    }}
  >
    <div className="absolute inset-0 rounded-[20px] md:rounded-[35px] border border-white/5 border-t-0 overflow-hidden bg-gradient-to-b from-[#9b73f2]/20 to-[#5c3cd7]/20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(360deg, rgba(156, 116, 242, 0.11) 0% , rgb(160, 118, 249) 300%)",
        }}
      />
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div
        className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white text-[24px] md:text-[40px] lg:text-[51px] font-light"
        style={{ lineHeight: "1" }}
      >
        {title}
      </div>
    </div>
  </motion.div>
);

const OurServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const services = [
    {
      title: "Innovative Solutions",
      rotation: -20,
      imageSrc:
        "https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=1024",
    },
    {
      title: "Hardware Solution",
      rotation: -13,
      imageSrc:
        "https://framerusercontent.com/images/TriMEg9VI7vab6L5vl80XoMJYF8.jpg",
    },
    {
      title: "Artificial Intelligence",
      rotation: -5,
      imageSrc:
        "https://framerusercontent.com/images/7Zpq5rsCuhC8CoNtwow4eE3TemA.png",
    },
    {
      title: "Software Solution",
      rotation: 5,
      imageSrc:
        "https://framerusercontent.com/images/TrbTQ8gSDTFgzJUBQkhOk2hAWOA.jpg",
    },
  ];

  const yOffsets = services.map((_, index) =>
    useTransform(
      scrollYProgress,
      [1 - (index + 1) / services.length, 1 - index / services.length],
      [0, -800]
    )
  );

  const textColor = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    ["#ffffff", "#808080"]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[400vh] -translate-y-32 md:translate-y-0"
    >
      {/* The -translate-y-12 moves the section upward on mobile */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-[60px] md:text-[100px] lg:text-[200px] font-light tracking-tighter text-center px-4 md:px-8 z-10"
          style={{ color: textColor }}
        >
          Our Services
        </motion.div>
        <div
          className="absolute w-[400px] md:w-[800px] h-[200px] md:h-[400px] lg:w-[1026px] lg:h-[519px] rounded-full filter blur-[15px] md:blur-[30px] lg:blur-[60px]"
          style={{ backgroundColor: "#613fe83d" }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              yOffset={yOffsets[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
