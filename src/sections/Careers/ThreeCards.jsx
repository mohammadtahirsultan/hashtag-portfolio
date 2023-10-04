import React from 'react'

const ThreeCards = () => {
    return (
        <>
            <section className="text-gray-600 md:px-16 body-font">
                <div className="container px-6 py-12 mx-auto ">
                        <h3 className='py-8 text-3xl font-semibold text-center '>Employment At HashtagWeb Offers Adaptability, Security, And Ongoing Growth
                        </h3>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-[24rem] md:h-36 w-full object-cover object-center" id='thekKaro' src="1.svg" alt="card" />
                                <div className="flex gap-1 flex-col py-2">
                                    <h2 className='text-center text-lg md:text-xl text-blue-600 font-bold'>Thriving</h2>
                                    <p className="leading-relaxed mb-3 md:w-[90%] md:ml-8">A rich platform of opportunities and learning that gives room for creativity and innovation, resulting in fast-tracking your development as a leader.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-[24rem] md:h-36 w-full object-cover object-center" id='thekKaro' src="2.svg" alt="card" />
                                <div className="flex gap-1 flex-col py-2">
                                    <h2 className='text-center text-lg md:text-xl text-blue-600 font-bold'>Empowering</h2>
                                    <p className="leading-relaxed mb-3 md:w-[90%] md:ml-8">Driving strength and diversity by empowering women on every step of their career by providing the best healthcare and facilities on the house for the growing female workforce.</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-[24rem] md:h-36 w-full object-cover object-center" id='thekKaro' src="3.svg" alt="card" />
                                <div className="flex gap-1 flex-col py-2">
                                    <h2 className='text-center text-lg md:text-xl text-blue-600 font-bold'>Rewarding</h2>
                                    <p className="leading-relaxed mb-3 md:w-[90%] md:ml-8">Equitable rewards by competitive bonuses and increments, along with a considerate approach to work-life balance, stress-free zones, and more.</p>

                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}

export default ThreeCards