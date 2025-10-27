import React from 'react';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Jumbo from './components/Jumbotron/Jumbo';
import Services from './components/OurServices/Services';
import AboutSection from './components/AboutSection/AboutSection';
import OurReviews from './components/OurReviews/OurReviews';

function page() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <AboutSection/>
    <OurReviews/>
    <Footer/>
    </>
    // <div>
    //   {/* <Input /> */}
    //   {/* <Button size="lg" />
    //   <Button size="md" /> */}
    //   {/* <Footer/> */}
    //   {/* <Title text="What Is Heading?" size="lg" /> */}
    //   {/* <Title text="What Is Heading?" size="md" /> */}
    //   {/* <Navbar/> */}
    //   {/* <Hero/> */}
    //   {/* <Jumbo/> */}
    // </div>
  )
}

export default page;