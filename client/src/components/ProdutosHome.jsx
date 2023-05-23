import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets';

const ProdutosHome = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-[#10002b]">Produtos em destaque</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative shadow-2xl cursor-pointer rounded-md overflow-hidden bg-white hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between px-2 py-2">
                <div>
                  <h3 className="text-sm text-[#10002b]">
                    <Link to="/" className="font-medium text-[#10002b]">Basic Tee</Link>
                  </h3>
                  <p className="mt-1 text-sm text-[#10002b]">Black</p>
                </div>
                <p className="text-sm font-medium text-[#10002b]">R$ <span className='text-green-500'>35</span></p>
              </div>
            </div>

            <div className="group relative shadow-2xl cursor-pointer rounded-md overflow-hidden bg-white hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between px-2 py-2">
                <div>
                  <h3 className="text-sm text-[#10002b]">
                    <Link to="/" className="font-medium text-[#10002b]">Basic Tee</Link>
                  </h3>
                  <p className="mt-1 text-sm text-[#10002b]">Black</p>
                </div>
                <p className="text-sm font-medium text-[#10002b]">R$ <span className='text-green-500'>35</span></p>
              </div>
            </div>

            <div className="group relative shadow-2xl cursor-pointer rounded-md overflow-hidden bg-white hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between px-2 py-2">
                <div>
                  <h3 className="text-sm text-[#10002b]">
                    <Link to="/" className="font-medium text-[#10002b]">Basic Tee</Link>
                  </h3>
                  <p className="mt-1 text-sm text-[#10002b]">Black</p>
                </div>
                <p className="text-sm font-medium text-[#10002b]">R$ <span className='text-green-500'>35</span></p>
              </div>
            </div>

            <div className="group relative shadow-2xl cursor-pointer rounded-md overflow-hidden bg-white hover:scale-105 transform transition-all duration-300 ease-in-out">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between px-2 py-2">
                <div>
                  <h3 className="text-sm text-[#10002b]">
                    <Link to="/" className="font-medium text-[#10002b]">Basic Tee</Link>
                  </h3>
                  <p className="mt-1 text-sm text-[#10002b]">Black</p>
                </div>
                <p className="text-sm font-medium text-[#10002b]">R$ <span className='text-green-500'>35</span></p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Link to="/" className="text-sm font-medium text-[#10002b] hover:text-[#10002b]">
              Ver todos os produtos <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[#10002b]">
            Você também pode gostar
          </h2>
          
          <div className="mt-10 grid grid-cols-2 gap-4">

            <div className='bg-white p-4 rounded-lg shadow-2xl cursor-pointer'>
              <div className="items-center mb-4">
                <img src={images.fone} alt="Fone de ouvido" className='rounded-lg hover:opacity-80 transition-opacity duration-300 ease-in-out' />
                <div className="ml-4">
                  <h2 className='text-2xl font-bold uppercase'>Nome do produto</h2>
                  <p className='text-gray-500 text-xl'>Descrição do produto</p>
                  <p className='text-green-500'>Preço do produto</p>
                </div>
              </div>
            </div>
            <div className=''>
              <div className="bg-white p-4 cursor-pointer rounded-lg shadow-2xl flex items-start mb-4">
                <img src={images.pc} alt="PC Gamer" className="w-1/2 rounded-lg hover:opacity-80 transition-opacity duration-300 ease-in-out" />
                <div className='ml-4'>
                  <h2 className='text-2xl font-bold uppercase text-[#10002b]'>Nome do produto</h2>
                  <p
                    className='text-xl text-gray-500'
                  >Descrição do produto</p>
                  <p className='text-green-500'>Preço do produto</p>
                </div>
              </div>
              <div className="flex items-start mb-4 cursor-pointer bg-white p-4 rounded-lg shadow-2xl">
                <img src={images.phone} alt="Celular" className="w-1/2 rounded-lg hover:opacity-80 transition-opacity duration-300 ease-in-out" />
                <div className="ml-4">
                  <h2 className='text-2xl font-bold'>Nome do produto</h2>
                  <p className='text-xl text-gray-500'>Descrição do produto</p>
                  <p className='text-green-500'>Preço do produto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link to="/" className="text-sm font-medium text-[#10002b] hover:text-[#10002b]">
              Ver todos os produtos <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-[#10002b] mt-10">Produtos em promoção</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div className="group relative shadow-2xl cursor-pointer rounded-md overflow-hidden bg-white hover:scale-105 transform transition-all duration-300 ease-in-out">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>

                  <div className="absolute inset-x-0 bottom-0 px-2 py-2">
                    <div className="text-sm font-medium text-[#10002b]">

                      <p className="text-sm font-medium text-[#10002b]">R$ <span className='text-green-500'>35</span></p>

                      <p className="text-sm text-[#10002b]">
                        <Link to="/" className="font-medium text-[#10002b]">Basic Tee</Link>
                      </p>

                      <p className="mt-1 text-sm text-[#10002b]">Black</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProdutosHome;