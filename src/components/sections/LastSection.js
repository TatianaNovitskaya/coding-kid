import Image from "next/image";
import Link from "next/link";

export default function LastSection() {
    return (
        <>
            <section id={"home"} className={"bg-[#116CFF]"}>
                <div className={"container mx-auto flex justify-between items-center py-[5.62rem]"}>
                    <div className={"w-[45%]"}>
                        <Image src={"/svg/undraw_remotely.svg"} alt={"remote"} width={632} height={387}/>
                    </div>
                    <div className={"w-1/2 text-white"}>
                        <h2 className={" text-[3.125rem] leading-[5rem] font-extrabold"}>Get Started Today!</h2>
                        <p className={"mt-4 text-[1.5rem] leading-[2.025rem] font-medium"}>Join the Kids' Coding
                            Adventure</p>
                        <p className={"mt-4 w-[85%] text-[1rem] leading-[1.75rem]"}>Ready to embark on a coding
                            adventure with us? Enroll your child today and watch them develop essential skills that will
                            set them up for a bright future. Let's make coding a fun and rewarding experience for your
                            little one!</p>
                        <button
                            className={"mr-[1.5rem] mt-[2rem] py-[0.94rem] px-[2.31rem] bg-white text-[#116CFF] font-bold rounded-[0.625rem]"}>Book
                            a Class
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}
