import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobApplication } from '../../redux/actions/jobApplicationAction'

const JobApplicationForm = () => {


    const dispatch = useDispatch()

    const { error, message } = useSelector(state => state.jobApplication)


    const [fullname, setFullname] = useState("")
    const [email, setemail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [linkedInProfile, setlinkedInProfile] = useState("")
    const [city, setCity] = useState("")

    const formSubmit = (e) => {
        e.preventDefault()

        dispatch(jobApplication(fullname, email, phoneNo, linkedInProfile, city))

    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-8">Apply Now</h2>
                <div className='flex gap-2 items-center py-4'>
                    <span className='text-xl font-bold' >Note : </span>
                    <p className='font-semibold text-red-500'>  All Fields Are Required*</p></div>
                <form onSubmit={formSubmit} className="space-y-8">
                    <div>
                        <label for="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                        <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" id="fullname" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="abc@gmail.com" required />
                    </div>

                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                        <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} type="number" id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+1 00000000000" required />
                    </div>
                    <div>
                        <label for="linkedIn" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">LinkedIn Profile URL</label>
                        <input value={linkedInProfile} onChange={(e) => setlinkedInProfile(e.target.value)} type="text" id="linkedIn" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="LinkedIn Profile Link/URL" required />
                    </div>
                    <div>
                        <label for="citty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                        <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeHolder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="City" required />
                    </div>

                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Submit Application</button>
                </form>
            </div>
        </section>
    )
}

export default JobApplicationForm