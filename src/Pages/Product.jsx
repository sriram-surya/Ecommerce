import React from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/breadcrum/breadcrum'
import Productdisplay from '../Components/productdisplay/productdisplay'
import Descriptionbox from '../Components/DescriptionBox/descriptionbox'
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts'

const Product = () => {
  const {all_products} = useContext(ShopContext);
  const{productId} = useParams();
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum  product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproducts/>
      
    </div>
  )
}

export default Product