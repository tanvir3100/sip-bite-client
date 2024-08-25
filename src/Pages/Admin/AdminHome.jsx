import useChef from "../../Hooks/useChef";
import useNewProdutcs from "../../Hooks/useNewProdutcs";
import usePopulars from "../../Hooks/usePopulars";
import useRecipes from "../../Hooks/useRecipes";
import useReviews from "../../Hooks/useReviews";


const AdminHome = () => {
    const [popular] = usePopulars();
    const [product] = useNewProdutcs();
    const [recipe] = useRecipes();
    const [review] = useReviews();
    const [chef] = useChef();
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div>
                <h1 className="h1-text text-3xl font-bold text-[#FF5700] text-center mb-5 tracking-wider">Sip Bite Admin Home</h1>
                <div className="grid grid-cols-2 gap-5">
                    <div className="w-80 h-40 bg-emerald-600 rounded-lg flex justify-center items-center">
                        <div className="text-white font-bold text-3xl">
                            <h1>Featured Products</h1>
                            <p className="text-center">{product.length}</p>
                        </div>
                    </div>
                    <div className="w-80 h-40 bg-emerald-500 rounded-lg flex justify-center items-center">
                        <div className="text-white font-bold text-3xl">
                            <h1>Recipes We Have</h1>
                            <p className="text-center">{recipe.length}</p>
                        </div>
                    </div>
                    <div className="w-80 h-40 bg-cyan-500 rounded-lg flex justify-center items-center">
                        <div className="text-white font-bold text-3xl">
                            <h1>Our Chefs</h1>
                            <p className="text-center">{chef.length}</p>
                        </div>
                    </div>
                    <div className="w-80 h-40 bg-blue-600 rounded-lg flex justify-center items-center">
                        <div className="text-white font-bold text-3xl">
                            <h1>Popular Items</h1>
                            <p className="text-center">{popular.length}</p>
                        </div>
                    </div>
                    <div className="w-80 h-40 bg-indigo-600 rounded-lg flex justify-center items-center">
                        <div className="text-white font-bold text-3xl">
                            <h1>review Items</h1>
                            <p className="text-center">{review.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;