import Image from "next/image";
import Link from "next/link";

export default function MainSection() {
    return (
        <>
            <section id={"home"} className={"bg-[#116CFF]"}>
                <div className={"container mx-auto flex justify-between items-center py-[9.62rem]"}>
                    <div className={"w-1/2 text-white"}>
                        <h1 className={" text-[3.125rem] leading-[5rem] font-extrabold"}>Welcome to Kids' Coding
                            Adventure!</h1>
                        <p className={"mt-4 text-[1.5rem] leading-[2.025rem] font-medium"}>Unlock the World of
                            Creativity and Innovation through Coding</p>
                        <p className={"mt-4 w-[85%] text-[1rem] leading-[1.75rem]"}>At Kids' Coding Adventure, we
                            believe in empowering the next generation of innovators. Our fun and engaging coding
                            programs are designed to introduce children to the exciting world of technology and
                            programming. Join us on a journey of creativity, problem-solving, and endless
                            possibilities!</p>
                        <button
                            className={"mr-[1.5rem] mt-[2rem] py-[0.94rem] px-[2.31rem] bg-white text-[#116CFF] font-bold rounded-[0.625rem]"}>Book
                            a Class
                        </button>
                        <Link href={"#"}
                              className={"py-[0.94rem] px-[2.31rem] border border-white text-white font-medium rounded-[0.625rem]"}>Learn
                            more</Link>
                    </div>
                    <div className={"w-1/2"}>
                        <Image src={"/svg/online-learning.svg"} alt={"remote"} width={632} height={387}/>
                    </div>
                </div>

            </section>
        </>
    )
}
