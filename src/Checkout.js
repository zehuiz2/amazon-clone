import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue(); 

    return (
        <div className='checkout'>
            <div className='Checkout__left'>
                <img 
                    className='checkout__ad' 
                    src='https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2022/April/Update_KBHP-Showcase_1500x300.jpg' 
                    alt=''
                />
                <div>
                    <h2 className='checkout__title'>{user ? ('Hello '+ user.email + ', ' + 'This is '): ''}Your Shopping Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout