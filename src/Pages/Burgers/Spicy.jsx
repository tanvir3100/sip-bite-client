import { Fade } from "react-awesome-reveal";


const Spicy = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/sC0bMVt/burger-7419420-1.png"
                        className="md:max-w-sm" />
                </div>
            </Fade>
        </div>
    );
};

export default Spicy;