import Button from "../../shared/components/Button/Button"
import css from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={`${css.wrapperSection} ${"container"}`}>

            <h1 className={css.primaryTitle}>Навчись знаходити прибуткові звʼязки
                та лити на гемблу
                всього за 21 день</h1>
            <div className={css.wrapperHeroDescription}>
                <p className={css.heroDescription}>Даємо можливість опанувати арбітраж трафіку БЕЗКОШТОВНО, заощадити на розхідниках більше 250 доларів та потрапити в нашу команду Mustage Friends</p>

                <div className={css.wrapperBtn}>
                    <Button >Твій успішний старт</Button>
                </div>
            </div>
        </section>
    )
}
export default Hero