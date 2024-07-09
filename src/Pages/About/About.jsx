import ButtonGlobal from "../../Components/Button/ButtonGlobal";
import FixedDiv from "../../Components/FixedDiv/FixedDiv";
import popularData from '../../../public/products.json';
import PopularCard from "../../Components/PopularCard/PopularCard";


const About = () => {
    return (
        <div className="w-full h-full">
            <div
                className="hero min-h-screen bg-fixed"
                style={{
                    backgroundImage: "url(https://i.ibb.co/XyB5Hkh/spencer-davis-v-Jsj-hg-OEG0-unsplash-1.png)",
                }}>
                <div className="text-neutral-content w-full h-full">
                    <div className="px-0 sm:px-6 md:px-12 mx-8 mt-10 sm:mt-12 lg:mt-10">
                        <div className="w-full sm:w-4/5 lg:w-3/4">
                            <h1 className="h1-text mb-5 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider text-[#FDF6D2]">The Latest Trends and Tips from SipBite</h1>
                            <ButtonGlobal
                                btnText={'About More'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero bg-[#3051C6] min-h-screen text-[#FDF6D2]">
                    <FixedDiv Children={<div className="hero-content flex-col justify-center items-center lg:flex-row-reverse px-20 mx-auto">
                        <img
                            src="https://i.ibb.co/pL71bmV/no-bg.png"
                            className="max-w-lg" />
                        <div className="">
                            <h1 className="p-text text-5xl font-bold">CEO of SipBite</h1>
                            <h1 className="text-xl font-bold pt-3">Mirajul Islam Tanvir</h1>
                            <p className="py-3">
                                As the CEO of SipBite, Mirajul Islam Tanvie is passionate about delivering exceptional dining experiences. With a commitment to quality, freshness, and unique flavors, Mirajul leads SipBite in creating unforgettable meals for every guest.
                            </p>
                            <ButtonGlobal
                                btnText={'For More'} />
                        </div>
                    </div>} />
                </div>
            </div>
            <div className="px-[30%] mx-auto flex justify-center items-center pt-10 pb-5">
                <div>
                    <h1 className="p-text text-5xl font-bold text-center">Our Dedicated Chefs</h1>
                    <p className="p-text text-center">At SipBite, our talented chefs are the heart of our kitchen, bringing passion, expertise, and creativity to every dish, ensuring each meal is an extraordinary culinary experience.</p>
                </div>
            </div>
            <div className="grid grid-cols-3 px-[10%] mx-auto gap-5 py-10">
                {popularData.map(cardData => (
                    <PopularCard key={cardData.id} cardData={cardData} />
                ))}
            </div>
        </div>
    );
};

export default About; 