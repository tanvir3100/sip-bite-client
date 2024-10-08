import FeaturedCard from './FeaturedCard';
import './Featured.css';
import { useState } from 'react';
import useNewProdutcs from '../../Hooks/useNewProdutcs';




const Featured = () => {
    const [itemsToShow, setItemsToShow] = useState(3);
    const [product] = useNewProdutcs();

    const handleShowMore = () => {
        setItemsToShow(itemsToShow + 3);
    };

    return (
        <div>
            <h2 className="feature-h1 text-4xl sm:text-4xl md:text-5xl text-[#FDF6D2] pl-8">Featured Products</h2>
            <div className="featured-container mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-0 md:px-20 lg:px-24 xl:px-30 mx-auto">
                {product.slice(0, itemsToShow).map(cardData => (
                    <FeaturedCard key={cardData.id} cardData={cardData} />
                ))}
            </div>
            <div className="w-full flex justify-center items-center py-10">
                {itemsToShow < product.length && (
                    <button
                        className="btn btn-outline text-[#FDF6D2] border-[#FFB500] border-2 hover:bg-[#ebde9f] hover:text-black py-0 px-20 rounded-full text-xl font-bold"
                        onClick={handleShowMore}
                    >
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Featured;

