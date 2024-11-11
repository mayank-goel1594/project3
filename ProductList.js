import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product,i)=>{
        return <Product product={product} key={i} incrementquantity={props.incrementquantity} index={i} decrementQuantity={props.decrementQuantity} removeItem={props.removeItem}/>
    })
    : <h1> no products exists in the carts</h1>
  )
}
