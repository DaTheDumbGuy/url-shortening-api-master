import styles from '../header.module.scss';

export default function Navigation() {
    return (
        <nav className={styles['b-header__navigation']}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}
