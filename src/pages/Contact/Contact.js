import React from 'react'
//internal components 
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/footer/footer'
//external components
import { useTranslation } from 'react-i18next';
//style
import './Contact.scss'

export default function Contact(){
    const [t, i18n] = useTranslation("global")
    return(
        <div className='contact-container'>
            <header className='contact-header'>
                <Navbar/>
            </header>
            <div className='contact-main'>
                <div className='main-info'>
                    <p>{t("main.contact.text-1")}</p>
                    <p>{t("main.contact.text-2")}</p>
                    <p>{t("main.contact.text-3")}</p>
                    <p>{t("main.contact.text-4")}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
