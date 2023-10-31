import Image from "next/image";


export default function WhyWeSection() {
    return (
        <>
            <section id={"home"} className={""}>
                <div className={"container mx-auto flex justify-between items-center py-[5.62rem]"}>
                    <div className={"w-ful text-center  text-[#00235C]"}>
                        <h2 className={"text-[3rem] leading-[3.75rem] font-extrabold"}>Why Choose Kids' Coding
                            Adventure</h2>
                        <p className={"mt-4 text-[1.5rem] leading-[2.025rem] font-bold "}>Inspiring Young Minds, One
                            Line of Code at a Time</p>
                        <div className={"grid grid-cols-3 gap-20 mt-20 "}>
                            <div className={"flex flex-col items-center"}>
                                <Image src={"/svg/plan-svgrepo-com.svg"} alt={"open code"} width={40} height={40}
                                       className={"mr-5"}/>
                                <div className="text-center">
                                    <p className={"mt-4  text-[1.25rem] leading-[1rem] font-bold"}>Engaging
                                        Curriculum</p>
                                    <p className={"mt-4 text-[1rem] leading-[1.25rem]"}>Our carefully crafted curriculum
                                        makes
                                        learning to code a breeze for kids. We use interactive and age-appropriate
                                        materials
                                        to
                                        keep young minds stimulated and engaged.</p>
                                </div>
                            </div>
                            <div className={"flex flex-col items-center"}>
                                <Image src={"/svg/teacher-svgrepo-com.svg"} alt={"teacher"} width={40} height={40}
                                       className={"mr-5"}/>
                                <div className="text-center">
                                    <p className={"mt-4  text-[1.25rem] leading-[1rem] font-bold"}>Experienced
                                        Instructors</p>
                                    <p className={"mt-4 text-[1rem] leading-[1.25rem]"}>Our passionate instructors are not
                                        just coders; they're mentors who guide children on their coding journey,
                                        fostering critical thinking and problem-solving skills.</p>
                                </div>
                            </div>
                            <div className={"flex flex-col items-center"}>
                                <Image src={"/svg/enviroment-svgrepo-com.svg"} alt={"planet"} width={40} height={40}
                                       className={"mr-5"}/>
                                <div className="text-center">
                                    <p className={"mt-4  text-[1.25rem] leading-[1rem] font-bold"}>Fun Learning
                                        Environment</p>
                                    <p className={"mt-4 text-[1rem] leading-[1.25rem]"}>We believe that learning should be
                                        fun! Our programs blend education and play, creating an enjoyable and motivating
                                        atmosphere for kids to thrive.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
