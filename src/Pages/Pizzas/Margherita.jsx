import { Fade } from "react-awesome-reveal";


const Margherita = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/FhpNTCr/pizza-8800005.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <h1 className="h1-text text-center md:text-2xl lg:text-3xl text-[#FDF6D2] tracking-wider">Margherita Pizza</h1>
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$27</p>
                </div>
            </Fade>
        </div>
    );
};

export default Margherita;