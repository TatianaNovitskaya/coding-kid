import Image from "next/image";
import Link from "next/link";

export default function MainSection() {
    return (
        <>
            <section id={"home"} className={"bg-[#116CFF]"}>
                <div className={"container mx-auto flex justify-between items-center py-[9.62rem]"}>
                    <div className={"w-1/2 text-white"}>
                        <h1 className={" text-[3.125rem] leading-[5rem] font-extrabold"}>Learn Coding For Kids From Anywhere</h1>
                        <p className={"mt-4 w-[70%] text-[1.125rem] leading-[2.025rem] font-medium"}>Discover the best coding course for your kids. Learn Coding from basic.</p>
                        <button className={"mr-[1.5rem] mt-[2rem] py-[0.94rem] px-[2.31rem] bg-white text-[#116CFF] font-bold rounded-[0.625rem]"}>Book a Class</button>
                        <Link href={"#"} className={"py-[0.94rem] px-[2.31rem] border border-white text-white font-medium rounded-[0.625rem]"}>Learn more</Link>
                    </div>
                    <div className={"w-1/2"}>
                        <Image src={"/svg/online-learning.svg"} alt={"remote"} width={632} height={387}/>
                    </div>
                </div>

            </section>
        </>
    )
}
