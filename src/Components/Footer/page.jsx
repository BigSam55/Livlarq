import React from "react";
import style from "../Footer/page.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.fContainer} data-aos="fade-up" data-aos-duration="1500">
          <div className={style.fContent}>
            <h2>Become an insider</h2>
            <p>
              Receive exclusive offers, </p> <p>hydration news, and more</p>  <p>when you
              subscribe.</p>
           
            <div>
              <input type="email" placeholder="Email address" />{" "}
              <IoIosArrowRoundForward className={style.arrow} />
            </div>
            <div >
              <FaFacebookF className={style.ficons} />
              <IoLogoInstagram className={style.ficons} />
              <IoLogoYoutube className={style.ficons} />
              <FaTwitter className={style.ficons} />
            </div>
          </div>

          <div className={style.faq}>
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>Reviews</Link>
            <Link href={"/"}>Contact</Link>
            <Link href={"/"}>Find a retailer</Link>
            <Link href={"/"}>Corperate gifting </Link>
          </div>
          <div className={style.basq}>
            <Link href={"/"}>basq magazine</Link>
            <Link href={"/"}>Press</Link>
            <Link href={"/"}>Our story</Link>
            <Link href={"/"}>Affiliate program</Link>
            <Link href={"/"}>Ambassador program </Link>
          </div>
          <div className={style.fimage}>
            <Image
              src={"/images/bicycle-animation (1).gif"}
              width={450}
              height={450}
              alt="foot-svg"
            />
          </div>
        </div>

        <div className={style.foot} data-aos="fade-up" data-aos-duration="1000">
          <div className={style.flag}>
            <Image src={'https://res.cloudinary.com/larq/image/upload/v1702649207/v3-images/flags/us.svg'} width={25} height={25} alt="flag"/> <p>United state</p>
          </div>

          <Link href={"/"}>Terms & Privacy</Link>
          <Link href={"/"}>Accessibility</Link>
        </div>
      </div>
    </>
  );
}
