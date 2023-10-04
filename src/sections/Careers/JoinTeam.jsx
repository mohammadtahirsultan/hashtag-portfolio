import React from 'react'
import ApplyLink from './ApplyLink'

const JoinTeam = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4 ">
                        <h2 className='font-semibold md:text-5xl text-2xl text-blue-600 text-center py-6 w-2/3 mx-auto'>Join the dream team now</h2>

                        <ApplyLink />


                    </div>
                </div>

            </section>
        </>
    )
}

export default JoinTeam