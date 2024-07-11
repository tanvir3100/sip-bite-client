/* eslint-disable react/prop-types */


const RecipeCard = ({ recipe }) => {
    console.log(recipe)
    return (
        <div>
            <div className="card bg-[#FDF6D2] shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={recipe.image}
                        alt="Shoes"
                        className="rounded-md w-full h-[340px] sm:h-[340px] md:h-[350px] lg:h-[370px]" />
                </figure>
                <div className="p-text text-start text-[#042F1A] font-bold flex-col justify-between items-start px-8 py-5">
                    <h1 className="text-3xl mb-2">{recipe.title}</h1>
                    <p className="p-text mb-2">INGREDIENTS: {recipe.ingredients}</p>
                    <p className="p-text">RECIPE: {recipe.recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;