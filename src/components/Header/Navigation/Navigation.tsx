import styles from '../header.module.scss';

export default function Navigation() {
    return (
        <nav className={styles['b-header__navigation__links']}>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        </nav>
    );
}
