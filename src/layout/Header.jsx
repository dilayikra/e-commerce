import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Gravatar from 'react-gravatar';
import { 
  Phone, Mail, Instagram, Youtube, Facebook, Twitter, 
  Search, ShoppingCart, Heart, User, Menu, ChevronDown, Package 
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const user = useSelector(state => state.client.user);
  const categories = useSelector(state => state.product.categories);
  const cart = useSelector(state => state.shoppingCart.cart);
  
  const isLoggedIn = user && user.name;
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  
  const femaleCategories = categories.filter(cat => cat.gender === 'k');
  const maleCategories = categories.filter(cat => cat.gender === 'e');

  return (
    <header className="w-full font-montserrat relative z-50 bg-white">
      
      
      <div className="hidden lg:flex bg-[#252B42] text-white py-3 px-10 justify-between items-center w-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Phone size={16} /> (225) 555-0118
          </div>
          <div className="flex items-center gap-2 text-sm font-bold border-l border-white/20 pl-6">
            <Mail size={16} /> dilay5314@example.com
          </div>
        </div>
        <div className="text-sm font-bold">Follow Us and get a chance to win 80% off</div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold">Follow Us:</span>
          <div className="flex gap-3">
            <Instagram size={16} /><Youtube size={16} /><Facebook size={16} /><Twitter size={16} />
          </div>
        </div>
      </div>

      
      <div className="bg-white w-full border-b border-[#ECECEC] lg:border-none">
        <div className="w-full px-6 lg:px-10 py-6 flex justify-between items-center">
          
          <div className="flex items-center lg:gap-20"> 
            <Link to="/" className="text-2xl font-bold text-[#252B42] shrink-0">Bandage</Link>
            
            <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-[#737373]">
              <Link to="/" className="hover:text-[#252B42]">Home</Link>
              
              
              <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-1">
                  Shop <ChevronDown size={14} />
                </Link>
                
                <div className="absolute hidden group-hover:flex top-full left-0 bg-white shadow-2xl rounded-lg p-6 gap-12 border border-[#ECECEC] min-w-[350px] animate-fadeIn z-[100]">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#252B42] font-extrabold text-base mb-1 border-b pb-1">Kadın</h3>
                    {femaleCategories.map(cat => (
                      <Link 
                        key={cat.id} 
                        to={`/shop/kadin/${cat.title.toLowerCase()}/${cat.id}`}
                        className="font-medium hover:text-[#23A6F0] transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[#252B42] font-extrabold text-base mb-1 border-b pb-1">Erkek</h3>
                    {maleCategories.map(cat => (
                      <Link 
                        key={cat.id} 
                        to={`/shop/erkek/${cat.title.toLowerCase()}/${cat.id}`}
                        className="font-medium hover:text-[#23A6F0] transition-colors"
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className="hover:text-[#252B42]">About</Link>
              <Link to="/team" className="hover:text-[#252B42]">Team</Link> 
              
              <Link to="/contact" className="hover:text-[#252B42]">Contact</Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-8 text-[#23A6F0]">
              {isLoggedIn ? (
                <div className="relative group flex items-center gap-3 font-bold text-sm text-[#252B42] cursor-pointer py-2">
                  <Gravatar email={user.email} size={32} className="rounded-full" />
                  <span className="flex items-center gap-1">{user.name} <ChevronDown size={14} /></span>
                  
                  <div className="absolute hidden group-hover:block top-full right-0 bg-white shadow-xl rounded-lg py-2 border border-[#ECECEC] min-w-[180px] z-[70]">
                    <Link to="/previous-orders" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 text-[#737373] hover:text-[#23A6F0] transition-colors">
                      <Package size={16} /> Siparişlerim
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-500 transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 font-bold text-sm whitespace-nowrap">
                  <User size={18} />
                  <Link to="/login" className="hover:text-[#1a7bb3] transition-colors">Login</Link>
                  <span className="text-[#737373]">/</span>
                  <Link to="/signup" className="hover:text-[#1a7bb3] transition-colors">Register</Link>
                </div>
              )}

              <div className="flex items-center gap-6">
                <Search size={20} className="cursor-pointer" />
                
                
                <div className="relative group flex items-center gap-1 cursor-pointer py-2">
                  <ShoppingCart size={20} /> 
                  <span className="text-xs font-bold">{totalItems}</span>

                  <div className="absolute hidden group-hover:flex top-full right-0 bg-white shadow-2xl rounded-lg p-4 flex-col gap-4 border border-[#ECECEC] min-w-[320px] z-[60] animate-fadeIn">
                    <h3 className="text-[#252B42] font-bold text-sm border-b pb-2">Sepetim ({totalItems} Ürün)</h3>
                    <div className="max-h-[300px] overflow-y-auto flex flex-col gap-3">
                      {cart.length > 0 ? (
                        cart.map((item, idx) => (
                          <div key={idx} className="flex gap-3 border-b border-gray-100 pb-2">
                            <img 
                              src={item.product.images?.[0]?.url || ''} 
                              className="w-12 h-16 object-cover rounded shadow-sm" 
                              alt="cart-item" 
                            />
                            <div className="flex flex-col justify-center flex-1">
                              <p className="text-xs font-bold text-[#252B42] line-clamp-1">{item.product.name}</p>
                              <p className="text-[10px] text-[#737373]">Adet: {item.count}</p>
                              <p className="text-xs font-bold text-[#23A6F0]">{item.product.price} TL</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-[#737373] text-center py-4">Sepetiniz boş</p>
                      )}
                    </div>
                    {cart.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        <Link to="/cart" className="flex-1 text-center bg-white border border-[#23A6F0] text-[#23A6F0] text-[10px] font-bold py-2 rounded-md hover:bg-gray-50 transition-colors">
                          Sepete Git
                        </Link>
                        <Link to="/order" className="flex-1 text-center bg-[#23A6F0] text-white text-[10px] font-bold py-2 rounded-md hover:shadow-md transition-all">
                          Siparişi Tamamla
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 cursor-pointer">
                  <Heart size={20} /> <span className="text-xs font-bold">0</span>
                </div>
              </div>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#252B42]">
              <Menu size={32} />
            </button>
          </div>

        </div>
      </div>

      
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-center bg-white w-full py-8 shadow-inner animate-fadeIn`}>
        <nav className="flex flex-col items-center space-y-5 text-xl font-medium text-[#737373] w-full px-6">
          <Link onClick={() => setIsMenuOpen(false)} to="/" className="hover:text-[#252B42]">Home</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/shop" className="hover:text-[#252B42]">Shop</Link>
          
          <div className="flex flex-col items-center gap-3 w-full py-4 border-y border-gray-100 bg-[#FAFAFA] rounded-xl">
             <span className="font-bold text-xs uppercase tracking-widest text-[#252B42]">Categories</span>
             <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center">
                {categories.slice(0, 8).map(cat => (
                  <Link 
                    key={cat.id} 
                    onClick={() => setIsMenuOpen(false)} 
                    to={`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.title.toLowerCase()}/${cat.id}`}
                    className="text-sm text-[#23A6F0] font-semibold hover:text-[#1a7bb3]"
                  >
                    {cat.title}
                  </Link>
                ))}
             </div>
          </div>

          <Link onClick={() => setIsMenuOpen(false)} to="/about" className="hover:text-[#252B42]">About</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/blog" className="hover:text-[#252B42]">Blog</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="hover:text-[#252B42]">Contact</Link>
          
          {isLoggedIn && (
            <Link onClick={() => setIsMenuOpen(false)} to="/previous-orders" className="text-[#23A6F0] font-bold">My Orders</Link>
          )}
        </nav>
        
        <div className="flex flex-col items-center mt-8 pt-6 border-t border-gray-100 w-full gap-6 text-[#23A6F0]">
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-2">
              <Gravatar email={user.email} size={50} className="rounded-full shadow-md" />
              <span className="text-lg font-bold text-[#252B42]">{user.name}</span>
            </div>
          ) : (
            <Link onClick={() => setIsMenuOpen(false)} to="/login" className="flex items-center gap-2 text-xl font-bold">
              <User size={24} /> Login / Register
            </Link>
          )}

          <div className="flex justify-center gap-10 w-full pb-4">
            <Search size={28} className="cursor-pointer" />
            <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="relative">
              <ShoppingCart size={28} />
              <span className="absolute -top-2 -right-3 bg-[#23A6F0] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">{totalItems}</span>
            </Link>
            <div className="relative">
              <Heart size={28} />
              <span className="absolute -top-2 -right-3 bg-[#23A6F0] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;