import React from 'react'
//internal components 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/footer'
//external components
import { useTranslation } from 'react-i18next';
//style
import './News.scss'
import './News_MobileResponsive.scss'
export default function News(){
    const [t, i18n] = useTranslation("global")
    return(
        <div className='news-container'>
            <header className='news-header'>
                <Navbar/>
            </header>
            <div className='news-main'>
                <div className='main-info'>
                    <div className='main-info-news'>
                        <h2>Titulo novedad 1</h2>
                        <p>Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - 
                        </p>
                    </div>
                    <div className='main-info-news'>
                        <h2>Titulo novedad 2</h2>
                        <p>Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - 
                        </p>
                    </div>
                    <div className='main-info-news'>
                        <h2>Titulo novedad 3</h2>
                        <p>Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - 
                        </p>
                    </div>
                    <div className='main-info-news'>
                        <h2>Titulo novedad 4</h2>
                        <p>Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - 
                        </p>
                    </div>
                    <div className='main-info-news'>
                        <h2>Titulo novedad 5</h2>
                        <p>Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - 
                        </p>
                    </div>
                    <div className='main-info-news'>
                        <h2>Titulo novedad 6</h2>
                        <p>Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - Texto de prueba - 
                        Texto de prueba - Texto de prueba - 
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
