import React from 'react'
import Layout from '@/components/layout/index'
type Props = {

}
const page = (props: Props) => {
    const selectOption = [
        'History',
        'Food',
        'Pets',
        'Health',
        'Fashion',
        'Exercise',
        'Others'
    ]
    const blogs = [
        {
            user: 'Wittawat',
            title: 'The Beginning of the End of the World',
            description: 'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.',
            commentAmount: 32,
        },
        {
            user: 'Wittawat',
            title: 'The Beginning of the End of the World',
            description: 'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.',
            commentAmount: 32,
        },
        {
            user: 'Wittawat',
            title: 'The Beginning of the End of the World',
            description: 'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.',
            commentAmount: 32,
        },
        {
            user: 'Wittawat',
            title: 'The Beginning of the End of the World',
            description: 'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.',
            commentAmount: 32,
        },
        {
            user: 'Wittawat',
            title: 'The Beginning of the End of the World',
            description: 'The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.',
            commentAmount: 32,
        },
    ]
    return (
        <Layout>
            <div className='m-2 block w-full'>
                <form className="max-w-md flex flex-row w-full">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>
                    <div className='flex w-full'>
                        <select name="selectSearch" id="selectSearch" className='py-2 px-3 mx-2 rounded-lg border border-gray-200 '>
                            {
                                selectOption && selectOption.map((item, index) => {
                                    return (<option key={index} value={item}>{item}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className='flex'>
                        <button className='rounded-lg bg-green-600 px-4 py-2 text-white  mx-2'>Create+</button>
                    </div>
                </form>
                <div className='rounded-xl bg-white my-2'>
                    {
                        blogs && blogs.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col p-5 gap-2 border-b-2 border-gray-400'>
                                    <div className='flex flex-row'>
                                        <img src="/image/profile.svg" alt="profile" width={40} height={40} />
                                        <p className='my-2 mx-1 text-gray-500 font-bold'>{item.user}</p>
                                    </div>
                                    <div>
                                        <div className='w-fit bg-[#e7e5e5] rounded-3xl py-2 px-4 text-gray-500'>
                                            History
                                        </div>
                                    </div>
                                    <div className='text-xl font-bold'>
                                        {item.title}
                                    </div>
                                    <div className='text-sm truncate'>
                                        {item.description}
                                    </div>
                                    <div className='flex flex-row my-2'>
                                        <img src="/icon/comment.svg" alt="comment" width={28} height={28} />
                                        <p className='text-gray-400 m-2'>{item.commentAmount}</p>
                                        <p className='text-gray-400 m-2'>Comments</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}


export default page