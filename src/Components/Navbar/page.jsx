import React from 'react'
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import styles from './page.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import Button from '../Button/page';
import { IoIosArrowRoundForward } from "react-icons/io";


 

export default function Navbar() {
  return (
    <>
    
    {/* <div className={styles.topNav}>
          <p>Take $20, give $20 is on now!    Details at checkout.</p>
          <button className={styles.topBtn}>LEARN MORE</button>
    </div> */}

    <div className={styles.nav}>
      
        <div className={styles.navContent} >
        <GiHamburgerMenu className={styles.hamburger}/>
        <MdCancel className={styles.cancel}/>
          <div className={styles.navLink}>

            <ul>
              
              <li className='shop'>SHOP ALL
              <div className='shopAll'  >
          <div className={styles.cardData} >
            <div className={styles.cardBtn}>
            <Button name='Explore all'/>
            <button className='blueBtn'> Gift sets <IoIosArrowRoundForward className='arrow'/></button>
            </div>
            <div className="text">
              <p>Filters & Accessories</p>
              <p>Corporate giftings</p>

              <h6>LEARN MORE</h6>
              <p>PureVis™ technology</p>
              <p>Nano Zero technology</p>
            </div>
          </div>
            <div className="image">
              <div className="showAll-first-img">
                <div className="writting">
                  <h4>Purification</h4>
                  <p>Filter or purify water on the go.</p>
                </div>
              </div>
              <div className="showAll-second-img">
                <div className="writting">
                  <h4>Home</h4>
                  <p>Equipe your home with Nano Zero filtration</p>
                </div>
              </div>
              <div className="showAll-third-img">
                <div className="writting">
                  <h4>Drinkware</h4>
                  <p>Hydrate effortlessly on the go.</p>
                </div>
              </div>
            </div>
        </div>
              </li>

              <li className='puri'>PURIFICATION
              <div className='purify'>
          <div className={styles.cardData}>
            <div className={styles.cardBtn}>
            <Button name='Explore Purification'/>
            <button className='blueBtn'> Gift sets <IoIosArrowRoundForward className='arrow'/></button>
            </div>
            <div className="text">
              <p>Filters & Accessories</p>
              <p>Corporate giftings</p>

              <h6>LEARN MORE</h6>
              <p>PureVis™ technology</p>
              <p>Nano Zero technology</p>
            </div>
          </div>
            <div className="image">
              <div className="purify-first-img">
                <div className="pwritting">
                  <h4>LARQ Bottle PureVis™</h4>
                  <p>From $99</p>
                </div>
              </div>
              <div className="purify-second-img">
                <div className="pwritting">
                  <h4>LARQ Bottle Movement PureVis™</h4>
                  <p>From $89</p>
                </div>
              </div>
              <div className="purify-third-img">
                <div className="pwritting">
                  <h4>LARQ Bottle Filtered</h4>
                  <p>From $49.95</p>
                </div>
              </div>
            </div>
        </div>

              </li>
              <li className='house'>HOME
              <div className='home'>
          <div className={styles.cardData}>
            <div className={styles.cardBtn}>
            <Button name='Explore Home'/>
            <button className='blueBtn'> Gift sets <IoIosArrowRoundForward className='arrow'/></button>
            </div>
            <div className="text">
              <p>Filters & Accessories</p>
              <p>Corporate giftings</p>

              <h6>LEARN MORE</h6>
              <p>PureVis™ technology</p>
              <p>Nano Zero technology</p>
            </div>
          </div>
            <div className="image">
              <div className="home-first-img">
                <div className="pwritting">
                  <h4>LARQ Pitcher PureVis™</h4>
                  <p>From $139</p>
                </div>
              </div>
              <div className="home-second-img">
                <div className="pwritting">
                  <h4>LARQ Pitcher</h4>
                  <p>From $79</p>
                </div>
              </div>
              
            </div>

        </div>
              </li>
              <li className='drink'>DRINK WARE
              <div className='drinkware'>
          <div className={styles.cardData}>
            <div className={styles.cardBtn}>
            <Button name='Explore Drinkware'/>
            <button className='blueBtn'> Gift sets <IoIosArrowRoundForward className='arrow'/></button>
            </div>
            <div className="text">
              <p>Filters & Accessories</p>
              <p>Corporate giftings</p>

              <h6>LEARN MORE</h6>
              <p>PureVis™ technology</p>
              <p>Nano Zero technology</p>
            </div>
          </div>
            <div className="image">
              <div className="drinkware-first-img">
                <div className="pwritting">
                  <h4>LARQ Bottles Swig Top </h4>
                  <p>From $39.95</p>
                </div>
              </div>
              <div className="drinkware-second-img">
                <div className="pwritting">
                  <h4>LARQ Bottles Flip Top</h4>
                  <p>$38.95</p>
                </div>
              </div>
              <div className="drinkware-third-img">
                <div className="pwritting">
                  <h4>LARQ Bottles Twist Top</h4>
                  <p>$29.95</p>
                </div>
              </div>
            </div>

        </div></li>
            </ul>

          </div>

          <div className={styles.navLogo}>
            <Image src = {'/images/logo.jpeg'} width={120} height={33} alt='logo'/>
          </div>

          <div className={styles.navLink}>
            <ul>
              <li>TECHNOLOGY</li>
              <li>FAQ</li>
            </ul>
          </div>

            <FaRegUser className={styles.userIcon}/>
           <MdOutlineShoppingCart className={styles.cart} />

        </div>
        
    </div>
    </>
  )
}
