import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";

export const useDisableBodyScroll = (open) => {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } 
    }, [open]);
};

function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, [])

    const [isMenuOpen, setMenuOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setMenuOpen(false));

    const isOpen = isMenuOpen ? "open" : "";
    useDisableBodyScroll(isOpen);

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-white-400 py-8'>
                <div className='md:float-left flex place-content-between'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            Open Ball
                        </span>
                    </Link>
                    <div className='navigation'>
                        <div ref={ref} className="md:hidden relative float-right text-white">
                            <Hamburger className='hamburger' toggled={isMenuOpen} size={20} toggle={setMenuOpen} />
                        </div>
                        <div className={`navback ${isOpen}`}></div>
                        <div className={`menu ${isOpen}`}>
                            <Link key='about' href='/about'>
                                <div className='text-white mt-10 text-center text-3xl font-semibold cursor-pointer'>
                                    About
                                </div>
                            </Link>
                            {categories.map((category) => (
                                <Link key={category.slug} href={`/category/${category.slug}`}>
                                    <div className='text-white mt-10 text-center text-2xl font-semibold cursor-pointer'>
                                        {category.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                    <Link key='about' href='/about'>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                            About
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
