import './App.css';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
function CartList({cart}) {
    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='flex'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='card1' >
                            <img src={cartItem.url} width={'25%'} />
                            <p className='ntxt'> {cartItem.name} </p>
                            <button className='btn'
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span className='qtxt'> {cartItem.quantity} </span>
                            <button className='btn'
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <p className='rtxt'> Rs. {cartItem.price * cartItem.quantity} </p>
                        </div>
                    )
                })
            }
            <div className='card2'>
            <p className='tot'> Total  </p>
            <p className='tot1'> Rs.  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            <button className='chkbtn'> Checkout <FaArrowRight style={{position:'relative' , top:'3' , left:'2'}}/></button>
            </div>
        </div >
    )
}

export default CartList;
