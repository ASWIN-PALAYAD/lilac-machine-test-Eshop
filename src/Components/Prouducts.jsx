import React from 'react'
import Wrapper from '../Wrappers/ProductWrapper'
import { useSelector } from 'react-redux'
import { addToCart } from '../Redux/features/cartSlice'
import { useDispatch } from 'react-redux'

export const Prouducts = () => {
   const dispatch = useDispatch();

    const productItems = useSelector((state)=> state.product)

    return (
        <Wrapper>

            <div className="Products">
                {productItems.map((product) => (
                    <div className='Card' >
                        <div>
                            <img className='Product-image' src={product.image} alt={product.name} />
                        </div>
                        <div>
                            <h3 className='Product-name'>
                                {product.name}
                            </h3>
                        </div>
                        <div className='Product-price' >
                            $ {product.price}
                        </div>
                        <div>
                            <button className='Product-add-button' onClick={()=> dispatch(addToCart(product))}  >Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>

    )
}

export default Prouducts
