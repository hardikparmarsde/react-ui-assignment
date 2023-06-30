import Hero from "../../components/pages/home/Hero";
import Plans from "../../components/pages/home/Plans/Plans";
import Reviews from "../../components/pages/home/Reviews/Reviews";
import About from "../../components/pages/home/about";

export default function Home () {
    return(
        <div className="relative">
            <Hero/>
            <About/>
            <Plans/>
            <Reviews/>
        </div>
    )    
}