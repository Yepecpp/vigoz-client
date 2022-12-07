import React from 'react'
import Footer from '../components/Footer.c'
import Navbar from '../components/Navbar.c'
import Proptypes from 'prop-types'
const Home = ({Comp}) => {
  return (
    <>
    <Navbar/>
    <main>
    <Comp/>
    </main>
    <Footer/>
    </>
  )
}
Home.prototype = {
  PageP: Proptypes.element.isRequired
}
export default Home