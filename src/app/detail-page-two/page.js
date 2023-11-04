import Image from "next/image";

export default function DetailPageTwo() {

    return (
        <main className={'mt-[5rem]'}>
            <section>
                <div className={"container w-full md:w-[80%] mx-auto px-4 py-[5rem]"}>
                    <h1 className={"text-center text-[#116CFF] mb-[2rem] text-[2.725rem] leading-[3rem] lg:leading-[5rem] font-extrabold"}>Code Explorers (Ages 7-10)</h1>
                    <p><span className={"font-bold"}>Program Overview: </span>
                        Code Explorers is the ideal program for children aged 7 to 10 who are ready to take their coding journey to the next level. Here, they will delve deeper into coding principles and develop a strong foundation.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-[30%]">
                            <Image src={"/svg/undraw_teaching.svg"} alt={"teaching"} width={849} height={842}/>
                        </div>
                        <div className="w-[55%]">
                            <h2 className={"text-[1.75rem] font-bold text-center my-[1rem]"}>What to Expect:</h2>
                            <p><span className={"font-bold"}>- Interactive Learning:</span> Our curriculum is designed to make learning engaging and interactive. Kids embark on coding adventures, tackle real-world problems, and create their own projects.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Project-Based Learning:</span> Code Explorers will work on exciting coding projects, such as building games, animations, and simple apps, fostering their creativity and problem-solving abilities.</p>

                            <h2 className={"text-[1.75rem] font-bold text-center my-[1rem]"}>Key Skills Developed:</h2>
                            <p><span className={"font-bold"}>- Programming Proficiency:</span> Children learn the basics of coding languages, logic, and syntax.</p>
                            <p className={"my-[0.5rem]"}><span className={"font-bold"}>- Problem-Solving:</span> They&apos;ll become adept at breaking down problems and devising solutions, which are essential skills both in coding and in life.</p>
                            <p className={"mb-[2rem]"}><span className={"font-bold"}> - Creative Expression:</span> Through coding, kids express their creativity and invent their digital worlds.</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
