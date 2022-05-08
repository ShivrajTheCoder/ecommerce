import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

export default function Homescreen() {
    return (
        <div>
            <h1>Featrued products</h1>
            <div className='products'>
                {
                    data.products.map(product => (
                        <div key={product.name} className="product">
                            <Link to={`/product/${product.slug}`}>
                                <img src={product.image} alt={product.name} />
                            </Link>
                            <div className='product-info'>
                                <Link to={`/product/${product.slug}`}>
                                    <p>{product.name}</p>
                                </Link>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
