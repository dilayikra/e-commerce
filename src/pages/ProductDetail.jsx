import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Heart, ShoppingCart, Eye, ChevronLeft } from 'lucide-react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../store/actions/productActions';
import { addToCart } from '../store/actions/shoppingCartActions';
import { toast } from 'react-toastify';
import Clients from '../components/Clients';
import quickfox from '../assets/quickfox.jpg';
import bestseller1 from '../assets/bestseller1.jpg';
import bestseller2 from '../assets/bestseller2.jpg';
import bestseller3 from '../assets/bestseller3.jpg';
import bestseller4 from '../assets/bestseller4.jpg';
import bestseller5 from '../assets/bestseller5.jpg';
import bestseller6 from '../assets/bestseller6.jpg';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  
  const { product, fetchState } = useSelector(state => state.product);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductDetail(productId));
    }
    window.scrollTo(0, 0); 
  }, [dispatch, productId]);

  
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(`${product.name} sepete eklendi!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  
  if (fetchState === 'FETCHING') {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#23A6F0]"></div>
        <p className="text-[#252B42] font-bold animate-pulse">Loading Product Details...</p>
      </div>
    );
  }

  
  const displayImages = product?.images?.length > 0 
    ? product.images.map(img => img.url) 
    : [quickfox];

  const bestsellerProducts = [
    { id: 1, img: bestseller1, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 2, img: bestseller2, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 3, img: bestseller3, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 4, img: bestseller4, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 5, img: bestseller5, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 6, img: bestseller6, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 7, img: bestseller1, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
    { id: 8, img: bestseller2, title: 'Graphic Design', dept: 'English Department', price: '$16.48', sale: '$6.48' },
  ];

  return (
    <div className="w-full font-montserrat bg-white lg:bg-[#FAFAFA]">
      
      
      <div className="bg-[#FAFAFA] py-8 lg:py-10">
        <div className="container mx-auto px-10 flex flex-col lg:flex-row justify-between items-center gap-6 max-w-[1440px]">
          <div className="flex items-center gap-4 text-sm font-bold lg:text-base">
            <button 
              onClick={() => history.goBack()} 
              className="text-[#23A6F0] hover:underline flex items-center gap-1 transition-all"
            >
              <ChevronLeft size={20} /> Back
            </button>
            <span className="text-[#BDBDBD]">/</span>
            <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">Home</Link>
            <ChevronRight className="text-[#BDBDBD] w-5 h-5" />
            <span className="text-[#BDBDBD]">Shop</span>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-8 max-w-[1440px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] lg:aspect-[8/7] bg-white overflow-hidden shadow-sm rounded-sm">
              <img 
                src={displayImages[currentIndex]} 
                className="w-full h-full object-cover transition-all duration-500" 
                alt={product?.name}
              />
              {displayImages.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentIndex(prev => prev === 0 ? displayImages.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/10 hover:bg-black/30 p-2 rounded-full transition-all"
                  >
                    <ChevronLeft size={40} strokeWidth={1.5} />
                  </button>
                  <button 
                    onClick={() => setCurrentIndex(prev => prev === displayImages.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/10 hover:bg-black/30 p-2 rounded-full transition-all"
                  >
                    <ChevronRight size={40} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>
            
            <div className="flex gap-3 mt-5 overflow-x-auto pb-2">
              {displayImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`min-w-[96px] h-24 lg:min-w-[128px] lg:h-32 cursor-pointer transition-all ${currentIndex === idx ? 'border-2 border-[#23A6F0] scale-95' : 'opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover shadow-sm" alt="thumb" />
                </div>
              ))}
            </div>
          </div>

         
          <div className="flex-1 pt-4 pb-10 lg:px-6">
            <h4 className="text-[#252B42] text-[30px] lg:text-[40px] font-normal mb-4">{product?.name}</h4>
            
            <div className="flex items-center gap-2 mb-5">
              <div className="flex text-[#F3CD03] gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star 
                    key={i} 
                    fill={i <= Math.round(product?.rating || 0) ? "currentColor" : "none"} 
                    size={20} 
                  />
                ))}
              </div>
              <span className="text-[#737373] font-bold text-sm lg:text-base">{product?.sell_count} Reviews</span>
            </div>

            <div className="mb-4">
              <h3 className="text-[#252B42] text-2xl lg:text-4xl font-bold mb-2">${product?.price}</h3>
              <p className="text-sm lg:text-base font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className={`${product?.stock > 0 ? 'text-[#23A6F0]' : 'text-red-500'} ml-2`}>
                  {product?.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
            </div>

            <p className="text-[#858585] text-lg lg:text-[20px] leading-relaxed mb-6 max-w-[600px] mt-8">
              {product?.description}
            </p>

            <div className="w-full h-[1px] bg-[#BDBDBD] mb-8 lg:mt-12" />

            <div className="flex gap-3 mb-12">
              {['#23A6F0', '#2DC071', '#E77C40', '#252B42'].map(color => (
                <div key={color} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform shadow-sm"></div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={handleAddToCart}
                className="bg-[#23A6F0] text-white px-6 py-3 lg:px-10 lg:py-4 rounded-md font-bold text-sm lg:text-base hover:shadow-lg transition-all whitespace-nowrap active:scale-95"
              >
                Add to Cart
              </button>
              <div className="flex gap-4 lg:gap-6">
                <button className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-[#E8E8E8] rounded-full bg-white hover:bg-[#F3F3F3] transition-colors shadow-sm">
                  <Heart size={20} />
                </button>
                <button 
                  onClick={handleAddToCart}
                  className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-[#E8E8E8] rounded-full bg-white hover:bg-[#23A6F0] hover:text-white transition-colors shadow-sm"
                >
                  <ShoppingCart size={20} />
                </button>
                <button className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-[#E8E8E8] rounded-full bg-white hover:bg-[#F3F3F3] transition-colors shadow-sm">
                  <Eye size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-b border-[#ECECEC] mt-16">
        <div className="container mx-auto px-6 flex justify-center gap-8 lg:gap-22 text-sm lg:text-xl font-bold text-[#737373] pb-6">
          <button 
            onClick={() => setActiveTab('description')}
            className={`hover:text-[#23A6F0] ${activeTab === 'description' ? 'text-[#252B42] underline decoration-2 underline-offset-8' : ''}`}
          >
            Description
          </button>
          <button className="hover:text-[#23A6F0]">Additional Information</button>
          <button className="hover:text-[#23A6F0]">Reviews ({product?.sell_count || 0})</button>
        </div>
      </div>

      
      <div className="container mx-auto px-8 py-12 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr_1fr] gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg lg:h-[450px]">
              <img src={displayImages[0]} alt="Interior" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-[#252B42] text-2xl font-bold mb-6">Product Description</h3>
            <div className="space-y-6 text-[#737373] text-base leading-7">
              <p>{product?.description}</p>
              <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.</p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-[#252B42] text-2xl font-bold mb-6">Features</h3>
              <ul className="space-y-4">
                {['The quick fox jumps over', 'The quick fox jumps over', 'The quick fox jumps over'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#737373] text-sm font-bold">
                    <ChevronRight className="w-4 h-4 text-[#23A6F0]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-[#FAFAFA] py-16">
        <div className="container mx-auto px-8 max-w-[1500px]">
          <h3 className="text-[#252B42] text-2xl font-bold mb-8 uppercase">BESTSELLER PRODUCTS</h3>
          <hr className="mb-10 border-[#ECECEC]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {bestsellerProducts.map((p) => (
              <div key={p.id} className="bg-white flex flex-col group cursor-pointer hover:shadow-md transition-all">
                <div className="w-full aspect-[3/4] overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title} />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h5 className="text-[#252B42] font-bold">{p.title}</h5>
                  <p className="text-[#737373] text-sm font-bold">{p.dept}</p>
                  <div className="flex gap-2 font-bold">
                    <span className="text-[#BDBDBD]">{p.price}</span>
                    <span className="text-[#23856D]">{p.sale}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="py-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 max-w-[1440px]">
          <Clients />
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;