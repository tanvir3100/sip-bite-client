import BlogImage from "../../Components/BlogImage/BlogImage";
import PizzaHero from "../../Components/PizzaHero/PizzaHero";
import Popular from "../../Components/PopularCard/Popular";
import ChefHero from "../../Components/ChefHero/ChefHero";
import Featured from "../../Components/Featured/Featured";
import FixedDiv from "../../Components/FixedDiv/FixedDiv";
import Hero from "../../Components/Hero/Hero";
import './Home.css'
import Customer from "../../Components/Customer/Customer";


const Home = () => {
    return (
        <div className="w-full h-full bg-[#FFB500]">
            <div className="min-h-[70vh] min-w-min flex justify-center items-center pb-5 md:pb-5 lg:pb-0 relative -mt-0 md:-mt-2">
                <FixedDiv
                    Children={<Hero />}
                />
            </div>
            <div className="w-full">
                <div className="w-full">
                    <img src="https://i.ibb.co/V3QLRCS/Vector.png" alt="" />
                </div>
            </div>
            <div className="bg-[#A30000] w-full h-full relative -mt-0 sm:-mt-4 lg:-mt-10">
                <Featured />
            </div>
            <div className="w-full min-h-screen">
                <BlogImage />
            </div>
            <div>
                <ChefHero />
            </div>
            <div className="bg-[#3051C6] h-full min-w-min flex justify-start items-center">
                <div>
                    <div className="pt-10 pb-10">
                        <FixedDiv
                            Children={<PizzaHero />}
                        />
                    </div>
                    <div className="w-full">
                        <div className="w-full">
                            <img src="https://i.ibb.co/5KbWjmY/Vector.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="bg-[#53B725]">
                        <Popular />
                    </div>
                </div>
            </div>
            <div className="h-[100vh] bg-[#FDF6D2] flex justify-center items-center">
                <div className="w-full sm:w-full md:w-5/6">
                    <Customer />
                </div>
            </div>
        </div>
    );
};

export default Home;