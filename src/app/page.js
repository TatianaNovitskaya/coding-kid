import Image from 'next/image'
import MainSection from "@/components/sections/MainSection";
import WhyWeSection from "@/components/sections/WhyWeSection";

export default function Home() {
    return (
        <main>
            <MainSection/>
            <WhyWeSection/>
        </main>
    )
}
