import React from 'react'
import Head from 'next/head';
import HamburgerMenu from './HamburgerMenu';
type Props = {
    children: React.ReactNode
}
const index = ({ children }: Props) => {
    return (
        <main className="container-fluid justify-end items-end bg-[#BBC2C0]">
            <HamburgerMenu />
            <div className='lg:ml-64'>
            {children}
            </div>
        </main>
    )
}

export default index