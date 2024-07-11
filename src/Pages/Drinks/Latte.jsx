import { Fade } from "react-awesome-reveal";

const Latte = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/42Zyqfz/eiliv-aceron-t-Sg-Ume-YMm8-unsplash.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$05</p>
                </div>
            </Fade>
        </div>
    );
};

export default Latte;