import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
ReactDOM.render( 
<BrowserRouter>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/courses' exact element={<Courses/>}/>
    </Routes>

</BrowserRouter>
,
document.getElementById('root'),
);