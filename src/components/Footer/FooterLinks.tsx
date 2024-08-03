import styles from './Footer.module.scss';

export default function FooterLinks() {
    return (
        <div className={styles['b-footer__links']}>
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Link Shortening</a></li>
                <li><a href="#">Branded Links</a></li>
                <li><a href="#">Analytics</a></li>
            </ul>
            <ul>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Support</a></li>
            </ul>
            <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}
