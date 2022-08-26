import React from 'react'
//internal components 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/footer'
//external components
import { useTranslation } from 'react-i18next';
//style
import './OurServices.scss'
import './OurServices_MobileResponsive.scss'
export default function OurServices(){
    const [t, i18n] = useTranslation("global")
    return(
        <div className='services-container'>
            <header className='services-header'>
                <Navbar/>
            </header>
            <div className='services-main'>
                <div className='main-info'>
                    <p>{t("main.our-services.text-1")}</p>
                    <p>{t("main.our-services.text-2")}</p>
                    <p>{t("main.our-services.text-3")}</p>
                    <p>{t("main.our-services.text-4")}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
