
import Drawer from 'react-modern-drawer';
import css from './Burger.module.scss';
import 'react-modern-drawer/dist/index.css';

const Burger = ({ linkItem, className, openBurger, toggleOpenBurgerMenu }) => {

    return (
        <div className={className}>

            <Drawer
                open={openBurger}
                onClose={toggleOpenBurgerMenu}
                size={383}
                direction="left"
                customIdSuffix="drawer"
                overlayOpacity={1}
                overlayColor="#717171"
                lockBackgroundScroll
                className={css.drawer}
            >
                <div className={css.wrapperBurgerMenu}>
                    <button
                        type="button"
                        className={css.closeButton}
                        onClick={toggleOpenBurgerMenu}
                        aria-label="Close"
                    >
                        <svg className={css.closeIcon} aria-hidden="true">
                            <use xlinkHref="/svgIcon/icon.svg#icon-close"></use>
                        </svg>
                    </button>
                    <ul className={css.burgerLinkList}>
                        {linkItem}
                    </ul>
                    <div className={css.burgerNameLanguage}>RU/
                        UA</div>
                </div>
            </Drawer>
        </div>
    )
}
export default Burger;