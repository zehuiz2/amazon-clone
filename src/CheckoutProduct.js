import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider'

function CheckoutProduct({id, title, image, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        })
    }

    return (
        <div className='checkoutproduct'>
            <img src={image} alt='img' />
            <div className='checkoutproduct__info'>
                <p className='checkoutproduct__title'>{title}</p>
                <p className='checkoutproduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct__rating'>
                    {Array(rating).fill().map(() => (<p>⭐</p>))}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove from Bag</button>)}
            </div>
        </div>
    )
}

export default CheckoutProduct