

import { Routes, Route } from "react-router-dom"
import SingleBlogPage from "./pages/SingleBlogPage"
import SingleProductPage from "./pages/SingleProductPage"
import ShopPage from "./pages/ShopPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage"
import AccountPage from "./pages/AccountPage"
import BlogsPage from "./pages/BlogsPage"
import HomePage from "./pages/HomePage"


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/account" element={<AccountPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blog" element={<BlogsPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/singleblog" element={<SingleBlogPage/>}/>
        <Route path="/singleproduct" element={<SingleProductPage/>}/>
      </Routes>
    </>
  )
}

export default App
