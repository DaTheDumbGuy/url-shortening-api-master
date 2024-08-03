import styles from './Footer.module.scss';

export default function FooterBrand() {
    return (
        <div className={styles['b-footer__brandName']}>
            <h2>Shortly</h2>
        </div>
    );
}
