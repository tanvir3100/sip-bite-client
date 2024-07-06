import BlogImage from "../../Components/BlogImage/BlogImage";
import ChefHero from "../../Components/ChefHero/ChefHero";
import Featured from "../../Components/Featured/Featured";
import FixedDiv from "../../Components/FixedDiv/FixedDiv";
import Hero from "../../Components/Hero/Hero";
import './Home.css'


const Home = () => {
    return (
        <div className="w-full h-full bg-[#FFB500]">
            <div className="min-h-[70vh] min-w-min flex justify-center items-center pb-5 md:pb-5 lg:pb-0 relative -mt-0 md:-mt-2">
                <FixedDiv
                    Children={<Hero />}
                />
            </div>
            <div className="min-w-fit">
                <div className="w-full">
                    <img src="https://i.ibb.co/V3QLRCS/Vector.png" alt="" />
                </div>
            </div>
            <div className="bg-[#A30000] w-full h-full relative -mt-0 sm:-mt-4 lg:-mt-10">
                <FixedDiv
                    Children={<Featured />}
                />
            </div>
            <div className="">
                <BlogImage />
            </div>
            <div>
                <ChefHero />
            </div>
        </div>
    );
};

export default Home;