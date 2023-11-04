import Image from "next/image";

export default function DetailPageFour() {

    return (
        <main className={'mt-[5rem]'}>
            <section>
                <div className={"container w-full md:w-[80%] mx-auto px-4 py-[5rem]"}>
                    <h1 className={"text-center text-[#116CFF] mb-[2rem] text-[2.725rem] leading-[3rem] lg:leading-[5rem] font-extrabold"}>Free
                        Trial Class</h1>

                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="w-[30%]">
                            <Image src={"/svg/undraw_dev_focus.svg"} alt={"dev-focus"} width={849} height={842}/>
                        </div>
                        <div className="w-[55%]">
                            <p>Curious to see what Kids&apos; Coding Adventure is all about? We offer a FREE TRIAL CLASS to
                                help you and your child experience our coding programs firsthand. It&apos;s a fantastic way
                                to get a taste of our curriculum and see how engaging and fun our classes are. There's
                                no commitment required for the trial class – it&apos;s an opportunity for your child to
                                explore the exciting world of coding!</p>
                            <p className={"font-bold mt-[2.5rem]"}>Book a free trial class today and watch your child take their first step into the amazing world of coding.</p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
