import React from 'react';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image17 from '../assets/image17.jpg';
import image18 from '../assets/image18.jpg';

const Blog = () => {
  const posts = [
    {
      id: 1,
      mobileImage: image11,
      desktopImage: image17,
      tags: ['Google', 'Trending', 'New'],
      title: "Graphic Design",
      mobileTitle: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      rating: "4.9",
      newPrice: "$6.48",
      oldPrice: "$16.48",
      sales: "15 Sales",
      url: "https://www.figma.com/resource-library/what-is-graphic-design/" 
    },
    {
      id: 2,
      mobileImage: image12,
      desktopImage: image18,
      tags: ['Google', 'Trending', 'New'],
      title: "Graphic Design",
      mobileTitle: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
      rating: "4.9",
      newPrice: "$6.48",
      oldPrice: "$16.48",
      sales: "15 Sales",
      url: "https://www.figma.com/resource-library/what-is-graphic-design/" 
    }
  ];

  return (
    <section className="py-20 px-10 flex flex-col items-center bg-white w-full">
      
      {/* Üst Başlık*/}
      <div className="text-center mb-12 flex flex-col gap-2">
        <h6 className="text-[#23A6F0] font-bold text-sm tracking-[0.1px]">
          Practice Advice
        </h6>
        <h2 className="text-[#252B42] text-[40px] font-bold tracking-[0.2px] lg:text-[58px]">
          Featured Posts
        </h2>
      </div>

      {/* Blog Kartları*/}
      <div className="flex flex-col gap-8 w-full max-w-[330px] lg:max-w-[1100px] lg:flex-row lg:justify-center lg:gap-30">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md flex flex-col border border-[#EBEBEB] lg:flex-row lg:border-none lg:shadow-none lg:w-[540px]">
            
            {/* Resim*/}
            <div className="relative w-full h-[300px] lg:w-[240px] lg:h-[480px] overflow-hidden">
              <span className="absolute top-5 left-5 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded-[3px] z-20">
                <span className="lg:hidden">NEW</span>
                <span className="hidden lg:inline">Sale</span>
              </span>
              
              <img src={post.mobileImage} className="w-full h-full object-cover lg:hidden" alt="mobile" />
              <img src={post.desktopImage} className="hidden lg:block w-full h-full object-cover" alt="desktop" />
              
              <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-3 z-30">
                <button type="button" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all group">
                  <span className="text-xl group-hover:scale-110 transition-transform">🤍</span>
                </button>
                <button type="button" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all group">
                  <span className="text-xl group-hover:scale-110 transition-transform">🛒</span>
                </button>
                <button type="button" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#23A6F0] hover:text-white transition-all group">
                  <span className="text-xl group-hover:scale-110 transition-transform">👁️</span>
                </button>
              </div>
            </div>

            {/*Bilgi İçeriği */}
            <div className="p-6 flex flex-col gap-4 lg:justify-center lg:w-[300px] lg:bg-white lg:px-8">
              
              <div className="hidden lg:flex items-center mb-1 flex-nowrap">
                <span className="text-[#23A6F0] font-bold text-[16px] whitespace-nowrap">
                  English Department
                </span>
                <span className="bg-[#252B42] text-white text-[12px] px-3 py-1 rounded-[20px] 
                                 flex items-center gap-1 font-bold ml-auto lg:ml-[24px] whitespace-nowrap">
                  ⭐ {post.rating}
                </span>
              </div>

              <div className="flex gap-4 text-xs text-[#737373] lg:hidden">
                {post.tags.map((tag, index) => (
                  <span key={index} className={index === 0 ? "text-[#8EC2F2]" : ""}>{tag}</span>
                ))}
              </div>

              <h4 className="text-[#252B42] text-xl font-bold leading-[30px] lg:text-[24px]">
                <span className="lg:hidden font-normal">{post.mobileTitle}</span>
                <span className="hidden lg:inline">{post.title}</span>
              </h4>

              <p className="text-[#737373] text-sm leading-[20px] lg:text-[16px] lg:leading-[24px]">
                {post.description}
              </p>

              <div className="hidden lg:flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-2 text-[#737373] font-bold text-[16px]">
                    ⬇️ {post.sales}
                </div>
                <div className="flex gap-3 font-bold text-[20px]">
                  <span className="text-[#BDBDBD] line-through">{post.oldPrice}</span>
                  <span className="text-[#23856D]">{post.newPrice}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-[#23A6F0] cursor-pointer"></div>
                  <div className="w-5 h-5 rounded-full bg-[#23856D] cursor-pointer"></div>
                  <div className="w-5 h-5 rounded-full bg-[#E77C40] cursor-pointer"></div>
                  <div className="w-5 h-5 rounded-full bg-[#252B42] cursor-pointer"></div>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-4 py-4 border-t border-[#F1F1F1] mt-2">
                <div className="flex items-center gap-1 text-[#737373] text-[14px] font-bold">
                  <span className="text-[#23A6F0] text-xl">⏰</span> 22h...
                </div>
                <div className="flex items-center gap-1 text-[#737373] text-[12px] font-bold">
                  <span className="text-[#E77C40] text-xl">📚</span> 64 Lessons
                </div>
                <div className="flex items-center gap-1 text-[#737373] text-[14px] font-bold">
                  <span className="text-[#23856D] text-xl">📈</span> Progress
                </div>
              </div>

              <div className="flex justify-between items-center py-4 text-xs text-[#737373] lg:hidden">
                <div className="flex items-center gap-1"><span>⏰</span> {post.date}</div>
                <div className="flex items-center gap-1"><span>📊</span> {post.comments}</div>
              </div>

              
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 font-bold transition-all duration-300 cursor-pointer w-fit
                  text-[#737373] text-sm hover:text-[#23A6F0]
                  lg:text-[#23A6F0] lg:border-2 lg:border-[#23A6F0] lg:px-6 lg:py-2.5 lg:rounded-full lg:text-[16px] lg:mt-1
                  lg:hover:bg-[#23A6F0] lg:hover:text-white lg:active:scale-95 lg:shadow-sm lg:hover:shadow-md
                "
              >
                Learn More <span className="text-[#23A6F0] lg:group-hover:text-white text-xl">›</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;