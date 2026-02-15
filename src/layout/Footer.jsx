import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white w-full flex flex-col items-center">
      
      {/* Logolar*/}
      
      <div className="w-full max-w-[414px] lg:max-w-[1050px] px-10 py-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
        <h3 className="text-[#252B42] text-2xl font-bold">Bandage</h3>
        
        <div className="flex gap-5 text-[#23A6F0] text-2xl">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
        </div>
      </div>

      <hr className="w-full border-[#E6E6E6]" />

      
      <div className="w-full max-w-[414px] lg:max-w-[1050px] px-10 py-12 flex flex-col lg:flex-row lg:justify-between gap-10">
        
        
        <div className="flex flex-col gap-5 min-w-[148px]">
          <h5 className="text-[#252B42] text-base font-bold">Company Info</h5>
          <nav className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </nav>
        </div>

        
        <div className="flex flex-col gap-5 min-w-[148px]">
          <h5 className="text-[#252B42] text-base font-bold">Legal</h5>
          <nav className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">About Us</a>
            <a href="#">Carrier</a>
            <a href="#">We are hiring</a>
            <a href="#">Blog</a>
          </nav>
        </div>

        
        <div className="flex flex-col gap-5 min-w-[148px]">
          <h5 className="text-[#252B42] text-base font-bold">Features</h5>
          <nav className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">Business Marketing</a>
            <a href="#">User Analytic</a>
            <a href="#">Live Chat</a>
            <a href="#">Unlimited Support</a>
          </nav>
        </div>

        
        <div className="flex flex-col gap-5 min-w-[148px]">
          <h5 className="text-[#252B42] text-base font-bold">Resources</h5>
          <nav className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">IOS & Android</a>
            <a href="#">Watch a Demo</a>
            <a href="#">Customers</a>
            <a href="#">API</a>
          </nav>
        </div>

        
        <div className="flex flex-col gap-5 lg:w-[320px]">
          <h5 className="text-[#252B42] text-base font-bold">Get In Touch</h5>
          <div className="flex flex-col gap-2">
            <div className="flex h-14">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-[5px] px-5 w-full text-sm outline-none text-[#737373]"
              />
              <Link to="/signup" className="flex">
  <button className="bg-[#23A6F0] text-white text-sm px-4 py-4 rounded-r-[5px] hover:bg-[#1a8cd8] transition-colors cursor-pointer active:scale-95 whitespace-nowrap">
    Subscribe
  </button>
</Link>
            </div>
            <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
          </div>
        </div>

      </div>

      
      <div className="w-full bg-[#FAFAFA] py-6 px-10">
        <div className="w-full max-w-[414px] lg:max-w-[1050px] mx-auto text-center lg:text-left">
          <p className="text-[#737373] text-sm font-bold leading-6">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;