import React from 'react';
import { 
  NavBar,
  HeroBanner,
  Layout,
  Products,
  Cart,
  FooterBanner,
  Footer,
} from '../components';

import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {

  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product) => <Products key={product._id} product={product} /> )}
    </div>

    <FooterBanner footerBanner={bannerData.length && bannerData[0]}/>

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }

}

export default Home