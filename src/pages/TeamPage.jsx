import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpg';
import team8 from '../assets/team8.jpg';
import team9 from '../assets/team9.jpg';
import team10 from '../assets/team10.jpg';
import team11 from '../assets/team11.jpg';
import team12 from '../assets/team12.jpg';

const teamMembers = [
  
  { id: 6, name: "Dilay Demirbaş", role: "Full Stack Developer", img: team6 },
  { id: 7, name: "Leyla Aydın", role: "Mobile Developer", img: team7 },
  { id: 8, name: "Derya Güneş", role: "QA Engineer", img: team8 },
  { id: 9, name: "Okan Tekin", role: "Data Scientist", img: team9 },
  { id: 10, name: "Buse Korkmaz", role: "Content Creator", img: team10 },
  { id: 11, name: "Selin Aras", role: "DevOps Engineer", img: team11 },
  { id: 12, name: "Işıl Bulut", role: "HR Manager", img: team12 },
  { id: 13, name: "Buse Aydın", role: "Mobile Developer", img: team7 },
  { id: 14, name: "Toprak Güneş", role: "QA Engineer", img: team8 },


];

const TeamPage = () => {
  return (
    <div className="w-full font-montserrat bg-white">
      
      
      <section className="container mx-auto px-10 py-16 text-center">
        <h5 className="text-[#737373] font-bold text-base mb-4 uppercase tracking-[0.1px]">WHAT WE DO</h5>
        <h2 className="text-[#252B42] text-[40px] lg:text-[58px] font-bold mb-4">Innovation tailored for you</h2>
        <div className="flex items-center justify-center gap-4 mt-4 font-bold">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#737373] text-2xl font-light">{">"}</span>
          <span className="text-[#737373]">Team</span>
        </div>
      </section>

      
      <section className="container mx-auto px-4 lg:px-10 mb-16">
        <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[630px]">
          
          <div className="w-full lg:w-1/2 h-[450px] lg:h-full">
            <img src={team1} alt="Team hero" className="w-full h-full object-cover" />
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 h-[650px] lg:h-full ">
            <img src={team2} alt="Team 2" className="w-full h-full object-cover" />
            <img src={team3} alt="Team 3" className="w-full h-full object-cover" />
            <img src={team4} alt="Team 4" className="w-full h-full object-cover" />
            <img src={team5} alt="Team 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      
<section className="container mx-auto px-10 py-16 text-center">
  <h2 className="text-[#252B42] text-[40px] font-bold mb-20 mt-1">Meet Our Team</h2>
  
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
    {teamMembers.map((member) => (
      <div key={member.id} className="flex flex-col items-center">
        <div className="w-full max-w-[316px] h-[231px] mb-6 overflow-hidden">
          <img 
            src={member.img} 
            alt={member.name} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <h5 className="text-[#252B42] font-bold text-base mb-2">{member.name}</h5>
        <h6 className="text-[#737373] font-bold text-sm mb-4">{member.role}</h6>
        
        
        <div className="flex gap-4 text-[#23A6F0]">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="cursor-pointer hover:text-[#252B42] transition-colors" size={24} fill="currentColor" stroke="none" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="cursor-pointer hover:text-[#252B42] transition-colors" size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="cursor-pointer hover:text-[#252B42] transition-colors" size={24} fill="currentColor" stroke="none" />
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      
    <section className="container mx-auto px-10 py-24 text-center">
      <h2 className="text-[#252B42] text-[55px] font-bold mb-6">Start your 14 days free trial</h2>
      <p className="text-[#737373] text-xl max-w-[450px] mx-auto mb-8">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
      </p>
      
      
      <Link to="/signup">
        <button className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold text-sm hover:bg-[#1b85c1] transition-all mb-10 cursor-pointer active:scale-95">
          Try it free now
        </button>
      </Link>

      <div className="flex justify-center gap-8 text-[#23A6F0]">
        
        <Twitter size={30} fill="currentColor" stroke="none" className="cursor-pointer hover:scale-110 transition-transform" />
        <Facebook size={30} fill="currentColor" stroke="none" className="cursor-pointer hover:scale-110 transition-transform" />
        <Instagram size={30} className="cursor-pointer hover:scale-110 transition-transform" />
        <Linkedin size={30} fill="currentColor" stroke="none" className="cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </section>

    </div>
  );
};

export default TeamPage;