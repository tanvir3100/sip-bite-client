import ButtonGlobal from "../../Components/Button/ButtonGlobal";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import RecipesData from '../../../public/recipes.json'


const Recipes = () => {
    console.log(RecipesData)
    return (
        <div className="w-full h-full bg-[#FF5700]">
            <div
                className="hero min-h-screen bg-fixed"
                style={{
                    backgroundImage: "url(https://i.ibb.co/XyB5Hkh/spencer-davis-v-Jsj-hg-OEG0-unsplash-1.png)",
                }}>
                <div className="text-neutral-content w-full h-full">
                    <div className="px-0 sm:px-6 md:px-12 mx-8 mt-10 sm:mt-12 lg:mt-10">
                        <div className="w-full sm:w-4/5 lg:w-3/4">
                            <h1 className="h1-text mb-5 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider text-[#FDF6D2]">Savor Inspired Flavors at SipBite!</h1>
                            <ButtonGlobal
                                btnText={'Explore Now'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center w-full flex justify-center items-center'>
                    <div className='w-full sm:w-full md:w-3/5 lg:w-2/5 py-10'>
                        <h2 className="h1-text feature-h1 text-5xl text-[#FDF6D2] pl-8 tracking-wider">OUR BEST RECIPES</h2>
                        <p className='p-text text-[#042F1A]'>Discover our most loved pizzas, burgers, and drinks, crafted with the freshest ingredients and bursting with flavor.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 px-5 sm:px-6 md:px-12 lg:px-32 mx-auto pb-10">
                    {
                        RecipesData.map(recipe => (<RecipeCard key={recipe.id} recipe={recipe} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipes;