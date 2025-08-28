import Link from 'next/link'
import React from 'react'

const page = async () => {

    const response = await fetch("https://fakestoreapi.com/products")
    const products = await response.json()


    return (
        <div className='min-h-screen ='>
            <h1>All Products : </h1>

            <ul>
                {
                    products.map(product => {
                        return (
                            <li key={product.id} className="p-2 border border-gray-300 rounded-md text-center">
                                <Link href={`products/${product.id}`}><h1>{product.title}</h1></Link>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default page
