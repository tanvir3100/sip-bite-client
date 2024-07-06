/* eslint-disable react/prop-types */


const FeaturedCard = ({ cardData }) => {
    return (
        <div>
            <div className="card bg-[#FFB500] shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                        src={cardData.image}
                        alt="Shoes"
                        className="rounded-md w-full h-[340px] sm:h-[340px] md:h-[350px] lg:h-[370px]" />
                </figure>
                <div className="p-text font-bold text-center text-[#042F1A] font-bold flex justify-between items-center px-8 py-5">
                    <p>{cardData.title}</p>
                    <p>{cardData.price}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;