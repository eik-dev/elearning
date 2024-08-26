'use client'
import CountUp from 'react-countup';
import Search from './UI/Search';

export default function Home(){
    return(
        <div>
            {/* with tree */}
            <section className="flex flex-col-reverse md:flex-row md:h-[60vh] gap-y-4">
                <div className="md:w-1/2 bg-primaryLight rounded-br-[3rem] py-2">
                    <div className="md:w-10/12 flex flex-col px-2 md:ml-36 justify-center h-full">
                        <h1 className="font-bold text-2xl md:text-3xl mb-4 text-left">Passion for the environment</h1>
                        <p className="md:w-8/12 text-sm 2xl:text-base font-light mb-10">
                        about Environmental conservation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="bg-secondary text-white font-semibold w-48 py-4 rounded-full mb-4 hover:scale-105">Explore</button>
                        <div>
                            <div></div>
                            <p>Join over <span className="text-secondary font-semibold">{5000}+</span> Students</p>
                        </div>
                    </div>
                </div>
                <div
                className="flex-grow md:bg-[url(/tree.svg)] bg-no-repeat bg-cover bg-center md:absolute bg-rred-950 md:w-2/3 md:h-[70vh] right-0" 
                style={{
                    backgroundSize: '40vw 39vw',
                }}
                >
                    <div className="md:absolute mx-2 lg:top-10 lg:right-48  2xl:top-24 2xl:left-44 bg-black rounded-3xl flex items-center justify-center lg:w-7/12 2xl:w-5/12 h-52  lg:h-72 2xl:h-80">
                        {
                            true?
                            <video src="" className="h-full w-full flex-grow">
                            </video>
                            :
                            <button className="icon-[ei--play] text-white w-16 h-16 hover:scale-110"/>
                        }
                    </div>
                </div>
            </section>
            {/* stats section */}
            <div className="py-16 2xl:pt-24">
                <div className="bg-white flex flex-col gap-y-5 md:flex-row justify-around py-6 px-4 md:px-24 mx-2 md:w-2/3 md:mx-auto rounded-xl">
                    <div className=" text-center">
                        <div className="text-3xl mb-3 font-bold"><CountUp duration={3} end={12620} start={1000}/></div>
                        <p>Happy students</p>
                    </div>
                    <div className="border-r-[1px] border-b-[1px] md:border-b-0 w-4/5 mx-auto md:w-0 border-gray-300  md:block"></div>
                    <div className=" text-center">
                        <div className="text-3xl mb-3 font-bold"><CountUp duration={4} end={206}/></div>
                        <p>Qualified Instructors</p>
                    </div>
                    <div className="border-r-[1px] border-b-[1px] md:border-b-0 w-4/5 mx-auto md:w-0 border-gray-300  md:block"></div>
                    <div className=" text-center">
                        <div className="text-3xl mb-3 font-bold"><CountUp duration={5} end={9}/>/10</div>
                        <p>Overall Approval</p>
                    </div>
                </div>
            </div>
            {/* discover secion */}
            <div className='flex md:flex-col overflow-x-scroll px-2'>
                {
                    [...new Array(4)].map((_,i)=>(
                        <div key={i} className='bg-[#EFF2E9]/40 flex flex-col md:flex-row items-center md:w-2/3 mx-auto gap-4 shadow-lg p-7 2xl:py-9 rounded-lg md:mb-8'>
                            <div className='flex gap-2'>
                                <img className='bg-white rounded-full w-12 2xl:w-14 h-9 2xl:h-14' src="/Icon.svg" alt="" />
                                <h6 className='block md:hidden font-bold text-lg mb-2 text-nowrap w-fit'>Analyzing User Data</h6>
                            </div>
                            <div>
                                <h6 className='hidden md:block font-bold text-xl mb-2'>Analyzing User Data</h6>
                                <p className='md:w-4/5 text-sm text-center md:text-left'>
                                Use of available data to come identify challenges, come up with solutions and implement the said solutions
                                </p>
                            </div>
                            <div className='flex rounded-full bg-secondary px-2 py-3 text-white items-center justify-around text-center w-60 h-fit'>
                                <span className='w-fit flex-grow border-r-[1px] border-white/50'>6 videos</span>
                                <span className='w-fit flex-grow '>3 hours</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* trainings listing secion */}
            <section className='my-20 mx-2'>
                <div className='flex md:justify-around gap-5 overflow-x-scroll'>
                    {
                        [...new Array(3)].map((_,i)=>(
                            <div key={i} className='bg-white rounded-3xl min-w-[90%] md:min-w-96 md:w-96'>
                                <img src="/energy.png" alt="" />
                                <div className='p-5'>
                                    <h5 className='font-semibold text-center mb-4 text-xl text-tertiary'>Energy Management</h5>
                                    <p className='text-sm lg:text-xs 2xl:text-sm leading-loose'>
                                    {
                                        'This one-day course is designed to give delegates an introduction to energy management principles and practical skills which can be applied in a Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis velit id quidem sunt praesentium officiis libero, dolorum tempore, quam provident obcaecati quia quasi! Animi inventore nam magni excepturi modi voluptas!'.slice(0,150)+'...'
                                    }
                                    </p>
                                    <div className='flex flex-col md:flex-row gap-y-2 md:justify-between items-center mt-5'>
                                        <div className='text-tertiary font- text-lg'>Ksh{1000}</div>
                                        <button className='bg-secondary text-white text-sm rounded-full px-4 md:px-7 py-2 md:py-3 hover:scale-105 hover:bg-primary'>Check it out</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='block bg-secondary text-white rounded-full py-4 2xl:py-6 text-sm font-semibold w-60 mx-auto my-16'>View all Courses</button>
            </section>
            {/* partners secion */}
            <section className='flex justify-around md:w-2/3 mx-auto my-20'>
                <img className='w-16 h-20 2xl:w-32 2xl:h-32' src="/nema.png" alt="" />
                <img className='w-28 h-20 2xl:w-44 2xl:h-32' src="/linkedin.png" alt="" />
                <img className='w-20 h-20 2xl:w-40 2xl:h-32' src="/un.png" alt="" />
            </section>
            {/* trainings category secion */}
            <section className='flex flex-col justify-center items-center gap-3 mb-20'>
                <h5 className='text-xl md:text-3xl font-light'>Which training are you looking for?</h5>
                <p className='md:text-xl mb-8'>Find your ideal training and start advancing</p>
                <div className='md:w-1/4 h-10 2xl:h-16'><Search/></div>
            </section>
            {/* contact us secion */}
            <section className=''></section>
        </div>
    )
}