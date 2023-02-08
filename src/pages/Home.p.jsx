import React from 'react';
import Footer from '../components/Footer.c';
import Navbar from '../components/navbar/Navbar.c';
import Proptypes from 'prop-types';
const Home = ({ Comp }) => {
  return (
    <>
      <Navbar />
      <main>
        <>{Comp ? <Comp /> : <h1>Home</h1>}</>
      </main>
      <Footer />
    </>
  );
};
Home.prototype = {
  PageP: Proptypes.element, //.isRequired
};
export default Home;
