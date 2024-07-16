/* eslint-disable react/prop-types */


const ChefCard = ({ chefData }) => {
    return (
        <div>
            <div className="card bg-[#FDF6D2] shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={chefData.image}
                        alt="Shoes"
                        className="rounded-md w-full h-[340px] sm:h-[340px] md:h-[350px] lg:h-[370px]" />
                </figure>
                <div className="p-text text-start text-[#042F1A] font-bold px-8 py-5 flex flex-col">
                    <p className="p-text text-3xl text-[#042F1A]">{chefData.name}</p>
                    <p className="p-text text-sm text-[#042F1A]">{chefData.title}</p>
                    <p className="p-text text-[#042F1A] flex-grow">{chefData.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;