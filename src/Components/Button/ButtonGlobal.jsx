/* eslint-disable react/prop-types */



const ButtonGlobal = ({ btnText }) => {
    return (
        <div>
            <button className="btn bg-[#FF5700] text-[#FDF6D2] hover:bg-[#ebde9f] hover:text-black py-0 px-20 border-none rounded-full text-xl font-bold">
                {btnText}
            </button>
        </div>
    );
};

export default ButtonGlobal;