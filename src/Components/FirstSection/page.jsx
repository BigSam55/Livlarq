import React from "react";
import style from "./page.module.css";
import { MdOutlineStar } from "react-icons/md";
import Button from "../Button/page";
import Image from "next/image";
import { PiDrop } from "react-icons/pi";
import { PiBeerBottle } from "react-icons/pi";
import { PiTreeLight } from "react-icons/pi";
import Swiper from "../Swipper/page";

export default function FirstSection() {
  return (
    <>
      <div className={style.container}  data-aos="fade-up"
     data-aos-duration="1000">
        <div className={style.text}>
          <div className={style.star}>
            <h1>Brilliant</h1>
            <div className={style.Icon}>
              <MdOutlineStar className={style.starIcon} />
              <MdOutlineStar className={style.starIcon} />
              <MdOutlineStar className={style.starIcon} />
              <MdOutlineStar className={style.starIcon} />
              <MdOutlineStar className={style.starIcon} />
            </div>
            <p>based on 11315 reviews</p>
          </div>
          <Button name="All reviews" />
        </div>
      </div>

      <div className={style.cardContainer}  data-aos="fade-up"
     data-aos-duration="1000">
        <Swiper />
      </div>

      <div className={style.shop}>
        <h1>Shop</h1>
        <div className={style.shopItem}  data-aos="fade-up"
     data-aos-duration="1000">
          <div className={style.item}>
            <div className={style.itemImage}>
              <Image
                src={"/images/purification-big.jpg"}
                width={380}
                height={480}
                alt="purification"
              />
            </div>

            <div>
              <h2>Purification</h2>
              <p>Shop now</p>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.itemImage}>
              <Image
                src={"/images/home-big.jpg"}
                width={380}
                height={480}
                alt="home"
              />
            </div>
            <div>
              <h2>Home</h2>
              <p>Shop now</p>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.itemImage}>
              <Image
                src={"/images/drinkware-big-us.jpg"}
                width={380}
                height={480}
                alt="drinkware"
              />
            </div>

            <div>
              <h2>Drinkware</h2>
              <p>Shop now</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.fact}>
        <div className={style.content}  data-aos="fade-up"
     data-aos-duration="1000">
          <div className={style.contentdiv}>
            <div>
              <PiBeerBottle className={style.Cicon} />
            </div>
            <h2>Say yes to refills</h2>
            <p>
              Save money and make single-use water bottles a thing of the past.
            </p>
          </div>

          <div className={style.contentdiv}>
            <div>
              <PiDrop className={style.Cicon} />
            </div>

            <h2>A smart way to sip</h2>
            <p>
              PureVis™ and Nano Zero technology improves water quality for a
              brilliant hydration experience on the go.
            </p>
          </div>

          <div className={style.contentdiv}>
            <div>
              <PiTreeLight className={style.Cicon} />
            </div>

            <h2>Hydrate with purpose</h2>
            <p>
              A portion of proceeds supports environmental and clean water
              projects worldwide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
