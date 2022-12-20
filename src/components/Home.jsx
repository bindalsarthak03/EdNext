import React from 'react'
import Banner from './Banner'
import Faculty from './Faculty'
import Features from './Features'
import Footer from './Footer'
import Navbar from './Navbar'
import Students from './Students'


function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Students />
            <Faculty/>
            <Features/>
            <Footer/>
        </>
    )
}

export default Home;
