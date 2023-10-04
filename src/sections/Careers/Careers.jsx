import React from 'react'
import LatestBlogs from '../Blogs Section/LatestBlogs'
import ThreeCards from './ThreeCards'
import JoinTeam from './JoinTeam'
import CareerHero from './CareerHero'
import Header from '../Header Section/Header'
import Footer from '../Footer Section/Footer'
import ApplyLink from './ApplyLink'
import BGBlackBanner from './BGBlackBanner'
import ContactUsComponent from '../../components/Contact Us/ContactUsComponent'

const Careers = () => {
    return (
        <>
            <Header />
            <div className="flex-grow p-4 ">
                <div className="grid grid-cols-1  md:pl-16 pt-2">
                    <CareerHero />
                </div>
            </div>
          
            <ThreeCards />
            <BGBlackBanner />
            <JoinTeam />
            <ContactUsComponent />
            <Footer />
        </>
    )
}

export default Careers