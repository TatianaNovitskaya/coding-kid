import Image from "next/image";
import Link from "next/link";

export default function ProgramSection() {
    return (<>
        <section id={"programs"} className={"bg-[#116CFF]"}>
            <div className={"container mx-auto px-4 py-[5.62rem]"}>
                <div className={"text-center text-white"}>
                    <h2 className={"text-[2.725rem] lg:text-[3rem] leading-[3.75rem] font-extrabold"}>Our Coding Programs</h2>
                    <p className={"mt-4 text-[1.5rem] leading-[2.025rem] font-bold "}>From Beginner to Coding Pro</p>
                </div>
                <div className={"mx-auto md:w-full w-[90%]  xl:w-[80%] border rounded mt-4"}>
                    <div className="flex flex-col md:flex-row justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color border-b border-[#116CFF]">
                        <div className={"w-full md:w-[30%] mb-[2rem] md:mb-0"}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold text-center md:text-left"}>Tiny Tinkerers (Ages 4-6)</p>
                            <p className={"text-[14px] mt-[0.5rem] "}>Introduce your little ones to the world of coding with our Tiny Tinkerers program. They&apos;ll explore basic concepts in a playful, creative, and hands-on manner.</p>
                        </div>
                        <div className={"w-full md:w-[45%] flex flex-wrap justify-center text-[#00235C]"}>
                            <div className="w-full sm:w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>$2000/Month</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem] sm:mt-0">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>6 Meet/Session</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>8 Kids/Class</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"mt-[2rem] md:mt-0 block py-[0.81rem] px-[0.94rem] lg:py-[0.81rem] lg:px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color border-b border-[#116CFF]">
                        <div className={"w-full md:w-[30%] mb-[2rem] md:mb-0"}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold text-center md:text-left"}>Code Explorers (Ages 7-10)</p>
                            <p className={"text-[14px] mt-[0.5rem] "}>Code Explorers is designed to build a strong foundation in coding. Kids will discover the magic of programming through games, projects, and interactive lessons.</p>
                        </div>
                        <div className="w-full md:w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-full sm:w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>$2500/Month</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem] sm:mt-0">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>6 Meet/Session</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>8 Kids/Class</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"mt-[2rem] md:mt-0 block py-[0.81rem] px-[0.94rem] lg:py-[0.81rem] lg:px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color border-b border-[#116CFF]">
                        <div className={"w-full md:w-[30%] mb-[2rem] md:mb-0"}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold text-center md:text-left"}>Junior Developers (Ages 11-14)</p>
                            <p className={"text-[14px] mt-[0.5rem] "}>For older kids, our Junior Developers program provides a more in-depth understanding of coding. They&apos;ll create real projects, learn about algorithms, and problem-solve like pros.</p>
                        </div>
                        <div className="w-full md:w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-full sm:w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>$2900/Month</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem] sm:mt-0">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>6 Meet/Session</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>8 Kids/Class</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"mt-[2rem] md:mt-0 block py-[0.81rem] px-[0.94rem] lg:py-[0.81rem] lg:px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center py-[1rem] px-[1.5rem] bg-[#e7f0ff] hover:bg-[#cfe2ff] transition-color">
                        <div className={"w-full md:w-[30%] mb-[2rem] md:mb-0"}>
                            <p className={"text-[#00235C] text-[1.25rem] font-bold text-center md:text-left"}>Free Trial Class</p>
                        </div>
                        <div className="w-full md:w-[45%] flex flex-wrap justify-center text-[#00235C]">
                            <div className="w-full sm:w-1/2 flex items-center">
                                <Image src={"/svg/label.svg"} alt={"label"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Free</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem] sm:mt-0">
                                <Image src={"/svg/timer.svg"} alt={"timer"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>1 Meet</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/kids.svg"} alt={"kids"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>10 Kids/Class</span>
                            </div>
                            <div className="w-full sm:w-1/2 flex items-center mt-[1.5rem]">
                                <Image src={"/svg/laptop.svg"} alt={"laptop"} width={24} height={24} className={"mr-[0.5rem]"}/>
                                <span>Online/Offline Meeting</span>
                            </div>
                        </div>
                        <button className={"mt-[2rem] md:mt-0 block py-[0.81rem] px-[0.94rem] lg:py-[0.81rem] lg:px-[1.25rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Detail Class</button>
                    </div>
                </div>

            </div>

        </section>
    </>)
}
