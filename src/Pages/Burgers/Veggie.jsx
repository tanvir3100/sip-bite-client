import { Fade } from "react-awesome-reveal";


const Veggie = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/qsY5zWy/ai-generated-8606255-1-1.png"
                        className="md:max-w-sm" />
                </div>
            </Fade>
        </div>
    );
};

export default Veggie;