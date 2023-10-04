import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl md:text-7xl font-bold text-3xl mb-4 text-blue-600">Discover Insights

                    </h1>
                    <p className="mb-8 leading-relaxed max-w-xl ">Unlock the power of visual storytelling with our expert Graphic Design Service. From aptivating logos to stunning marketing materials,</p>
                    <div className="flex justify-center">
                    <button className="inline-flex border-2 border-black rounded-2xl bg-white border-solid px-8 focus:outline-none text-blue-600 font-semibold hover:bg-blue-400 hover:text-white text-lg">Let's Talk</button>


                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="ecom-banner.jpg" />
                </div>
            </div>
        </section>
    )
}

export default Hero