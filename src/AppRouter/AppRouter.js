import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//components
import HomePage from '../pages/HomePage/HomePage';
import AboutUs from '../pages/AboutUs/AboutUs';
import News from '../pages/News/News';
import Services from '../pages/OurServices/OurServices';
import Contact from '../pages/Contact/Contact';

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/sobrenosotros" element={<AboutUs/>} />
                <Route path="/nuestrosservicios" element={<Services/>} />
                <Route path="/novedades" element={<News/>} />
                <Route path="/contacto" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    )
}