import React from 'react';
import images from '../assets';

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-purple-900 to-[#10002b] text-white py-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold ml-4">Bem-vindo à nossa loja de produtos high-tech</h1>
              <p className="text-lg mt-4 ml-4">Encontre as melhores ofertas em dispositivos eletrônicos, gadgets e muito mais.</p>
              <button className="bg-white ml-4 text-purple-900 px-6 py-3 rounded-full mt-8 hover:text-purple-500 transition-colors duration-300 ease-in-out">
                Ver Produtos
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={images.shop}
                alt="Imagem do Hero"
                className="w-full rounded-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero