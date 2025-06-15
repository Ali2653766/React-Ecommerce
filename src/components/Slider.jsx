import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link  } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <>

        <div className="hero">
            <div className="container">
                <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
                    <SwiperSlide>
                        <div className="content">
                            <h4>Intoducing the new</h4>
                            <h3>Microsoft Xbox<br/> 360 Controller</h3>
                            <p>Windows Xp/10/7/8</p>
                            <Link to='/' className='btn' >Shop Now</Link>
                        </div>
                        <img src="/src/img/banner_Hero1.jpg" alt="slider hero 1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <h4>Intoducing the new</h4>
                            <h3>Microsoft Xbox</h3>
                            <p>Windows Xp/10/7/8</p>
                            <Link to='/' className='btn' >Shop Now</Link>
                        </div>
                        <img src="/src/img/banner_Hero2.jpg" alt="slider hero 1" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="content">
                            <h4>Intoducing the new</h4>
                            <h3>Microsoft Xbox</h3>
                            <p>Windows Xp/10/7/8</p>
                            <Link to='/' className='btn' >Shop Now</Link>
                        </div>
                        <img src="/src/img/banner_Hero3.jpg" alt="slider hero 1" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        
    </>
    
  )
}

export default Slider
