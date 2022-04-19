import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='prime' />

            <div className='home__row'>
                <Product
                    id = "1" 
                    title = "Jessy Livermore" 
                    image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxP6qJG0pxpLwYuJ_I9yaAHaLG%26pid%3DApi&f=1'
                    price = {18.88} 
                    rating = {5}
                />
                <Product 
                    id = "2"
                    title = "Jessy Livermore" 
                    image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxP6qJG0pxpLwYuJ_I9yaAHaLG%26pid%3DApi&f=1'
                    price = {28.88} 
                    rating = {4}
                />
             </div>

            <div className='home__row'>
                <Product 
                    id = "3"
                    title = "Jessy Livermore" 
                    image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxP6qJG0pxpLwYuJ_I9yaAHaLG%26pid%3DApi&f=1'
                    price = {18.88} 
                    rating = {5}
                />
                <Product 
                    id = "4"
                    title = "Jessy Livermore" 
                    image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxP6qJG0pxpLwYuJ_I9yaAHaLG%26pid%3DApi&f=1'
                    price = {38.88} 
                    rating = {3}
                />
                <Product
                    id = "5"
                    title = "Jessy Livermore" 
                    image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxP6qJG0pxpLwYuJ_I9yaAHaLG%26pid%3DApi&f=1'
                    price = {28.88} 
                    rating = {4}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id = "6"
                    title = "Jessy Livermore" 
                    image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZxP6qJG0pxpLwYuJ_I9yaAHaLG%26pid%3DApi&f=1'
                    price = {28.88} 
                    rating = {2}
                />
            </div>
        </div>
    </div>
  )
}

export default Home