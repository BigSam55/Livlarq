"use client";
import React from "react";
import {  Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from "../Swipper/page.module.css";


// Import Swiper modules
 

export default function Myswipper() {
  
  return (
    <>
      <Swiper
        className={style.swip}
        modules={[Scrollbar ]}
        spaceBetween={-15}
        slidesPerView={3.2}
        
      scrollbar={{ draggable: true}}
        
      >
        <SwiperSlide >
          <div className={style.card}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              delectus veritatis architecto beatae, quam natus?
            </p>
            <Image
              src={"/images/strategist.png"}
              width={100}
              height={25}
              alt="card"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              dicta!
            </p>
            <Image
              src={"/images/oprah_Magazine.png"}
              width={100}
              height={30}
              alt="card"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus dicta placeat mollitia.
            </p>
            <Image
              src={"/images/Good_Housekeeping.png"}
              width={100}
              height={28}
              alt="card"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.card}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              cum accusantium consequatur magnam facilis!
            </p>
            <Image
              src={"/images/BP-logo-black.png"}
              width={120}
              height={30}
              alt="card"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
