import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar'
import Students from './components/Students';
import Faculty from './components/Faculty';
import './index.css'
import Features from './components/Features';
import Footer from './components/Footer';
ReactDOM.render( 
<>
<Navbar/>
<Banner/>
<Students/>
<Faculty/>
<Features/>
<Footer/>

</>
,
document.getElementById('root'),
);