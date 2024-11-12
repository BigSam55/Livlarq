'use client'
import React from "react";
import Image from "next/image";
import style from "../Magazine/page.module.css";
import Button from "../Button/page";
import { Swiper, SwiperSlide} from "swiper/react";
import { Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/scrollbar';

let magazines = [
  {
    image:
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876841/Homepage-v3/larq_pitcher_on_table.png",
    note: "I am a nutritionist, and I only use filtered water. Here is why.",
  },
  {
    image:
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876924/Homepage-v3/New_york_view.png",
    note: "How clean is New York Tap Water?",
  },
  {
    image:
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1684876988/Homepage-v3/dished_with_food.png",
    note: "How to remove PFAS, PFOA, PFOS from tap water",
  },
  {
    image:
      "https://res.cloudinary.com/larq/image/upload/v1685304669/Homepage-v3/london_bridge.jpg",
    note: "How clean is London tap water?",
  },
  {
    image:
      "https://res.cloudinary.com/larq/image/upload/q_auto,f_auto/v1685304702/Homepage-v3/larq_bottle_on_the_water.jpg",
    note: "How to clean your reusable water bottle (if you do not have a self-cleaning one)",
  },
  {
    image:
      "https://res.cloudinary.com/larq/image/upload/w_410,h_510,c_fill/q_auto,f_auto/v1711018381/Homepage-v3/tap-water-sprinkling.jpg",
    note: "What contaminants are lurking in your water?",
  },
];

export default function Magapage() {
  return (
    <>
      <div className={style.container} data-aos="fade-up" data-aos-duration="1000">
        <div className={style.text}>
          <div className={style.star}>
            <h1>basq magazine</h1>
            <p>Take a peek at our online magazine where we cover everything from water to travel and wellness.</p>
          </div>
          <Button name="Explore basq" />
        </div>
      </div>

      <div className={style.swipContainer} data-aos="fade-up" data-aos-duration="1000">

      <Swiper className={style.mSwiper}
       modules={[Scrollbar]}
       spaceBetween={25}
       slidesPerView={2.9}
       scrollbar={{ draggable: true}}>

        {magazines.map((magazine, index) => (
          <SwiperSlide key={index}>
            
              <div className={style.mContent}>
                <div className={style.mImage}>
                  <Image src={magazine.image} width={400} height={400} alt="magazine-cover" />
                </div>
                <div className={style.mtext}>
                  <p>{magazine.note}</p>
                  <p>Read more</p>
                </div>
              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
