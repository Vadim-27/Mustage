import ourServicesData from "../../shared/services/ourServicesData";
import css from './OurServices.module.scss';
import Button from "../../shared/components/Button/Button";

const OurServices = () => {
    const itemsServices = ourServicesData?.length ? ourServicesData.map(({ id, name, description }) => {
        return (
            <li className={css.ourServicesItem} key={id}>
                <svg className={css.icon} aria-hidden="true">
                    <use xlinkHref="/svgIcon/icon.svg#icon-Ellipse-4"></use>
                </svg>
                <h2 className={css.title}>{name}</h2>
                <p className={css.description}>{description}</p>
            </li>
        )
    }) : <p>щось пішло не так</p>

    return (
        <section className={`${css.wrapperSection} ${"container"}`}>
            <ul className={css.ourServicesList}>
                {itemsServices}
            </ul>
            <div className={css.wrapperBtn}>
                <Button >Твій успішний старт</Button>
            </div>
        </section>
    )
}
export default OurServices;