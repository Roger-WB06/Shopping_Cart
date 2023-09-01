import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'




const Products = () => {

    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

  return (
    <div className='productsWrapper'>
        {
            products.map((product) =>
                <div key={product.id} className='Card'>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=> dispatch(add(product))} className='btn'>Add to Cart</button>
                </div> 
            )
        }
    </div>
  )
}

export default Products