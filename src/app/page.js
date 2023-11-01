import Image from 'next/image'
import MainSection from "@/components/sections/MainSection";
import WhyWeSection from "@/components/sections/WhyWeSection";
import ProgramSection from "@/components/sections/ProgramSection";

export default function Home() {
    return (
        <main>
            <MainSection/>
            <WhyWeSection/>
            <ProgramSection/>
        </main>
    )
}
