import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { verifyToken } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/productActions';
import 'react-toastify/dist/ReactToastify.css'; 
import './index.css'; 
import Header from './layout/Header';
import Footer from './layout/Footer';
import PageContent from './layout/PageContent';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import TeamPage from './pages/TeamPage';
import AboutUs from './pages/AboutUs';
import Signup from './pages/Signup';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProtectedRoute from './components/ProtectedRoute';
import CreateOrderPage from './pages/CreateOrderPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(verifyToken());
    
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="text-[#252B42] antialiased">
      
      
      <Header />
      
      <PageContent>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          
          
          <Route path="/shop" exact>
            <ShopPage />
          </Route>

          
          <Route path="/shop/:gender/:categoryName/:categoryId" exact>
            <ShopPage />
          </Route>

          
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" exact>
            <ProductDetail />
          </Route>

          
          <Route path="/cart" exact>
            <ShoppingCartPage />
          </Route>

          
          <ProtectedRoute path="/order" exact>
            <CreateOrderPage />
          </ProtectedRoute>

          
          <ProtectedRoute path="/previous-orders" exact>
            <PreviousOrdersPage />
          </ProtectedRoute>

         
          <Route path="/product/:productId" exact>
            <ProductDetail />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <Route path="/team" exact>
            <TeamPage />
          </Route>

          <Route path="/about" exact>
            <AboutUs />
          </Route>

          <Route path="/signup" exact>
            <Signup />
          </Route>
          
          <Route path="/login" exact>
            <Login />
          </Route>

        </Switch>
      </PageContent>

      
      <Footer />

      
      <ToastContainer 
        position="bottom-right" 
        theme="colored"
        autoClose={3000}
      />
      
    </div>
  );
}

export default App;