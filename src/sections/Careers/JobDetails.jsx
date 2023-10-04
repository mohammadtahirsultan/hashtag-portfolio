import React from 'react'
import JobBanner from './JobBanner'
import ContactUsComponent from '../../components/Contact Us/ContactUsComponent'
import Footer from '../Footer Section/Footer'
import Header from '../Header Section/Header'
import JobApplicationForm from './JobApplicationForm'

const JobDetails = () => {
    return (
        <>
            <Header />
            <JobBanner />
            <div className='px-8 md:px-52 py-16'>
                <div className='flex flex-col gap-4'>
                    <h4 className='font-bold'>Job Brief</h4>
                    <p>The HR Intern will support the HR team in various administrative and operational tasks to gain hands-on experience in human resources functions and contribute to the smooth operation of the HR department.</p>
                    <h4 className='font-bold'>Job Brief</h4>
                    <p>The HR Intern will support the HR team in various administrative and operational tasks to gain hands-on experience in human resources functions and contribute to the smooth operation of the HR department.</p>
                </div>


                <div className='flex py-4 md:py-12 flex-col gap-4'>
                    <h4 className='font-bold'>Responsibilities:</h4>
                    <ul className='flex flex-col list-disc md:pl-16'>
                        <li>Assist the TA team in initial screening of the candidates for technical and non technical positions </li>
                        <li>Convert resumes of shortlisted candidates to VentureDive's profile format for further processing
                        </li>
                        <li>Assist in scheduling interviews of the shortlisted candidates
                        </li>
                    </ul>

                </div>
                <div className='flex py-4 md:py-0 flex-col gap-4'>
                    <h4 className='font-bold'>Requirements:</h4>
                    <ul className='flex flex-col list-disc md:pl-16'>
                        <li>Bachelor's in Human Resource Management or similar field, or students in their last semester</li>
                        <li>Should be hands on in the microsoft suite (powerpoint, word, excel, etc.)
                        </li>
                        <li>Excellent verbal and written communication skills.
                        </li>
                        <li>Ability to work independently
                        </li>
                        <li>Ability to manage and handle multiple tasks
                        </li>
                    </ul>

                </div>
                <div className='flex flex-col py-6 gap-4'>
                    <p className='font-bold '>Are you ready to put your ideas into products and solutions that will be used by millions?
                    </p>
                    <p>You will find VentureDive to be a quick pace, high standards, fun and a rewarding place to work at. Not only will your work reach millions of users world-wide, you will also be rewarded with competitive salaries and benefits. If you think you have what it takes to be a VenDian, come join us ... we're having a ball!
                    </p>
                </div>
            </div>

            <JobApplicationForm />
            <ContactUsComponent />
            <Footer />
        </>
    )
}

export default JobDetails