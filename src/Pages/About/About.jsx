import ButtonGlobal from "../../Components/Button/ButtonGlobal";


const About = () => {
    return (
        <div className="w-full min-h-screen">
            <div
                className="hero min-h-screen"
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
        </div>
    );
};

export default About; 