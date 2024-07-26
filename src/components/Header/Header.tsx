import AuthButtonsContainer from "./Navigation/AuthButtonsContainer/AuthButtonsContainer";
import Navigation from "./Navigation/Navigation";
import styles from './header.module.scss';
import bars from '../../assets/images/icon-bars.svg';
export default function Header(){
    return(
        <header className={styles['b-header']}>
            <h1>Shortly</h1>
            <Navigation/>
            <AuthButtonsContainer/>
            <div className={styles['b-header__bars']}>
                <img src={bars} alt="" />
            </div>
        </header>
    )
}