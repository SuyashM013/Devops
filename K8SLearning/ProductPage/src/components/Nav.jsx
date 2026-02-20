import React, { useContext, useState } from 'react'
import { ProductContext } from '../Utils/Context'
import { Link } from 'react-router-dom';


function Nav() {

    const [products] = useContext(ProductContext);

    let distinctCategory = products && products.reduce((acc, curr) => [...acc, curr.category], []);

    distinctCategory = [...new Set(distinctCategory)];


    console.log(distinctCategory)
        ;



    return (

        <>



            {/* Baju wala Part */}
            < nav className='w-[20%] h-full sm:flex flex-col items-center bg-zinc-100 text-black p-5 hidden ' >

                <a href='/create' className='text-2xl mb-4 text-center text-blue-500 border border-black rounded-lg p-2 hover:bg-white-100 hover:text-blue-700 hover:scale-110 transition-all'>Add New Product</a>

                  <h1>This project will use in K8s</h1>
                  <h1>Now it will be used in K8s V4</h1>



                <hr className='w-[80%] my-3 ' />

                <div className='flex flex-col items-center flex-wrap'>


                    <h1 className='text-2xl mb-3 w-[80%]'>Category Filter</h1>


                    <div className=' w-[80%]'>

                        {distinctCategory.map((c, i) => (

                            <Link key={i} to={`/?category=${c}`} className='flex items-center mb-3 gap-2 '>
                                <span className=' rounded-full w-[15px] h-[15px] bg-blue-200'></span> {" "}{c}
                            </Link>
                        ))}


                    </div>

                </div>

                <div className='sm:hidden'>


                </div>

            </nav >

        </>
    )
}

export default Nav
