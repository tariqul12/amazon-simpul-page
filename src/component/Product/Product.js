import React from 'react';
import './product.css';
const Product = (props) => {
    // console.log(props.product.img)
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                 <h4 className='product-name'>{name}</h4>
                 <p><small>By:{seller}</small></p>
                 <h3>${price}</h3>
                 <p><small>Only {stock} left in stock - Order soon</small></p>
                 <button className='main-button' 
                    onClick={()=>props.handelAddProduct(props.product)}
                    >Add to card</button>
            </div>
            
        </div>
    );
};

export default Product;