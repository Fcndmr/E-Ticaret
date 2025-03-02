import { Routes, Route } from "react-router-dom"
import SingleBlogPage from "./pages/SingleBlogPage"
import SingleProductPage from "./pages/SingleProductPage"
import ShopPage from "./pages/ShopPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage"
import AccountPage from "./pages/AccountPage"
import BlogsPage from "./pages/BlogsPage"
import HomePage from "./pages/HomePage"
import CategoryList from "./pages/Admin/Categories/CategoryList"
import CreateCategory from "./pages/Admin/Categories/CreateCategory"
import UpdateCategory from "./pages/Admin/Categories/UpdateCategory"
import UserList from "./pages/Admin/Users/UserList"
import ProductList from "./pages/Admin/Products/ProductList"
import UpdateUser from "./pages/Admin/Users/UpdateUser"
import CreateUser from "./pages/Admin/Users/CreateUser"


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
        <Route path="/admin/*"> 
          <Route index element={<CategoryList/>}/>
          <Route path="categories" element={<CategoryList/>}/>
          <Route path="categories/create" element={<CreateCategory/>}/>
          <Route path="categories/update/:id" element={<UpdateCategory/>}/>
          <Route path="users" element={<UserList/>}/>
          <Route path="users/create" element={<CreateUser/>}/>
          <Route path="users/update/:id" element={<UpdateUser/>}/>
          <Route path="products" element={<ProductList/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
