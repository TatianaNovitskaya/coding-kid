"use client"

import Link from "next/link";
import styles from "./header.module.css"
import {useCallback, useState} from "react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleMenu = useCallback(() => {
        setIsNavOpen(!isNavOpen)
    }, [isNavOpen])
    return (
        <>
            <header className={"fixed top-0 left-0 right-0 bg-[#116CFF] backdrop-blur-sm z-50"}>
                <div className={"container px-4 mx-auto flex justify-between items-center py-[1rem]"}>
                    <div className="flex items-center">
                        <p className={"text-[#00235C] font-extrabold text-[1.41rem] bg-white leading-[1.10rem] tracking-[.028rem] p-[0.59rem]"}>KCA</p>
                        <span
                            className={"text-white uppercase font-extrabold block text-[0.79rem] leading-[1.10rem] tracking-[.016rem] bg-[#00235C] p-[0.59rem]"}>Kids` Coding Adventure</span>
                    </div>

                    <nav className={" hidden lg:block"}>
                        <ul className={"flex text-white text-base font-medium"}>
                            <li><Link href={"#home"} className={"lg:mr-[3rem] xl:mr-[5.75rem] hover:font-extrabold"}>Home</Link></li>
                            <li><Link href={"#why-we"} className={"lg:mr-[3rem] xl:mr-[5.75rem] hover:font-extrabold"}>Why We</Link></li>
                            <li><Link href={"#programs"} className={"lg:mr-[3rem] xl:mr-[5.75rem] hover:font-extrabold"}>Programs</Link></li>
                            <li><Link href={"#contacts"} className={"lg:mr-[3rem] xl:mr-[5.75rem] hover:font-extrabold"}>Contact us</Link></li>
                        </ul>
                    </nav>
                    <div className={'lg:hidden'}>
                        <section className="MOBILE-MENU flex">
                            <div
                                className="HAMBURGER-ICON space-y-2"
                                onClick={toggleMenu}
                            >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            </div>

                            <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
                                <div className="absolute top-0 right-0 px-8 py-8" onClick={toggleMenu}>
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"/>
                                        <line x1="6" y1="6" x2="18" y2="18"/>
                                    </svg>
                                </div>
                                <nav className="flex text-white flex-col items-center justify-between">
                                    <Link href="/#home" className={"text-3xl my-3"} onClick={toggleMenu}>Home</Link>
                                    <Link href="/#why-we" className={"text-3xl my-3"} onClick={toggleMenu}>Why We</Link>
                                    <Link href="/#programs" className={"text-3xl my-3"} onClick={toggleMenu}>Programs</Link>
                                    <Link href="/#contacts" className={"text-3xl my-3"} onClick={toggleMenu}>Contact Us</Link>
                                </nav>
                            </div>
                        </section>
                    </div>
                    <button
                        className={"hidden lg:block py-[0.62rem] px-[1.88rem] bg-white text-[#116CFF] font-bold rounded-[0.625rem]"}>Login
                    </button>
                </div>
            </header>
        </>
    )
}
