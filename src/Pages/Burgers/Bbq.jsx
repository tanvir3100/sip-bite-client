import { Fade } from "react-awesome-reveal";


const Bbq = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/DCb9kRw/sandwich-5930496-1.png"
                        className="md:max-w-sm" />
                </div>
            </Fade>
        </div>
    );
};

export default Bbq;