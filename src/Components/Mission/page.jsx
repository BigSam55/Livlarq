import React from "react";
import style from './page.module.css'
import Button from "../Button/page";

export default function Mission() {
  return (
    <div className={style.missionContainer}>
      <div className={style.missionText}  data-aos="fade-up"
     data-aos-duration="1000">
        <p>Our mission</p>
        <h1>Drink briliantly</h1>
        <p>
          We make it easy to opt for the healthier and more </p> <p>sustainable
          hydration choice, anytime and anywhere.
        </p>
        <div className={style.missionBtn}>
          <Button name="Learn more" />
        </div>
      </div>
    </div>
  );
}
