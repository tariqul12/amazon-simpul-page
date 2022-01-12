import React from 'react';
import './product.css';
const Product = (props) => {
    console.log(props.product.img)
    const {img,name}=props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                 <h4>{name}</h4>
            </div>
            
        </div>
    );
};

export default Product;