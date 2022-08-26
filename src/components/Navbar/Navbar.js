import React, {useState} from 'react'
import SegmentIcon from '@mui/icons-material/Segment';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import imgLogo from '../../assets/images/logo.png'
import { useTranslation } from 'react-i18next';
//styles
import './Navbar.scss'

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)
    const [t, i18n] = useTranslation("global")

    window.addEventListener("scroll", function(){
        var header = this.document.querySelector("header")
        header.classList.toggle("scroll-down", this.window.scrollY>0)
    })

    const handleOpenMenu = () => {
        window.scroll = null
        setOpenMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenMenu(false)
    }
   
    
    return(
        <nav className={`nav container openMenu-${openMenu}`}>  
            <div className="nav-logo">
                <a href='#home' className="nav-logo">
                    <img src={imgLogo} alt="" className="logo-image"/>
                </a>
            </div>
            <div className={`nav-menu openMenu-${openMenu}`}>
                <button className={`nav-burger-icon-${!openMenu}`} onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <button className={`nav-close-icon-${openMenu}`} onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>
                <ul className={`nav-list grid openMenu-${openMenu}`}>
                    <li className="nav-item">
                    <a href="/" className="nav-link">
                            <i className="fas fa-keyboard nav__icon"></i>{t("header.navbar.home")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="sobrenosotros" className="nav-link">
                            <i className="fas fa-keyboard nav__icon"></i>{t("header.navbar.about-us")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="nuestrosservicios" className="nav-link">
                            <i className="far fa-image nav__icon"></i>{t("header.navbar.our-services")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="novedades" className="nav-link">
                            <i className="far fa-image nav__icon"></i>{t("header.navbar.news")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="contacto" className="nav-link">
                            <i className="far fa-paper-plane nav__icon"></i>{t("header.navbar.contact")}
                        </a>
                    </li>
                </ul>
                <div className={`nav-language openMenu-${openMenu}`}>
                    <button onClick={() => i18n.changeLanguage("es")}>ESP</button>
                    <button onClick={() => i18n.changeLanguage("en")}>ENG</button>
                </div>
            </div>            
        </nav>
    )
}
