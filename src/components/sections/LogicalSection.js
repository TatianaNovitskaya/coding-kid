import Image from "next/image";
import Link from "next/link";

export default function LogicalSection() {
    return (
        <>
            <section id={"home"} className={""}>
                <div className={"container mx-auto flex justify-between items-center py-[5.62rem]"}>
                    <div className={"w-1/3"}>
                        <Image src={"/svg/undraw_studying.svg"} alt={"study"} width={632} height={387}/>
                    </div>
                    <div className={"w-1/2 text-[#00235C]"}>
                        <h2 className={"text-[3rem] leading-[3.75rem] font-extrabold"}>Increases Logical Thinking with Coding Class</h2>
                        <p className={"mt-4  text-[1rem] leading-[2.5rem]"}>Having logical thinking skills encourages kids to think for themselves, to question assumptions, to develop their own theories, and to test their theories against known facts. These thinking skills are transferable to all situations.</p>
                    </div>

                </div>

            </section>
        </>
    )
}
