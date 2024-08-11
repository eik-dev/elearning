export default function Trainings(){
    return(
        <div className="mx-2 mt-12">
            <div className="mb-6 flex gap-20">
                <p>Home / Trainings</p>
                <p>{300}+ Trainings</p>
            </div>
            <div className="flex gap-x-8">
                <div className="hidden md:block w-1/5 bg-white p-3 rounded-xl h-96">
                    <h6>Categories</h6>
                </div>
                <div className="flex-grow grid grid-cols-3 gap-12 max-h-[90vh] overflow-y-scroll pb-20">
                    {
                        [... new Array(12)].map((_,i) => {
                            return(
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
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}