import React from 'react'
import Banner from '../Banner/Banner'
import Breakfast from '../Breakfast/Breakfast'
import Delivery from '../Delivery/Delivery'
import Header from '../Header/Header'
import Nav from '../Nav/Nav'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Nav/>
      {/* <Breakfast/>
      <Delivery/> */}
    
    </div>
  )
}

export default Home