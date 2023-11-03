import Image from "next/image";


export default function ContactsSection() {
    return (
        <>
            <section id={"contacts"} className={"overflow-hidden"}>
                <div className={"container mx-auto px-4 py-[5.62rem] relative"}>
                    <Image src={"/stars-yellow.png"} alt={"yellow-stars"} width={371} height={492} className={"absolute top-[1rem] left-[50%]"}/>
                    <div className={"w-full lg:w-[50%] mx-auto text-center  text-[#00235C] relative z-10"}>
                        <h2 className={"text-[3rem] leading-[3.75rem] font-extrabold mb-[1.6rem]"}>Ready to start your Kid
                            journey?</h2>
                    </div>
                    <form className={"mx-auto w-full sm:w-[80%] lg:w-[47%] relative z-10"}>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="e-mail" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Email:</label>
                            <input type="email" id={"e-mail"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="name-par" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Parents
                                Name:</label>
                            <input type="email" id={"name-par"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="name-kid" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Kid
                                Name:</label>
                            <input type="email" id={"name-kid"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="class" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Class:</label>
                            <input type="email" id={"class"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-end items-center">
                            <button className={"py-[0.94rem] px-[3.69rem] bg-[#116CFF] text-white font-bold rounded-[0.625rem]"}>Register</button>
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}
