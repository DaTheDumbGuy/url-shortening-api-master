import CallToActionSection from "./CallToActionSection/CallToActionSection"
import IntroSection from "./IntroSection/IntroSection"
import ShortenSection from "./ShortenSection/ShortenSection"
import StatisticsSection from "./StatisticsSection/StatisticsSection"
import styles from './main.module.scss';

export default function Main(){
    return(
        <main className={styles['b-main']}>
            <IntroSection/>
            <ShortenSection/>
            <StatisticsSection/>
            <CallToActionSection/>
    </main>
    )
}