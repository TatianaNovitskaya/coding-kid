import Image from "next/image";

export default function DetailPageOne() {

    return (
        <main className={'mt-[5rem]'}>
            <section>
                <div className={"container w-full md:w-[80%] mx-auto px-4 py-[5rem]"}>
                    <h1 className={"text-center text-[#116CFF] mb-[2rem] text-[2.725rem] leading-[3rem] lg:leading-[5rem] font-extrabold"}>Tiny
                        Tinkerers (Ages 4-6)</h1>
                    <p><span className={"font-bold"}>Program Overview: </span>
                        Tiny Tinkerers is designed for our youngest coders, aged 4 to 6. In this program, we create a
                        nurturing and playful environment where kids can take their first steps into the world of
                        coding.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-[55%]">
                            <h2 className={"text-[1.75rem] font-bold text-center my-[1rem]"}>What to Expect:</h2>
                            <p><span className={"font-bold"}>- Creative Exploration:</span> We believe that learning
                                should
                                be fun and imaginative. Tiny
                                Tinkerers engage in creative activities, using age-appropriate tools and games to
                                introduce
                                coding
                                concepts.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Hands-On Learning:</span> This program is all about
                                hands-on experiences. Kids will build their problem-solving abilities, critical thinking skills, and early
                                math concepts through interactive projects.</p>

                            <h2 className={"text-[1.75rem] font-bold text-center my-[1rem]"}>Key Skills Developed:</h2>
                            <p><span className={"font-bold"}>- Logical Thinking:</span> Even at this early age, children
                                will develop basic logical thinking skills as they solve puzzles and complete coding
                                challenges.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Early Math Skills:</span> They&apos;ll begin to grasp
                                fundamental math concepts as they explore coding patterns and sequences.</p>
                            <p className={"mb-[2rem]"}><span className={"font-bold"}> -Patience and Perseverance:</span> Tiny Tinkerers learn to
                                tackle challenges with determination, setting the stage for future success.</p>
                        </div>
                        <div className="w-[30%]">
                            <Image src={"/svg/undraw_studying.svg"} alt={"studing"} width={849} height={842}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
