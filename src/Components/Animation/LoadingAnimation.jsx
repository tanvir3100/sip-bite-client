

const LoadingAnimation = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center">
            <iframe
                className="w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]"
                src="https://lottie.host/embed/c852c96f-5864-497f-a96b-e950e74d86f8/vQ9KdqF9Ix.json"
                title="Loading Animation"
                allowFullScreen
            ></iframe>
            {/* <h1 className="text-6xl text-[#FF5700] h1-text tracking-wider absolute">Sip Bite</h1> */}
        </div>
    );
};

export default LoadingAnimation;
