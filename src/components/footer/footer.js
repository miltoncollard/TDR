import React from 'react'

import imgLogo from '../../assets/images/logo.png'
//external components
import { useTranslation } from 'react-i18next';
//styles
import './footer.scss'

export default function Footer(){
    const [t, i18n] = useTranslation("global")
    return(
        <footer className='footer'>
            <div className='footer-logo'>
                <a href='#home' className="nav-logo">
                    <img src={imgLogo} alt="" className="logo-image"/>
                </a>
            </div>
            <div className='footer-info'>
                <span>{'TDR Consulting & Management  Latin America'}</span>
                <span>{t("footer.info")}</span>
            </div>
        </footer>
    )
}
