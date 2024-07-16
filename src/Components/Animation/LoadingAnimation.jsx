

const LoadingAnimation = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
            <iframe
                className="w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]"
                src="https://lottie.host/embed/1ebda872-c417-4307-b7fe-0042bc733a01/u4CxUY1pt6.json"
                title="Loading Animation"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LoadingAnimation;
