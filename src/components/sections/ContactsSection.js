import Image from "next/image";


export default function ContactsSection() {
    return (
        <>
            <section id={"contacts"} className={""}>
                <div className={"container mx-auto  py-[5.62rem]"}>
                    <div className={"w-[50%] mx-auto text-center  text-[#00235C]"}>
                        <h2 className={"text-[3rem] leading-[3.75rem] font-extrabold mb-[1.6rem]"}>Ready to start your Kid
                            journey?</h2>
                    </div>
                    <form className={"mx-auto w-[47%]"}>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="e-mail" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Email
                                :</label>
                            <input type="email" id={"e-mail"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="name-par" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Parents
                                Name :</label>
                            <input type="email" id={"name-par"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="name-kid" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Kid
                                Name :</label>
                            <input type="email" id={"name-kid"}
                                   className={"border border-[#BCD6FF] rounded-lg w-[24rem] p-[0.8rem] outline-0  focus:outline"}/>
                        </div>
                        <div className="flex justify-between items-center mb-[2.19rem]">
                            <label htmlFor="class" className={"block mr-[2rem] text-[#00235C] font-semibold"}>Class
                                :</label>
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
