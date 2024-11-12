import React from "react";
import style from "./page.module.css";
import Button from "../Button/page";
import Image from "next/image";

export default function Heropage() {
  return (
    <>
      <div className={style.heroContainer}>
        <div className={style.heroText } data-aos="flip-left"
        data-aos-duration="1000">
          <p>Drink briliantly</p>
          <h1>Bet your bottle</h1>
          <h1>can't do this</h1>
          <p>
            Discover the science of PureVis™ technology for a germ-free
          </p>{" "}
          <p>and stink-free bottle.</p>
          <div className={style.heroBtn}>
            <Button name="Shop now" />
          </div>
        </div>

        <div className={style.sideImage} data-aos="flip-right"
        data-aos-duration="1000">
          <Image src={"/images/BDOB074A (1).png"} width={200} height={200} />
          <div className={style.sideText}>
            <h4>LARQ Bottle PureVis™</h4>
          </div>
        </div>
      </div>
      <div className={style.mobileContainer}>
        <div className={style.heroText}>
          <p>Drink briliantly</p>
          <h1>Bet your bottle</h1>
          <h1>can't do this</h1>
          <p>
            Discover the science of PureVis™ technology for a germ-free
          </p>{" "}
          <p>and stink-free bottle.</p>
          <div className={style.heroBtn}>
            <Button name="Shop now" />
          </div>
        </div>

        <div className={style.sideImage}>
          <Image src={"/images/BDOB074A (1).png"} width={200} height={200} />
          <div className={style.sideText}>
            <h4>LARQ Bottle PureVis™</h4>
          </div>
        </div>
      </div>
    </>
  );
}
