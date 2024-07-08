import { Fade } from "react-awesome-reveal";


const classic = () => {
    return (
        <div className="flex justify-center items-center">
            <Fade direction='right' delay={20}>
                <div>
                    <img
                        src="https://i.ibb.co/G9ZHYVX/burger-5893927-1.png"
                        className="md:max-w-sm" />
                </div>
            </Fade>
        </div>
    );
};

export default classic;