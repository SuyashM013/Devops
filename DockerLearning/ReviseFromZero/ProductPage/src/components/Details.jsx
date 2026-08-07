import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "../Utils/axios"
import Loading from './Loading';

function Details() {

    const [product, setProduct] = useState(null)

    const { id } = useParams();
    

    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/products/${id}`)
            setProduct(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleProduct()
    }, [])

    return product ?  (
        <div className='w-[80%] flex items-center justify-between h-full bg-white container m-auto py-[10%] px-[10%]  gapa-5'>

            <img
                className='object-contain w-[50%] h-[80%]'
                src={`${product.image}`}
                alt='' />

            <div className='content w-[60%] mx-10 '>

                <h1 className='text-4xl'>{product.title}</h1>

                <h3 className='text-zinc-400 my-5'>{product.category}</h3>

                <h2 className='mb-3 text-red-300'>${product.price}</h2>

                <p className='mb-[5%]'>{product.description}</p>

                <Link className='py-2 px-5 mr-5 border rounded border-blue-200 text-blue-300 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-100'>Edit</Link>
                <Link className='py-2 px-5 border rounded border-red-200 text-red-300 hover:border-red-400 hover:text-red-500 hover:bg-red-100'>Delete</Link>



            </div>



        </div>
    ) : <Loading />
}

export default Details
