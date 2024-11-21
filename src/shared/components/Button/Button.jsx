// import { Children } from "react";
import css from './Button.module.scss'

const Button = ({ children }) => {
    console.log("Children", children)
    return (
        <div className={css.wrapperComponent}>
            <div className={css.border}></div>
                <button type="button" className={css.btn}>{children}</button>
            
        </div>
    )
}
export default Button;