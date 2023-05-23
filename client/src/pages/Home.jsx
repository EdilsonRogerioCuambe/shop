import React from 'react'
import { Navbar, Hero, ProdutosHome } from '../components';

const Home = () => {
  return (
    <>
      <div className='mx-auto'>
        <Navbar />
        <Hero />
        <ProdutosHome />
      </div>
    </>
  )
}

export default Home;