import styles from './statisticsSection.module.scss';
import brandRecogImg from '../../../assets/images/icon-brand-recognition.svg';
import detailedRecImg from '../../../assets/images/icon-detailed-records.svg';
import fullyCustomImg from '../../../assets/images/icon-fully-customizable.svg';

export default function StatisticsSection() {
    return (
        <article className={styles['b-statisticsArticle']}>
            <h2 className={styles['b-statisticsArticle__title']}>Advanced Statistics</h2>
            <p className={styles['b-statisticsArticle__description']}>
                Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
            <div className={styles['b-statisticsArticle__sections']}>
                <div className={styles['b-statisticsArticle__lineThrough']}></div>
                <section className={styles['b-statisticsArticle__section']}>
                    <img src={brandRecogImg} alt="" />
                    <div className={styles['b-statisticsArticle__section__body']}>
                        <h3 className={styles['b-statisticsArticle__section__body__sectionTitle']}>Brand Recognition</h3>
                        <p className={styles['b-statisticsArticle__section__body__sectionContent']}>
                            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.
                        </p>
                    </div>
                </section>
                <section className={styles['b-statisticsArticle__section']}>
                    <img src={detailedRecImg} alt="" />
                    <div className={styles['b-statisticsArticle__section__body']}>
                        <h3 className={styles['b-statisticsArticle__section__body__sectionTitle']}>Detailed Records</h3>
                        <p className={styles['b-statisticsArticle__section__body__sectionContent']}>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </div>
                </section>
                <section className={styles['b-statisticsArticle__section']}>
                    <img src={fullyCustomImg} alt="" />
                    <div className={styles['b-statisticsArticle__section__body']}>
                        <h3 className={styles['b-statisticsArticle__section__body__sectionTitle']}>Fully Customizable</h3>
                        <p className={styles['b-statisticsArticle__section__body__sectionContent']}>
                            Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                        </p>
                    </div>
                </section>
            </div>
    </article>
    );
}
