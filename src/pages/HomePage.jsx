import React from 'react';
import HomeSlider from '../components/HomeSlider.jsx'; 
import Clients from '../components/Clients.jsx';
import ShopCards from '../components/ShopCards.jsx';
import ProductCard from '../components/ProductCard.jsx';
import FeaturedProducts from '../components/FeaturedProducts';
import Blog from '../components/Blog';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';

const HomePage = () => {
  return (
    <div className="w-full font-['Montserrat']">
      <HomeSlider />
      <Clients />
      <ShopCards />
      <ProductCard />

      
<section className="py-20 px-14 flex flex-col items-start w-full lg:flex-row-reverse lg:justify-center lg:gap-40 lg:max-w-[1300px] lg:mx-auto lg:px-0">
  
  
  <div className="flex flex-col items-start text-left gap-6 mb-16 w-full lg:w-[550px] lg:mb-0 lg:gap-10">
    <h5 className="text-[#23A6F0] font-bold text-base lg:text-xl tracking-[0.1px]">
      Featured Products
    </h5>
    
    
    <h2 className="text-[#252B42] text-[40px] leading-[50px] font-bold tracking-[0.2px] lg:text-[52.5px] lg:leading-[80px]">
      <span className="block lg:inline">We love</span> 
      <span className="block lg:inline">what we do</span>
    </h2>
    
    
    <div className="text-[#737373] text-sm leading-[20px] tracking-[0.2px] flex flex-col gap-4

            lg:text-[23px] lg:leading-[32px]">
      <p>
        Problems trying to resolve the conflict between the two major realms of Classical physics: <br />
        Newtonian mechanics 
      </p>
      <p>
        Problems trying to resolve the conflict between the two major realms of Classical physics: <br />
        Newtonian mechanics 
      </p>
    </div>
  </div>

  
  <div className="flex flex-row gap-4 w-full h-[500px] lg:w-[700px] lg:h-[600px]">
    <div className="flex-1 overflow-hidden rounded-lg">
      <img 
        src={image10} 
        alt="Model 1" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 overflow-hidden rounded-lg">
      <img 
        src={image9} 
        alt="Model 2" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  
</section>

      <FeaturedProducts />
      <Blog />
    </div>
  );
};

export default HomePage;