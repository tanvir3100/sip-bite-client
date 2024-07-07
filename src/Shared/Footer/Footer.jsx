

const Footer = () => {
    return (
        <div className="">
            <footer className="p-text footer bg-[#A30000] text-[#FFB500] p-10 font-bold">
                <aside>
                    <h1 className="logo-text text-6xl pb-2">
                        SipBite
                    </h1>
                    <p>
                        SipBite Industries Ltd.
                        <br />
                        Providing reliable tech since 2020
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#FDF6D2]">Menu</h6>
                    <a className="link link-hover">Burgers</a>
                    <a className="link link-hover">Pizzas</a>
                    <a className="link link-hover">Drinks</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FDF6D2]">Recipes</h6>
                    <a className="link link-hover">Burger Recipes</a>
                    <a className="link link-hover">Pizza Recipes</a>
                    <a className="link link-hover">Drink Recipes</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FDF6D2]">Contact</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Location</a>
                    <a className="link link-hover">Careers</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;