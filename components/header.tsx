'use client';

import React, { useState, useEffect } from 'react'
export default function Header() {

    const [mounted, setMounted] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    // if(!mounted) return null;
    return (
        <div className="flex items-center h-[60px] text-right m-0 right-0 left-0 top-0 font-medium">
            {/* <img className='mr-[16px]' src="https://cdn.discordapp.com/attachments/774650675593609268/1136331735265722408/Bot_logo_witout_back.png" alt="logo" width="40" /> */}
            {/* <a className='pl-2' href="/">Home</a> */}
            <div className="flex-auto text-center justify-evenly text-lg ">
                <a href="/" className="p-5 hover:underline">
                    <span className=''>Home</span>
                </a>
                <a href="/projects" className="p-5 hover:underline">
                    <span className=''>Projects</span>
                </a>

                <a href="/experience" className='p-5 hover:underline'>
                    <span>Experience</span>
                </a>

                <a href="/contact" className='p-5 hover:underline'>
                    <span>Contact</span>
                </a>
            </div>

        </div>
    )
}