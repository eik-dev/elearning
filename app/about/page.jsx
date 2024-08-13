export default function Trainings() {
    return (
        <><><><div
            className="relative w-full h-[33vh] md:h-screen bg-cover bg-center flex flex-col justify-end"
            style={{ backgroundImage: "url('image3.jpeg')" }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative z-10 p-16 text-center w-60% text-white">
                <h1 className="text-3xl">About Us</h1>
                <p className="mt-2">
                    About Environmental conservation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div><div>
                <div>
                    <h1 className="flex justify-center p-10 text-xl">Our Partners</h1>
                    <div className="flex justify-center items-center space-x-14 p-10">
                        <img src="/nema.png" alt="partner 1" className="max-w-[150px] h-auto" />
                        <img src="/linkedin.png" alt="partner 3" className="w-auto min-h-[150px]" />
                        <img src="/un.png" alt="partner 2" className="max-w-[150px] h-auto" />
                    </div>
                </div>

            </div></><div>
                <div className="relative h-full md:h-screen bg-cover bg-center flex justify-center items-center space-x-12" style={{ backgroundImage: "url('image2.jpeg')" }}>

                    {/* Overlay*/}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="p-8 bg-gradient-to-t from-black/40 to-black text-center flex flex-col justify-center h-80 w-60 rounded-3xl ">
                        <h1 className="text-white text-xl font-bold p-6">Mission</h1>
                        <p1 className="text-white">To empower individuals and organizations with the knowledge, skills, and passion needed to protect and sustain our natural environment for current and future generations.</p1>
                    </div>
                    <div className="flex justify-center items-center h-52 w-60 rounded-2xl bg-gradient-to-t from-black/40 to-black">
                        <h1 className="text-white text-2xl font-bold">Vision</h1>
                    </div>
                    <div className='flex justify-center items-center h-52 w-60 rounded-2xl bg-gradient-to-t from-black/40 to-black'>
                        <h1 className="text-white text-2xl font-bold">Values</h1>
                    </div>
                </div>
            </div></><div>
                <div className="bg-black p-16 flex justify-center items-center space-x-16">
                    <div className="bg-gradient-to-b from-black/40 to-gray-700 h-72 w-56 rounded-xl flex flex-col items-center space-y-8">
                        <img src="instructor1.jpeg" alt="instructor picture" className="rounded-full h-14 w-14"/>
                        <p2 className="text-gray-400 text-center">their rank. name</p2>
                        <p2 className="text-gray-300 text-center text-10px">short text from them under 50 words</p2>
                    </div>
                    <div className="bg-gradient-to-b from-black/40 to-gray-700 h-72 w-56 rounded-xl flex flex-col items-center space-y-8">
                        <img src="instructor1.jpeg" alt="instructor picture" className="rounded-full h-14 w-14"/>
                        <p2 className="text-gray-400 text-center">their rank. name</p2>
                        <p2 className="text-gray-300 text-center text-10px">short text from them under 50 words</p2>
                    </div>
                    <div className="bg-gradient-to-b from-black/40 to-gray-700 h-72 w-56 rounded-xl flex flex-col items-center space-y-8">
                        <img src="instructor1.jpeg" alt="instructor picture" className="rounded-full h-14 w-14"/>
                        <p2 className="text-gray-400 text-center">their rank. name</p2>
                        <p2 className="text-gray-300 text-center text-10px">short text from them under 50 words</p2>
                    </div>
                    <div className="bg-gradient-to-b from-black/40 to-gray-700 h-72 w-56 rounded-xl flex flex-col items-center space-y-8">
                        <img src="instructor1.jpeg" alt="instructor picture" className="rounded-full h-14 w-14"/>
                        <p2 className="text-gray-400 text-center">their rank. name</p2>
                        <p2 className="text-gray-300 text-center text-10px">short text from them under 50 words</p2>
                    </div>
                </div>
                </div></>
    );
}


