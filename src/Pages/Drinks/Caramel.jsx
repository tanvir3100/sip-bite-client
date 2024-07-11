import { Fade } from "react-awesome-reveal";


const Caramel = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/dbY6wzJ/ai-generated-8854172.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$15</p>
                </div>
            </Fade>
        </div>
    );
};

export default Caramel;