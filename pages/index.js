import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { ManifestoPosts } from '@/sections';
import { getCategories } from '@/services';

function blog() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto sm:px-10 px-2 mb-8">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white shadow-lg rounded-lg lg:p-10 mb-8 pt-8 px-8'>
        <img src='ob1.png' alt='information' className='w-80 mx-auto' />
        <div className="p-8">
          <h3 className="mb-8 md:text-5xl text-4xl font-semibold">Complessità alla portata di tutti.</h3>
          <p className="text-gray-700 text-lg font-normal mb-8">
            Oggi più che mai siamo impietriti di fronte ad un'immensità di informazioni e non riusciamo a capire quali siano vere e quali no.
            Cerchiamo di fare chiarezza senza populismi, bensì con la buona informazione.
          </p>
          <Link href='/blog'>
            <span className='transition duration-500 transform border-teal-500 border hover:-translate-y-1 inline-block bg-teal-500 hover:bg-white text-lg font-medium rounded-full text-white hover:text-teal-500 px-8 py-3 cursor-pointer'>
              Inizia da qui
            </span>
          </Link>
        </div>

        <div className="p-8 pt-20 mb-8">
          <h3 className="mb-8 text-3xl font-semibold">Per chi come noi vuole Cambiare.</h3>
          <p className="text-gray-700 text-lg font-normal ">
            Nell’epoca del terrore e della mediocrità, della disinformazione e del lassismo la complessità viene rigettata perché incomprensibile e
            perciò sbagliata. Semplicità e superficialità ci hanno portati ad un bivio, una scelta di destino: vogliamo arrenderci all’oblio culturale
            o impugnare la parola e combattere per cambiare il sistema?
          </p>
        </div>
        <div className="p-8 md:pt-20 pt-4 self-center items-center">
          <ManifestoPosts />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg lg:p-10 mb-8 pt-8 px-8 shadow-lg bg-black bg-opacity-40'>
        <div className="col-span-1 self-center">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='m-2 lg:m-4 transition duration-500 transform border-teal-500 border hover:-translate-y-1 inline-block hover:bg-teal-500 bg-white text-lg font-medium rounded-full hover:text-white text-teal-500 px-8 py-3 cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="p-8 mb-8">
          <h3 className="mb-8 text-3xl font-semibold text-white">Il Primo passo.</h3>
          <p className="text-gray-100 text-lg font-normal ">
            Nell’epoca del terrore e della mediocrità, della disinformazione e del lassismo la complessità viene rigettata perché incomprensibile e
            perciò sbagliata. Semplicità e superficialità ci hanno portati ad un bivio, una scelta di destino: vogliamo arrenderci all’oblio culturale
            o impugnare la parola e combattere per cambiare il sistema?
          </p>
        </div>
      </div>

    </div >
  )
}

export default blog;
