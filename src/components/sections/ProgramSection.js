import Image from "next/image";
import Link from "next/link";

export default function ProgramSection() {
    return (<>
        <section id={"programs"} className={"bg-[#116CFF]"}>
            <div className={"container mx-auto py-[5.62rem]"}>
                <div className={"text-center text-white"}>
                    <h2 className={" text-[3rem] leading-[3.75rem] font-extrabold"}>Our Coding Programs</h2>
                    <p className={"mt-4 text-[1.5rem] leading-[2.025rem] font-bold "}>From Beginner to Coding Pro</p>
                </div>
                <div className={"mx-auto w-[80%] border rounded mt-4"}>
                    <div className="flex justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color border-b border-[#116CFF]">
                        <div className={"w-[30%] "}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold"}>Tiny Tinkerers (Ages 4-6)</p>
                            <p className={"text-[14px] mt-[0.5rem] "}>Introduce your little ones to the world of coding with our Tiny Tinkerers program. They'll explore basic concepts in a playful, creative, and hands-on manner.</p>
                        </div>
                        <div className="w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>$2000/Month</span>
                            </div>
                            <div className="w-1/2 flex items-center ">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>6 Meet/Session</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>8 Kids/Class</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"py-[0.81rem] px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                    <div className="flex justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color border-b border-[#116CFF]">
                        <div className={"w-[30%] "}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold"}>Code Explorers (Ages 7-10)</p>
                            <p className={"text-[14px] mt-[0.5rem] "}>Code Explorers is designed to build a strong foundation in coding. Kids will discover the magic of programming through games, projects, and interactive lessons.</p>
                        </div>
                        <div className="w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>$2500/Month</span>
                            </div>
                            <div className="w-1/2 flex items-center ">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>6 Meet/Session</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>8 Kids/Class</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"py-[0.81rem] px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                    <div className="flex justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color border-b border-[#116CFF]">
                        <div className={"w-[30%] "}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold"}>Junior Developers (Ages 11-14)</p>
                            <p className={"text-[14px] mt-[0.5rem] "}>For older kids, our Junior Developers program provides a more in-depth understanding of coding. They'll create real projects, learn about algorithms, and problem-solve like pros.</p>
                        </div>
                        <div className="w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>$2900/Month</span>
                            </div>
                            <div className="w-1/2 flex items-center ">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>6 Meet/Session</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>8 Kids/Class</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"py-[0.81rem] px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                    <div className="flex justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color">
                        <div className={"w-[30%] "}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold"}>Free Trial Class</p>
                            <p className={"text-[14px] mt-[0.5rem] "}></p>
                        </div>
                        <div className="w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Free</span>
                            </div>
                            <div className="w-1/2 flex items-center ">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>1 Meet</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>10 Kids/Class</span>
                            </div>
                            <div className="w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"py-[0.81rem] px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                </div>

            </div>

        </section>
    </>)
}
