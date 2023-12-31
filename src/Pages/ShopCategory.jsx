import React, { useContext } from 'react'
import './css/shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/images/dropdown_icon.png'
import Item from '../Components/Item/Item'
//import all_products from '../Components/All-products'



const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
         {all_products.map((item,i)=>{
          console.log('props.category:', props.category);
          console.log('item.category:', item.category);          
          if(props.category === item.category){
            return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory