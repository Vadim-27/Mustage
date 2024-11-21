import Header from "../modules/Header/Header";
import Hero from "../modules/Hero/Hero";
import Advantages from "../modules/Advantages/Advantages";
import Invitation from "../modules/Invitation/Invitation";
import OurServices from "../modules/OurServices/OurServices";

import css from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div>
            <div className={css.wrapper}>
            <Header/>
            <Hero />
                <Advantages />
            </div>
            <Invitation />
            <OurServices/>
        </div>
    )
}

export default HomePage;