import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts] = useState([])
   
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));
        
    },[])
    const [cart,setCart]=useState([])
    const handelAddProduct=(product)=>{
        console.log('Product Added',product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
   
    return (
        <div className='shop-container'>
           <div className="product-container">
           
            {
                products.map(product=><Product 
                    handelAddProduct={handelAddProduct}
                    product={product}></Product>)
            }
            
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
            

        </div>
    );
};

export default Shop;