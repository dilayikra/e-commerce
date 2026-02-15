import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'; 
import heroImg from '../assets/technology-1.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeSlider = () => {
  return (
    <section className="w-full pb-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full"
      >
        
        <SwiperSlide className="py-5">
          <div className="px-10 py-25 flex flex-col items-center text-center bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-[20px] mx-4 relative overflow-hidden lg:overflow-visible lg:mx-30 lg:py-80 lg:flex-row lg:text-left lg:items-center lg:h-[750px]">
            
            <div className="flex flex-col items-center lg:items-start lg:max-w-[420px] lg:ml-50 z-20">
              <h5 className="text-[#23A6F0] font-bold text-base mb-4 uppercase tracking-widest lg:text-xl relative lg:-top-10">Summer 2020</h5>
              <h1 className="text-[#252B42] font-bold uppercase mb-6">
                <span className="block lg:inline lg:text-8xl text-4xl">New</span>
                <span className="block lg:inline lg:text-8xl text-4xl lg:ml-3">Collection</span>
              </h1>
              <h4 className="text-[#737373] text-xl mb-8 lg:text-[23px] lg:max-w-[560px] lg:leading-[1.3] relative lg:top-6">
                We know how large objects will act, but things on a small scale.
              </h4>
              
              
              <Link to="/shop">
                <button className="bg-[#23A6F0] text-white font-bold py-4 px-10 rounded-md uppercase cursor-pointer hover:bg-blue-600 active:scale-95 transition-all relative lg:top-15 lg:py-6 lg:px-16 lg:text-xl">
                  Shop Now
                </button>
              </Link>
            </div>

            
            <div className="mt-8 w-full flex justify-center relative">
              <div className="absolute top-[70%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white rounded-full opacity-70 z-0 lg:w-[700px] lg:h-[650px] lg:top-[-90px] lg:left-[1230px]"></div>
              
              <div className="absolute top-25 right-87 w-12 h-12 bg-white rounded-full z-0 lg:w-[100px] lg:h-[100px] lg:top-[-390px] lg:right-auto lg:left-[800px] lg:w-16 lg:h-16"></div> 
              <div className="absolute top-45 left-90 w-4 h-4 bg-[#977DF4] rounded-full z-0 lg:z-[60] lg:w-[20px] lg:h-[20px] lg:top-[80px] lg:right-auto lg:left-[920px]"></div> 
              <div className="absolute bottom-1 left-1 w-3 h-3 bg-[#977DF4] rounded-full z-20 lg:w-[20px] lg:h-[20px] lg:top-[-300px] lg:right-auto lg:left-[1700px]"></div>
              <div className="absolute bottom-20 right-4 w-6 h-6 bg-white rounded-full z-20 lg:z-[60] lg:w-[40px] lg:h-[40px] lg:top-[-140px] lg:right-auto lg:left-[1630px]"></div>

              <img 
                src={heroImg} 
                alt="New Collection" 
                className="z-10 min-w-[145%] h-auto object-contain transform translate-y-40 -translate-x-8 scale-110 lg:absolute lg:min-w-0 lg:w-[1000px] lg:top-[-340px] lg:right-[-150px] lg:translate-y-0 lg:translate-x-0 lg:scale-110"
              />
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide className="py-5">
           <div className="px-10 py-25 flex flex-col items-center text-center bg-gradient-to-r from-[#FFD1FF] to-[#FAE1CB] rounded-[20px] mx-4 relative overflow-hidden lg:overflow-visible lg:mx-30 lg:py-80 lg:flex-row lg:text-left lg:items-center lg:h-[750px]">
              <div className="flex flex-col items-center lg:items-start lg:max-w-[420px] lg:ml-50 z-20">
                <h5 className="text-[#E74040] font-bold text-base mb-4 uppercase tracking-widest lg:text-xl">Winter 2020</h5>
                <h1 className="text-[#252B42] font-bold uppercase mb-6 text-4xl lg:text-8xl">Best Sellers</h1>
                
                
                <Link to="/shop">
                  <button className="bg-[#E74040] text-white font-bold py-4 px-10 rounded-md uppercase cursor-pointer hover:bg-[#c03535] transition-all lg:py-6 lg:px-16 lg:text-xl">
                    Explore More
                  </button>
                </Link>
              </div>
           </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSlider;