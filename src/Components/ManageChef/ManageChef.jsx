import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useChef from "../../Hooks/useChef";

const ManageChef = () => {
    const [chef] = useChef();
    const axios = useAxios();

    const handleDeleteItem = async (item) => {
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
                const res = await axios.delete(`/Chefs/${item._id}`);
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
            <h1 className='text-5xl text-center'>Manage Chef</h1>
            <h3 className='text-sm text-center mt-2'>Manage your chef here</h3>
            <div className="bg-white mx-auto p-4">
                <div className="flex justify-between">
                    <h2 className="text-3xl mb-5">Available Chef: {chef.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-base-200">
                        {/* Head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Bio</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chef?.map((chefItem, index) => (
                                <tr key={chefItem._id}>
                                    <th>{index + 1}</th>
                                    <td><img className="w-20 rounded-lg" src={chefItem.image} alt={chefItem.title} /></td>
                                    <td>{chefItem.name}</td>
                                    <td>{chefItem.title}</td>
                                    <td>{chefItem.bio}</td>
                                    <td>
                                        <Link to={`/dashboard/editChefItem/${chefItem._id}`}>
                                            <button className="btn bg-orange-500 text-white">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(chefItem)}
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
    );
};


export default ManageChef;