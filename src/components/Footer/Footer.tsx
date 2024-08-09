import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterSocialLinks from './FooterSocialLinks';
import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles['b-footer']}>
            <div className={styles['b-footer__container']}>
                <FooterBrand />
                <FooterLinks />
                <FooterSocialLinks />
            </div>
        </footer>
    );
}
