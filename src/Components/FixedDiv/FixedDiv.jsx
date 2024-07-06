/* eslint-disable react/prop-types */


const FixedDiv = ({ Children }) => {
    return (
        <div className="px-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 mx-auto">
            {Children}
        </div>
    );
};

export default FixedDiv;