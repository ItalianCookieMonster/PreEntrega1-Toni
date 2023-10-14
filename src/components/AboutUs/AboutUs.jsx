/* eslint-disable react/no-unescaped-entities */

// Other components
import HeroAbout from "../HeroSection/HeroAbout/HeroAbout"
import WelcomeSection from "./WelcomeSection/WelcomeSection"
import OurCommitementSection from "./OurCommitementSection/OurCommitementSection"
import OurTeamSection from "./OurTeam/OurTeam"
import JoinUs from "./JoinUs/JoinUs"

//Styles
import './AboutUs.css'



const AboutUs = () => {
    return (
        <>
            <HeroAbout />
            <WelcomeSection />
            <OurCommitementSection />
            <OurTeamSection />
            <JoinUs/>
        </>
    )
}

export default AboutUs