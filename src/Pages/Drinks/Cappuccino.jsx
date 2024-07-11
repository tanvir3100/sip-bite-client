import { Fade } from "react-awesome-reveal";


const Cappuccino = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/9sgWTbF/demi-deherrera-L-sm1-B4-L1-Ns-unsplash.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$25</p>
                </div>
            </Fade>
        </div>
    );
};

export default Cappuccino;