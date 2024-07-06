import ButtonGlobal from '../Button/ButtonGlobal';
import { Fade } from 'react-awesome-reveal';

const PizzaHero = () => {
    return (
        <div>
            <div className="hero w-full h-full flex justify-center items-center">
                <div className="hero-content py-0 my-0 flex-col-reverse lg:flex-row">
                    <div className="flex-1 flex justify-center">
                        <Fade direction='right' delay={20}>
                            <div>
                                <img
                                    src="https://i.ibb.co/QKvwZZf/pizza-3007395-3.png"
                                    className="md:max-w-sm" />
                            </div>
                        </Fade>
                    </div>
                    <div className="flex-1">
                        <Fade direction='left' delay={20}>
                            <h1 className="hero-h1-text text-7xl md:text-7xl font-bold text-[#FDF6D2] tracking-wider mt-10 sm:mt-12 lg:mt-10">Quality You
                                Can Taste</h1>
                        </Fade>
                        <Fade direction='up' delay={20}>
                            <p className="hero-p-text w-3/4 py-6 text-[#042F1A]">
                                Experience the perfect blend of flavors with our mouthwatering pizzas, burgers, and refreshing drinks.
                            </p>
                            <ButtonGlobal btnText={'Our Menu'} />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaHero;