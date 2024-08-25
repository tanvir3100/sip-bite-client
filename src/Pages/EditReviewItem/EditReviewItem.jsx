import { useLoaderData } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const EditReviewItem = () => {
    const { name, description, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axios = useAxios();

    const onSubmit = async (data) => {
        try {
            // Prepare the review data with just name and description
            const reviewItem = {
                name: data.name,
                description: data.description,
            };

            // Update the review on the backend
            const reviewRes = await axios.patch(`/reviews/${_id}`, reviewItem);
            if (reviewRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error('Failed to update review:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1 className='text-5xl text-center'>Edit Review</h1>
            <h3 className='text-sm text-center'>Edit your review</h3>
            <div className="w-5/3 bg-slate-200 rounded-3xl p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Name*</span>
                        </div>
                        <input
                            {...register("name")}
                            defaultValue={name}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Description*</span>
                        </div>
                        <textarea
                            {...register("description")}
                            defaultValue={description}
                            className="textarea textarea-bordered h-24"
                            placeholder="Description"></textarea>
                    </label>
                    <button className="btn btn-outline mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditReviewItem;
