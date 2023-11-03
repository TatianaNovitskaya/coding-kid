import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <header className={" bg-[#00235C]"}>
                <div className={"container px-4 mx-auto flex flex-col lg:flex-row justify-between items-center py-[5.5rem] relative"}>
                    <Image src={"/stars.png"} alt={"stars"} width={363} height={471}
                           className={"absolute top-0 left-0"}/>
                    <div className="z-10">
                        <div className={"flex items-center"}>
                            <p className={"text-[#00235C] border border-white font-extrabold text-[1.41rem] bg-white leading-[1.10rem] tracking-[.028rem] p-[0.59rem]"}>KCA</p>
                            <span
                                className={"text-white border border-white uppercase font-extrabold block text-[0.79rem] leading-[1.10rem] tracking-[.016rem] bg-[#00235C] p-[0.59rem]"}>Kids` Coding Adventure</span>
                        </div>
                        <div className="">
                            <address className={"text-white my-[1.88rem] not-italic"}>
                                2972 Somename Rd. Any city, Any country 85486
                                <Link href={"mailto:webmaster@somedomain.com"} className={"mt-[1.88rem] block"}>webmaster@somedomain.com</Link>
                            </address>
                        </div>
                        <div className="flex items-center">
                            <Link href={"https://www.instagram.com/"}>
                                <Image src={"/svg/instagram.svg"} alt={"instagram"} width={24} height={24}
                                       className={"mr-[2rem]"}/>
                            </Link>
                            <Link href={"https://www.youtube.com/"}>
                                <Image src={"/svg/youtube.svg"} alt={"youtube"} width={24} height={24}
                                       className={"mr-[2rem]"}/>
                            </Link>
                            <Link href={"https://www.facebook.com/"}>
                                <Image src={"/svg/facebook.svg"} alt={"facebook"} width={24} height={24}
                                       className={"mr-[2rem]"}/>
                            </Link>
                            <Link href={"https://www.google.com/"}>
                                <Image src={"/svg/google.svg"} alt={"google"} width={24} height={24}/>
                            </Link>
                        </div>
                    </div>
                    <nav className={"hidden lg:block"}>
                        <ul className={"flex text-white text-base "}>
                            <li className={"mr-[5.75rem]"}><Link href={"#home"} className={"text-[#116CFF] text-[1.125rem] font-medium"}>Company</Link>
                                <ul>
                                    <li className={"mt-[1.28rem]"}><Link href={"#why-we"}>About</Link></li>
                                    <li className={"mt-[1.28rem]"}><Link href={"#contacts"}>Contact</Link></li>
                                    <li className={"mt-[1.28rem]"}><Link href={"#contacts"}>FAQ</Link></li>
                                </ul>
                            </li>
                            <li className={"mr-[5.75rem]"}><Link href={"#programs"} className={"text-[#116CFF] text-[1.125rem] font-medium"}>Programs</Link>
                                <ul>
                                    <li className={"mt-[1.28rem]"}><Link href={"#programs"}>Beginner Class</Link></li>
                                    <li className={"mt-[1.28rem]"}><Link href={"#programs"}>Intermediate Class</Link></li>
                                    <li className={"mt-[1.28rem]"}><Link href={"#programs"}>Expert Class</Link></li>
                                </ul>
                            </li>
                            <li className={"lg:mr-0 mr-[5.75rem]"}><Link href={"#contacts"} className={"text-[#116CFF] text-[1.125rem] font-medium"}>Information</Link>
                                <ul>
                                    <li className={"mt-[1.28rem]"}><Link href={"#programs"}>Registration</Link></li>
                                    <li className={"mt-[1.28rem]"}><Link href={"#programs"}>Free Trial Class</Link></li>
                                    <li className={"mt-[1.28rem]"}><Link href={"#programs"}>Teachers</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
