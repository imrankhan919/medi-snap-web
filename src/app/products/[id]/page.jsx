import Image from 'next/image'


const page = async ({ params }) => {

    const data = await params

    const response = await fetch('https://fakestoreapi.com/products/' + params.id)
    const product = await response.json()


    return (
        <div className='p-14 text-center'>
            <h1>{product.title}</h1>
            <img src={product.image} />
        </div>
    )
}

export default page
