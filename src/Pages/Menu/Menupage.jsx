import { Fade } from "react-awesome-reveal";

const Menupage = () => {
    return (
        <div className="flex justify-start items-start">
            <Fade direction='right' delay={20}>
                <div className="px-4 py-6 md:py-12 lg:py-16">
                    <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-4 text-[#FDF6D2]">
                        Welcome to Our Menu
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 text-[#FDF6D2]">
                        To see the products we offer, please click on one of the categories.
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default Menupage;
