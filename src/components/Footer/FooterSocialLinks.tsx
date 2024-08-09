import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import pinterestIcon from '../../assets/images/icon-pinterest.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import styles from './Footer.module.scss';

export default function FooterSocialLinks() {
    return (
        <div className={styles['b-footer__container__socialLinks']}>
            <ul>
                <li><a href="#"><img src={facebookIcon} alt="Facebook"/></a></li>
                <li><a href="#"><img src={twitterIcon} alt="Twitter"/></a></li>
                <li><a href="#"><img src={pinterestIcon} alt="Pinterest"/></a></li>
                <li><a href="#"><img src={instagramIcon} alt="Instagram"/></a></li>
            </ul>
        </div>
    );
}
