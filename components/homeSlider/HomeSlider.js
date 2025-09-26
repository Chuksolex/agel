
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./HomeSlider.module.css"; // 👈 import CSS module

export default function HeroSlider() {
  return (
    <section className="position-relative w-100" style={{ height: "600px" }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-100 h-100"
      >
        {/* Slide 1: video */}
        <SwiperSlide>
          <div className="position-relative w-100 h-100 overflow-hidden">
            <video
              src="/videos/herovideo1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            />
            <div className={styles.heroOverlay}>
              <h1 className="text-white fw-bold display-4">Agel</h1>
              <p className="text-white fs-4 mt-3">Clean Energy Solutions</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: image */}
        <SwiperSlide>
          <div className="position-relative w-100 h-100 overflow-hidden">
            <motion.img
              src="/images/hero2.jpg"
              alt="Pool"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            />
            <div className={styles.heroOverlay}>
              <h1 className="text-warning fw-bold display-4">
                All In One Solar Solutions
              </h1>
              <p className="text-warning fs-4 mt-3">Innovation with style</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: video */}
        <SwiperSlide>
          <div className="position-relative w-100 h-100 overflow-hidden">
            <video
              src="/videos/herovideo2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            />
            <div className={styles.heroOverlay}>
              <h1 className="text-white fw-bold display-4">Agel</h1>
              <p className="text-white fs-4 mt-3">Clean Energy Solutions</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4: image */}
        <SwiperSlide>
          <div className="position-relative w-100 h-100 overflow-hidden">
            <motion.img
              src="/images/hero3.jpg"
              alt="Overlay effect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            />
            <div className={styles.heroOverlay}>
              <h1 className="text-white fw-bold display-4">Power Your World</h1>
              <p className="text-white fs-4 mt-3">Solar + Innovation</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
