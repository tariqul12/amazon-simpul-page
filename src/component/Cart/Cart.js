import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart=props.cart;
    // const total=cart.reduce((total,prd) =>total +prd.price,0)
    let total=0;
    for(let i=0; i<cart.length; i++){
        const product=cart[i];
        total=total+product.price;
    }
    let shipping=0;
    if(total>100){
        shipping=0;
    }
    else if(total>50){
        shipping=4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax= total/10;
    const grantTotal=total + shipping + Number(tax);
   const formatNumber=num=>{
       const precision =num.toFixed(2);
       return Number(precision);
   }

    return (
        <div className='cart-style'>
            <h4>Order Summary</h4>
            <p>Items Orders:{cart.length}</p>
            <p>Product Price:{formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tex + Vat:{formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grantTotal)}</p>
        </div>
    );
};

export default Cart;