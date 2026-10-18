import "./index.css";
import { Banner } from './Components/Banner/Banner'
import { StatSection } from './Components/Banner/StatSection'
import { Footer } from './Components/Footer/Footer'
import { Navbar } from './Components/Navbar/Navbar'
import { StepsSection } from "./Components/Banner/StepSection";
import { PricingSection } from "./Components/Banner/PricingSection";
import { MainSection } from "./Components/Product/MainSection";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  // Add a product to the cart
  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}-${Math.random()}`,
    };

    setCartItems((previousItems) => [...previousItems, cartItem]);
    setActiveTab("cart");
  };

  // Remove one selected cart item
  const handleRemoveFromCart = (cartItemId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  // Clear the cart when checkout is clicked
  const handleCheckout = () => {
    setCartItems([]);
    setActiveTab("cart");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartItems.length}
        onCartClick={() => setActiveTab("cart")}></Navbar>
      <main>
        <Banner></Banner>
        <StatSection></StatSection>
        <MainSection activeTab={activeTab}
          setActiveTab={setActiveTab}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          onCheckout={handleCheckout}></MainSection>
        <StepsSection></StepsSection>
        <PricingSection></PricingSection>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
