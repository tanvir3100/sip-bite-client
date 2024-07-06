import ButtonGlobal from "../Button/ButtonGlobal";


const ChefHero = () => {
    return (
        <div>
            <div className="bg-[#FFB500] min-h-screen">
                <div className="flex flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/ZWLxy72/platting-4282016-1.png"
                        className="w-full lg:max-w-lg"
                    />
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="w-3/4 my-20 lg:my-52">
                            <h1 className="h1-text text-5xl font-bold text-[#00563A] tracking-wider">Fresh Made,
                                Flavor Packed</h1>
                            <p className="p-text py-6 text-[#042F1A]">
                                Experience our commitment to unmatched quality, using only the freshest ingredients, and creating unique flavors that elevate every dish.
                            </p>
                            <ButtonGlobal
                                btnText={'Our Chef'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefHero;