/* eslint-disable react/prop-types */


const RecipeCard = ({ recipe }) => {
    return (
        <div>
            <div className="card bg-[#FDF6D2] shadow-xl md:h-[650px] lg:h-[600px]">
                <figure className="px-4 pt-4">
                    <img
                        src={recipe.image}
                        alt="Shoes"
                        className="rounded-md w-full h-[300px]" />
                </figure>
                <div className="p-text text-start text-[#042F1A] font-bold justify-between items-start px-8 py-5 flex flex-col flex-grow">
                    <h1 className="text-3xl mb-2">{recipe.title}</h1>
                    <p className="p-text mb-2">INGREDIENTS: {recipe.ingredients}</p>
                    <p className="p-text flex-grow">RECIPE: {recipe.recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;