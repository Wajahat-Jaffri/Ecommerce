
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/Dashboard";
import AdminProducts from "./pages/admin-view/Product";
import AdminFeatures from "./pages/admin-view/Features";
import AdminOrders from "./pages/admin-view/Order";

// --- YAHAN NAYA IMPORT ADD KIYA HAI ---
import AdminSlider from "./pages/admin-view/Slider"; 

import ShoppingLayout from "./components/shopping-view/Layout";
import ShoppingHome from "./pages/shopping-view/Home";
import ShoppingAbout from "./pages/shopping-view/About";
import ShoppingServices from "./pages/shopping-view/Services";
import ShoppingContact from "./pages/shopping-view/Contact";
import ShoppingListing from "./pages/shopping-view/Listing";
import ShoppingAccount from "./pages/shopping-view/Account";
import ShoppingCheckout from "./pages/shopping-view/Checkout";

import TermsAndPolicies from "./pages/shopping-view/Term-policies";
import TermsOfService from "./pages/shopping-view/TermsOfService";
import RefundPolicy from "./pages/shopping-view/RefundPolicy";

import NotFound from "./pages/not-found/Index";
import CheckAuth from "./components/common/CheckAuth";
import { useDispatch, useSelector } from "react-redux";

import UnauthPage from "./components/common/CheckAuth";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";


function App() {
  const { isAuthenticated, isLoading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Loading state handling
  if (isLoading) return <div className="flex items-center justify-center h-screen bg-slate-900 text-white font-bold tracking-widest">LOADING...</div>;

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="orders" element={<AdminOrders />} />
          
          {/* --- YAHAN SLIDER KA ROUTE ADD KIYA HAI --- */}
          <Route path="slider" element={<AdminSlider />} /> 
        </Route>

        {/* Shop Routes */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="about" element={<ShoppingAbout />} />
          <Route path="services" element={<ShoppingServices />} />
          <Route path="contact" element={<ShoppingContact />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
           <Route path="term-policies" element={<TermsAndPolicies />} />
           <Route path="terms-service" element={<TermsOfService />} />
           <Route path="refund-policy" element={<RefundPolicy />} />
        </Route>

        {/* Common Routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="/" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}></CheckAuth>} />
      </Routes>
    </div>
  );
}

export default App;