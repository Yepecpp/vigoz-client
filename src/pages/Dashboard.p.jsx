import React from 'react'
import Footer from '../components/FooterDash.c'
import Navbar from '../components/NavbarDash.c'
import Proptypes from 'prop-types'
const Dashboard = ({Comp}) => {
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
Dashboard.prototype = {
  PageP: Proptypes.element.isRequired
}
export default Dashboard