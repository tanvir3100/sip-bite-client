import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useNewProdutcs from "../../Hooks/useNewProdutcs";
import ManagePopularItem from "../../Components/ManagePopularItem/ManagePopularItem";
import ManageChef from "../../Components/ManageChef/ManageChef";
import ManageRecipe from "../../Components/ManageRecipe/ManageRecipe";
import ManageReview from "../../Components/ManageReview/ManageReview";

const ManageItems = () => {
    const [product] = useNewProdutcs();
    const axios = useAxios();

    const handleDeleteItem = async (item) => {
        console.log(item)
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                const res = await axios.delete(`/products/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.title} has been deleted.`,
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Failed!",
                        text: "Unable to delete the item.",
                        icon: "error",
                    });
                }
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            Swal.fire({
                title: "Error!",
                text: "Failed to delete the item. Please try again later.",
                icon: "error",
            });
        }
    };

    return (
        <div>
            <div>
                <h1 className='text-5xl text-center'>Manage Featured Products</h1>
                <h3 className='text-sm text-center'>Manage your featured products here</h3>
                <div className="bg-white mx-auto p-4">
                    <div className="flex justify-between">
                        <h2 className="text-3xl mb-5">Available Featured Products: {product.length}</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table bg-base-200">
                            {/* Head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product?.map((productItem, index) => (
                                    <tr key={productItem._id}>
                                        <th>{index + 1}</th>
                                        <td><img className="w-20 rounded-lg" src={productItem.image} alt={productItem.title} /></td>
                                        <td>{productItem.title}</td>
                                        <td>{productItem.price}</td>
                                        <td>
                                            <Link to={`/dashboard/editItem/${productItem._id}`}>
                                                <button className="btn bg-orange-500 text-white">
                                                    <FaEdit />
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteItem(productItem)}
                                                className="btn bg-[#B91C1C] w-10 h-10 flex items-center justify-center btn-xs"
                                            >
                                                <RiDeleteBinLine className="text-2xl text-white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <ManagePopularItem />
            </div>
            <div>
                <ManageChef />
            </div>
            <div>
                <ManageRecipe />
            </div>
            <div>
                <ManageReview />
            </div>
        </div>
    );
};

export default ManageItems;
