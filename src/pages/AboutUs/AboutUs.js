import React from 'react'
//internal components 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/footer'
//external components
import { useTranslation } from 'react-i18next';
//style
import './AboutUs.scss'
import './AboutUs_MobileResponsive.scss'

export default function AboutUs(){
    const [t, i18n] = useTranslation("global")
    return(
        <div className='about-us-container'>
            <header className='about-us-header'>
                <Navbar/>
            </header>
            <div className='about-us-main'>
                <div className='main-info'>
                    <p>{t("main.about-us.text-1")}</p>
                    <p>{t("main.about-us.text-2")}</p>
                    <p>{t("main.about-us.text-3")}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
