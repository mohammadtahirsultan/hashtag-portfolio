import "./LandingPage.css";

import Header from '../../sections/Header Section/Header'
import Footer from '../../sections/Footer Section/Footer'
import HeroSection from '../../sections/Hero Section/HeroSection'
import FeedbackSection from '../../sections/Feedback Section/FeedbackSection'
import Services from '../../sections/Services Section/Services'
import DevelopmentSection from '../../sections/Web Development Section/DevelopmentSection'
import MarketingSection from '../../sections/Marketing Section/MarketingSection'
import ECommerce from '../../sections/Commerce Section/ECommerce'
import RPSection from '../../sections/Recent Projects Section/RPSection'
import WorkedWithCI_Sec_LP from "../../sections/Worked With Companies Icons/WorkedWithCI_Sec_LP";

function LandingPage() {
  return (
    <div id = "app__wrapper">
    <Header/>
    <HeroSection/>
    <FeedbackSection/>
    <Services/>
    <DevelopmentSection/>
    <MarketingSection/>
    <ECommerce/>
    <RPSection/>
    <WorkedWithCI_Sec_LP/>
    <Footer/>
</div>
  )
}

export default LandingPage