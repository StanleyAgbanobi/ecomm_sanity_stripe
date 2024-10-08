import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div className="">

        <p className="beats-solo">{heroBanner.smallText}</p>

        <h3>{heroBanner.midText}</h3>

        <h1>{heroBanner.largeText1}</h1>

        <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />

        <div className="">
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>

          <div className="desc">
            <h5 className=''>Description</h5>
            <p className=''>{heroBanner.desc}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroBanner