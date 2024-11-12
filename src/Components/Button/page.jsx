import React from 'react'
import style from './page.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Button(props) {
  return (
    <>
    <div >
        <button className={style.Btn}>
           {props.name} <IoIosArrowRoundForward className={style.arrow}/>
        </button>
      
    </div>
    </>
    
  )
}
