import CallToActionSection from "./CallToActionSection/CallToActionSection"
import IntroSection from "./IntroSection/IntroSection"
import ShortenSection from "./ShortenSection/ShortenSection"
import StatisticsSection from "./StatisticsSection/StatisticsSection"

export default function Main(){
    return(
        <main>
            <IntroSection/>
            <ShortenSection/>
            <StatisticsSection/>
            <CallToActionSection/>
    </main>
    )
}