import { Fade } from "react-awesome-reveal";

const Chicken = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/9qV8Z6r/pizza-8635314.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <h1 className="h1-text text-center md:text-2xl lg:text-3xl text-[#FDF6D2] tracking-wider">BBQ Chicken Pizza</h1>
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$117</p>
                </div>
            </Fade>
        </div>
    );
};

export default Chicken;