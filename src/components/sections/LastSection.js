import Image from "next/image";
import Link from "next/link";

export default function LastSection() {
    return (
        <>
            <section id={"home"} className={"bg-[#116CFF]"}>
                <div className={"container px-4 mx-auto flex flex-col lg:flex-row justify-between items-center py-[5.62rem]"}>
                    <div className={"w-full lg:w-[45%]"}>
                        <Image src={"/svg/undraw_remotely.svg"} alt={"remote"} width={632} height={387} className={"mx-auto"}/>
                    </div>
                    <div className={"w-full lg:w-1/2 text-white text-center lg:text-left mt-[2rem] lg:mt-0"}>
                        <h2 className={"text-[2.725rem] lg:text-[3.125rem] leading-[3rem] lg:leading-[5rem] font-extrabold"}>Get Started Today!</h2>
                        <p className={"mt-4 text-[1.5rem] leading-[2.025rem] font-medium"}>Join the Kids&apos; Coding
                            Adventure</p>
                        <p className={"mt-4 w-full lg:w-[85%] text-[1rem] leading-[1.75rem]"}>Ready to embark on a coding
                            adventure with us? Enroll your child today and watch them develop essential skills that will
                            set them up for a bright future. Let&apos;s make coding a fun and rewarding experience for your
                            little one!</p>
                        <Link href={"/#contacts"}
                            className={"mr-[1.5rem] inline-block mt-[2rem] py-[0.94rem] px-[2.31rem] bg-white text-[#116CFF] font-bold rounded-[0.625rem]"}>Book
                            a Class
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}
