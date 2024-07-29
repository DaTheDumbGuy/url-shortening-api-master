import AuthButtonsContainer from "./Navigation/AuthButtonsContainer/AuthButtonsContainer";
import Navigation from "./Navigation/Navigation";
import styles from './header.module.scss';
import bars from '../../assets/images/icon-bars.svg';
import { useState } from "react";

export default function Header(){
    const [toggle, setToggle] = useState(false);

    return(
        <header className={styles['b-header']}>
            <h1>Shortly</h1>
            <div className={`${styles['b-header__navigation']} ${styles[`${toggle ? 'b-header__navigation--show' : ""}`]}`}>
                <Navigation/>
                <AuthButtonsContainer/>
            </div>
            <button className={styles['b-header__bars']} onClick={()=> setToggle(!toggle)}>
                <img src={bars} alt="" />
            </button>
        </header>
    )
}