import styles from './introSection.module.scss';
import introImg from '../../../assets/images/illustration-working.svg';
export default function IntroSection() {
    return (
        <article className={styles['b-introSection']}>
            <section className={styles['b-introSection__getStarted']}>
                <h2>More than just shorter links</h2>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </section>
            <section className={styles['b-introSection__imgContainer']}>
                <img src={introImg} alt="Illustration of a person using a computer"/>
            </section>
        </article>
    );
}
