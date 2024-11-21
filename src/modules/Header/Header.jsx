import hederLinkList from "../../shared/services/hederLinkList"
import Burger from "./Burger/Burger"
import { useState, useEffect } from "react";


import css from './Header.module.scss'

const Header = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    const linkItem = hederLinkList.map(({ id, nameLink }) => {
        return (
            <li key={id}>
                <p className={css.headerLink}>{nameLink}</p>
            </li>
        )
    })



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1440);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleOpenBurgerMenu = () => {
        setOpenBurger(prev => !prev)
    }
    return (
        <header className={`${css.wrapperHeader} ${"container"}`}>
            <p className={css.logo}>Mustage</p>
            {!isMobile &&
                <>
                    <ul className={css.headerLinkList}>
                        {linkItem}
                    </ul>
                    <div className={css.headerNameLanguage}>RU/
                        UA</div>
                </>
            }
            <button type="button" className={css.headerWelcomeBtn}>Написати нам</button>
            {openBurger &&
                <Burger linkItem={linkItem} openBurger={openBurger} className={css.burger} toggleOpenBurgerMenu={toggleOpenBurgerMenu} />
            }
            {isMobile && <button type="button" onClick={toggleOpenBurgerMenu}>
                <svg className={css.icon} aria-hidden="true">
                    <use xlinkHref="/svgIcon/icon.svg#icon-Layer-2"></use>
                </svg>
            </button>}
        </header>
    )
}
export default Header