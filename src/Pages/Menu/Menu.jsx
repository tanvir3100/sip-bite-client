import { Helmet } from "react-helmet-async";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>SipBite | Menu</title>
            </Helmet>
            <div className="w-full h-full">
                <div className="">
                    <div className="min-h-[80vh] bg-[#53B725] px-2 sm:px-2 md:px-6 lg:px-10 mx-auto">
                        <BurgerMenu />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;


