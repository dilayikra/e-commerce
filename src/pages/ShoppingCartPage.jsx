import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Trash2, Plus, Minus, ChevronRight } from 'lucide-react';
import { Link, useHistory } from 'react-router-dom'; 

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const history = useHistory(); 
  const cart = useSelector((state) => state.shoppingCart.cart);

  
  const updateCount = (productId, newCount) => {
    if (newCount < 1) return;
    dispatch({ type: "UPDATE_CART_ITEM_COUNT", payload: { productId, count: newCount } });
  };

  
  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  
  const toggleCheck = (productId) => {
    dispatch({ type: "TOGGLE_CART_ITEM_CHECK", payload: productId });
  };

  
  const totalAmount = cart
    .filter(item => item.checked)
    .reduce((total, item) => total + (item.count * item.product.price), 0);

  
  const shippingFee = totalAmount > 0 ? 29.99 : 0;
  const isFreeShipping = totalAmount > 150;
  const finalTotal = isFreeShipping ? totalAmount : (totalAmount + shippingFee);

  
  const handleCheckout = () => {
    history.push("/order");
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-montserrat py-10 px-4 lg:px-20">
      <h1 className="text-2xl font-bold text-[#252B42] mb-8">Alışveriş Sepetim</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Ürün Listesi*/}
        <div className="flex-[2] flex flex-col gap-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.product.id} className="bg-white p-4 rounded-lg shadow-sm border border-[#ECECEC] flex items-center gap-4">
                <input 
                  type="checkbox" 
                  checked={item.checked} 
                  onChange={() => toggleCheck(item.product.id)}
                  className="w-5 h-5 accent-[#23A6F0] cursor-pointer"
                />
                
                <img 
                  src={item.product.images[0]?.url} 
                  alt={item.product.name} 
                  className="w-20 h-28 object-cover rounded-md"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-[#252B42] text-sm lg:text-base">{item.product.name}</h3>
                  <p className="text-[#737373] text-xs mt-1 line-clamp-2">{item.product.description}</p>
                  <p className="text-[#23A6F0] font-bold mt-2">{item.product.price} TL</p>
                </div>

                <div className="flex items-center border border-[#ECECEC] rounded-md overflow-hidden bg-gray-50">
                  <button onClick={() => updateCount(item.product.id, item.count - 1)} className="p-2 hover:bg-gray-200"><Minus size={16} /></button>
                  <span className="px-4 font-bold text-sm">{item.count}</span>
                  <button onClick={() => updateCount(item.product.id, item.count + 1)} className="p-2 hover:bg-gray-200"><Plus size={16} /></button>
                </div>

                <button onClick={() => removeItem(item.product.id)} className="text-[#737373] hover:text-red-500 ml-4">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          ) : (
            <div className="bg-white p-10 rounded-lg text-center border border-dashed border-gray-300">
              <p className="text-[#737373]">Sepetin şu an boş kanka, alışverişe devam et!</p>
              <Link to="/shop" className="text-[#23A6F0] font-bold mt-4 inline-block underline">Mağazaya Git</Link>
            </div>
          )}
        </div>

        
        <div className="flex-1">
          <div className="flex flex-col gap-4 sticky top-24">
            
            
            <button 
              onClick={handleCheckout}
              disabled={totalAmount === 0}
              className={`w-full text-white font-bold py-3 rounded-md transition-all flex items-center justify-center gap-2 text-lg shadow-sm ${
                totalAmount === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8A00] hover:bg-[#e67c00]"
              }`}
            >
              Sepeti Onayla <ChevronRight size={20} />
            </button>

            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#ECECEC]">
              <h2 className="text-xl font-medium text-[#252B42] mb-6">Sipariş Özeti</h2>
              
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between text-[#737373]">
                  <span>Ürünün Toplamı</span>
                  <span className="font-bold text-[#252B42]">{totalAmount.toFixed(2)} TL</span>
                </div>
                <div className="flex justify-between text-[#737373]">
                  <span>Kargo Toplam</span>
                  <span className="font-bold text-[#252B42]">{shippingFee.toFixed(2)} TL</span>
                </div>
                {isFreeShipping && (
                  <div className="flex justify-between text-[#FF8A00] font-medium italic">
                    <span>150 TL Üzeri Kargo Bedava</span>
                    <span>-{shippingFee.toFixed(2)} TL</span>
                  </div>
                )}
                <hr className="border-[#ECECEC]" />
                <div className="flex justify-between text-lg font-bold text-[#252B42]">
                  <span>Toplam</span>
                  <span className="text-[#FF8A00] text-xl">
                    {finalTotal.toFixed(2)} TL
                  </span>
                </div>
              </div>
            </div>

            
            <button className="w-full bg-white border border-[#ECECEC] text-[#737373] py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-all shadow-sm font-bold text-xs">
              <Plus size={18} className="text-[#FF8A00]" /> İNDİRİM KODU GİR
            </button>

            
            <button 
              onClick={handleCheckout}
              disabled={totalAmount === 0}
              className={`w-full text-white font-bold py-3 rounded-md transition-all flex items-center justify-center gap-2 text-lg shadow-sm ${
                totalAmount === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-[#FF8A00] hover:bg-[#e67c00]"
              }`}
            >
              Sepeti Onayla <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default ShoppingCartPage;