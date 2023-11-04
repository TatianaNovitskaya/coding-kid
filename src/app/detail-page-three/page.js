import Image from "next/image";

export default function DetailPageThree() {

    return (
        <main className={'mt-[5rem]'}>
            <section>
                <div className={"container w-full md:w-[80%] mx-auto px-4 py-[5rem]"}>
                    <h1 className={"text-center text-[#116CFF] mb-[2rem] text-[2.725rem] leading-[3rem] lg:leading-[5rem] font-extrabold"}>Junior Developers (Ages 11-14)</h1>
                    <p><span className={"font-bold"}>Program Overview: </span>
                        Junior Developers is designed for kids aged 11 to 14 who are ready to become proficient in coding. It offers a more advanced and comprehensive curriculum.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-[55%]">
                            <h2 className={"text-[1.75rem] font-bold text-center my-[1rem]"}>What to Expect:</h2>
                            <p><span className={"font-bold"}>- Real-World Applications:</span> Junior Developers embark on a coding journey that mimics real-world software development. They work on projects with practical applications.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Algorithmic Thinking:</span> This program delves deeper into algorithm design and implementation, a fundamental skill in coding and problem-solving.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Collaboration:</span> Kids work on group projects, fostering teamwork and communication skills.</p>

                            <h2 className={"text-[1.75rem] font-bold text-center my-[1rem]"}>Key Skills Developed:</h2>
                            <p><span className={"font-bold"}>- Advanced Coding:</span> Junior Developers will become proficient in coding languages and develop complex algorithms.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Critical Thinking:</span> They will learn to think critically and analytically, essential for tackling intricate coding challenges.</p>
                            <p className={"mb-[2rem]"}><span className={"font-bold"}> - Communication and Teamwork:</span> As they collaborate with peers, they will enhance their interpersonal and teamwork skills.</p>
                        </div>
                        <div className="w-[30%]">
                            <Image src={"/svg/undraw_podcast.svg"} alt={"podcast"} width={849} height={842}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
