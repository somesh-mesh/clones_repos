import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="Hero Banner" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt='Hero Title' className='caption-img' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sequi nemo ducimus laudantium doloremque quae. Blanditiis, suscipit. Alias quibusdam repellendus soluta error, odit ullam culpa commodi facilis, ad dolore illo?
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button  className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
     <div className="more-cards">
     <TitleCards title={"Blocbuster Movies"}/>
     <TitleCards title={"Only on Netflix"}/>
     <TitleCards title={"Upcoming"}/>
     <TitleCards title={"Top Pics for you"}/>
     </div>
     <Footer/>
    </div>
  )
}

export default Home 
