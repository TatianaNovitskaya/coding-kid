import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className={"fixed top-0 left-0 right-0 backdrop-blur-sm z-50"}>
                <div className={"container mx-auto flex justify-between items-center py-[2.62rem]"}>
                    <div className="flex items-center">
                        <p className={"text-[#00235C] font-extrabold text-[1.41rem] bg-white leading-[1.10rem] tracking-[.028rem] p-[0.59rem]"}>KC</p>
                        <span className={"text-white uppercase font-extrabold block text-[0.79rem] leading-[1.10rem] tracking-[.016rem] bg-[#00235C] p-[0.59rem]"}>kids coding</span>
                    </div>
                    <nav>
                        <ul className={"flex text-white text-base font-medium"}>
                            <li><Link href={"#"} className={"mr-[5.75rem] hover:font-extrabold"}>Home</Link></li>
                            <li><Link href={"#"} className={"mr-[5.75rem] hover:font-extrabold"}>Class</Link></li>
                            <li><Link href={"#"} className={"mr-[5.75rem] hover:font-extrabold"}>Our activity</Link></li>
                            <li><Link href={"#"} className={"mr-[5.75rem] hover:font-extrabold"}>Contact us</Link></li>
                        </ul>
                    </nav>
                    <button className={"py-[0.62rem] px-[1.88rem] bg-white text-[#116CFF] font-bold rounded-[0.625rem]"}>Login</button>
                </div>
            </header>
        </>
    )
}
