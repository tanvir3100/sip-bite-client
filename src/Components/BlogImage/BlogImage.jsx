import ButtonGlobal from "../Button/ButtonGlobal";



const BlogImage = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/dfvD6Hz/dan-gold-E6-Hj-Qa-B7-UEA-unsplash-2.png)",
                }}>
                <div className="text-neutral-content w-full h-full">
                    <div className="px-0 sm:px-6 md:px-12 mx-8 mt-20 sm:mt-12 lg:mt-10">
                        <div className="w-full sm:w-4/5 lg:w-3/4">
                            <h1 className="h1-text mb-5 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wider text-[#FDF6D2]">The Latest Trends and Tips from SipBite</h1>
                            <ButtonGlobal
                                btnText={'Our Blog'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogImage;

// <div
//     className="hero min-h-screen"
//     style={{
//         backgroundImage: "url(https://i.ibb.co/dfvD6Hz/dan-gold-E6-Hj-Qa-B7-UEA-unsplash-2.png)",
//     }}>
//     <div className="text-neutral-content w-full h-full bg-opacity-50 bg-black">
//         <div className="px-6 sm:px-12 lg:px-24 mx-4 sm:mx-8 lg:mx-16 mt-10">
//             <div className="w-full sm:w-3/4 lg:w-1/2">
//                 <h1 className="h1-text mb-5 text-3xl sm:text-5xl lg:text-7xl font-bold tracking-wider text-[#FDF6D2]">
//                     Delicious Discoveries and Recipes from SipBite
//                 </h1>
//                 <ButtonGlobal btnText={'Our Blog'} />
//             </div>
//         </div>
//     </div>
// </div>
