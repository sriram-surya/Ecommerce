
import './App.css';
import  Navbar  from './Components/Navbar/Navbar' 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingUp from './Pages/LoginSingUp';
import Footer from './Components/footer/footer'
import men_banner from './Components/Assets/images/banner_mens.png'
import women_banner from './Components/Assets/images/banner_women.png'
import Kids_banner from './Components/Assets/images/banner_kids.png'






function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner = {Kids_banner} category="kids"/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSingUp/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
