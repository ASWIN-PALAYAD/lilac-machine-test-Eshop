import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Wrapper from '../Wrappers/CartWrapper';
import { useDispatch } from 'react-redux';
import { removeFromCart, calculateTotal } from '../Redux/features/cartSlice';
const Cart = () => {
    const dispatch = useDispatch();

    const { cartItems, amount } = useSelector((state) => state.cart)


    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems])






    return (
        <Wrapper>
            <div className="Container">
                {cartItems.length > 0 ? (
                    <div className="Cart-items">
                        {cartItems.map((item) => (
                            <div className="Item-card">
                                <div className="image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="Item name">
                                    <h5>{item.name}</h5>
                                </div>
                                <div className="Price">
                                    <p>${item.price}</p>
                                </div>
                                <div className="button">
                                    <button onClick={() => dispatch(removeFromCart(item.id))} >Remove Item</button>
                                </div>
                            </div>
                        ))}
                    </div>


                ) : (
                    <div>
                        <h1>
                            cart is empty
                        </h1>
                    </div>

                )}
                <hr />
                <div>
                    {cartItems.length > 0 && (
                        <div className='TotalAmount'>
                        <p>Total Amount : $ <b>{amount}</b></p>
                     </div>
                    )}

                </div>
            </div>



        </Wrapper>
    )
}

export default Cart