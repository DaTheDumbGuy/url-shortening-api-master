import styles from '../../header.module.scss';

export default function AuthButtonsContainer() {
    return (
        <div className={styles['b-header__navigation__authButtonsContainer']}>
            <button className={styles['b-header__navigation__authButtonsContainer__loginButton']}>Login</button>
            <button className={styles['b-header__navigation__authButtonsContainer__signInButton']}>Sign In</button>
        </div>
    );
}
