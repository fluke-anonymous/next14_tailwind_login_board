import React from 'react'
type Props = {

}
const page = (props: Props) => {
    return (
        <div className='container-fluid flex flex-col lg:flex-row bg-green-900 h-screen'>
            <div className='lg:invisible lg:hidden flex flex-col rounded-b-3xl bg-green-800'>
                <img className='m-auto mt-24' src="/image/login.svg" alt="login" width={180} height={180} />
                <p className='mx-auto my-2 text-white text-3xl italic mb-24 font-serif'>a Board</p>
            </div>
            <div className='flex flex-col gap-2 lg:w-1/2 my-auto lg:px-56'>
                <p className='text-3xl font-bold text-white mx-4 '>Sign in</p>
                <input type="text" name="username" id="username" className='rounded-lg py-3 px-2 mx-4' placeholder='Username' />
                <button className='rounded-lg bg-green-600 py-3 mx-4 text-white'>Sign In</button>
            </div>
            <div className='lg:visibled flex flex-col rounded-l-3xl w-1/2 bg-green-800'>
                <img className='m-auto mt-64' src="/image/login.svg" alt="login" width={180} height={180} />
                <p className='mx-auto my-2 text-white text-3xl italic mb-96 font-serif'>a Board</p>
            </div>
        </div>
    )
}

export default page