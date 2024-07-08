import { Fade } from "react-awesome-reveal";


const Pepperoni = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/X7QVbFZ/inna-gurina-Jsp-LKUauw-SI-unsplash.png"
                        className="md:max-w-sm lg:max-w-80" />
                    <h1 className="h1-text text-center md:text-2xl lg:text-3xl text-[#FDF6D2] tracking-wider">Pepperoni Pizza</h1>
                    <p className="p-text text-center md:text-2xl lg:text-3xl text-[#042F1A] font-bold">Price:$24</p>
                </div>
            </Fade>
        </div>
    );
};

export default Pepperoni;