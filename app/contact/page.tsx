import React from 'react'
import Navbar from '@/components/Navbar'

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center flex-col h-screen'>
                    <h1 className='text-3xl font-medium'>Contact</h1>
                    <div className='w-full h-[.01rem] bg-black mt-2'></div>
                    <p className='font-mono'>email</p>
                    <p className='font-mono'>github</p>
                    <p className='font-mono'>linkedin</p>
                    <div className='w-full h-[.01rem] bg-black mt-2'></div>
                </div>
            </div>
        </div>
    );
}