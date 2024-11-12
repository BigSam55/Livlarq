import React from 'react'
import Navbar from '@/Components/Navbar/page'
import Heropage from '@/Components/Heropage/page'
import FirstSection from '@/Components/FirstSection/page'
import Mission from '@/Components/Mission/page'
import Magazine from '@/Components/Magazine/page'
import Footer from '@/Components/Footer/page'


export default function Homepage() {
  return (
    <>
    
    <Heropage/>
    <FirstSection/>
    <Mission/>
    <Magazine/>
    <Footer/>
    </>
    
  )
}
