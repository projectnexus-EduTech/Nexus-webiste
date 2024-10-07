import React from 'react'
import Background from "../../components/ui/Background"
import Button2 from '../Button2/MagicBtn'

export default function LiveClass() {
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <Background />
            {/*  Class Details */}
            <section className="relative z-10 py-20 px-6">
                <h2 className="text-4xl font-bold mb-12 text-center backdrop-blur-md">Today Class Details</h2>
                <div className="p-6 rounded-lg bg-white/10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 shadow-lg backdrop-blur-md mx-auto">
                    <h3 className="text-3xl font-bold underline mb-10 text-center">Course Java</h3>

                    {/* Flex container to keep text on the same line */}
                    <div className="flex items-center space-x-2">
                        <h6 className="text-xl font-semibold whitespace-nowrap">Today Topics:</h6>
                        <p>java, c, python, datascience, webdevelopment</p>
                    </div>

                    <div className="flex items-center space-x-4 mt-8">
                        <h6 className="text-xl font-semibold">Time:</h6>
                        <p>7:00PM to 8:00PM</p>
                    </div>

                    <div className="flex items-center space-x-4 mt-8">
                        <h6 className="text-xl font-semibold">Class Link:</h6>
                        <Button2 className="" name={"Click Here"} />
                    </div>


                    {/* <div>
                        <p className='text-center font-semibold mt-10'>" After the session please submit your feedback "</p>
                        <button className='text-center' onClick={() => openModal()}>FeedBack</button>
                    </div> */}
                </div>



            </section>
        </div>
    )
}
