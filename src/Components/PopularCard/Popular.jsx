import popularData from '../../../public/Populars.json';
import PopularCard from './PopularCard';
import { useState } from 'react';

const Popular = () => {
    const [itemsToShow, setItemsToShow] = useState(3);

    const handleShowMore = () => {
        setItemsToShow(itemsToShow + 3);
    };

    return (
        <div>
            <div className='text-center w-full flex justify-center items-center'>
                <div className='w-full sm:w-full md:w-3/5 lg:w-2/5'>
                    <h2 className="h1-text feature-h1 text-5xl text-[#042F1A] pl-8">Popular Selections</h2>
                    <p className='p-text text-[#FDF6D2]'>Discover our most loved pizzas, burgers, and drinks, crafted with the freshest ingredients and bursting with flavor.</p>
                </div>
            </div>
            <div className="featured-container mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 sm:px-0 md:px-20 lg:px-24 xl:px-30 mx-auto">
                {popularData.slice(0, itemsToShow).map(cardData => (
                    <PopularCard key={cardData.id} cardData={cardData} />
                ))}
            </div>
            <div className='w-full flex justify-center items-center py-10'>
                {itemsToShow < popularData.length && (
                    <button
                        className="btn btn-outline text-[#FDF6D2] hover:bg-[#ebde9f] hover:text-black py-0 px-20 border-[#042F1A] border-2 rounded-full text-xl font-bold"
                        onClick={handleShowMore}
                    >
                        For More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Popular;

