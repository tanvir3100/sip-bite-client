import { Fade } from "react-awesome-reveal";


const Spicy = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/sC0bMVt/burger-7419420-1.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$23</p>
                </div>
            </Fade>
        </div>
    );
};

export default Spicy;