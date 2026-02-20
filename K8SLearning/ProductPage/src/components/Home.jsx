import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { ProductContext } from '../Utils/Context'
import Loading from './Loading';


function Home() {

    const [products] = useContext(ProductContext);




    // TO short the length of the title in main screen

    const getShortTitle = (title, wordCount = 5) => {
        return title.split(' ').slice(0, wordCount).join(' ') + ' ...';
    }


    return products ? (

        <>

            <Nav />

            <div className='md:w-[80%] w-100% p-5 pt-10 flex items-center justify-evenly gap-4 flex-wrap overflow-x-hidden overflow-y-auto '>

              


                {products.map((p, i) => (

                    

                            <Link
                                to={`/details/${p.id}`}
                                className='bg-white card p-3 shadow-lg border rounded-lg w-[35%] h-[45vh] flex flex-col justify-evenly items-center lg:w-[18%] md:w-[30%] '>

                                <div
                                    style={{ backgroundImage: `url(${p.image})` }}
                                    className='hover:scale-110 w-[80%] mb-2 h-[80%]  transition-all bg-contain bg-no-repeat bg-center rounded-md  flex-shrink-0'>

                                </div>

                                <h1 className='hover:text-blue-300 text-center'> {getShortTitle(p.title, 3)}  </h1>

                                <h3 className='pt-1 font-light font-sans text-red-600'>${p.price} </h3>

                            </Link >
                        
                        
                    


                ))}



            </div>


        </>

    ) : (
        <Loading />
    )
}

export default Home
