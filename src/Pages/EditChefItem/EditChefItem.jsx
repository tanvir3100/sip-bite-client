import { useLoaderData } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const EditChefItem = () => {


    const { name, title, bio, _id } = useLoaderData();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const { register, handleSubmit } = useForm();
    const axios = useAxios();
    const onSubmit = async (data) => {
        try {
            // Image upload to imgbb and get the URL
            const imageFile = { image: data.image[0] };
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.data.success) {
                // Prepare the product data
                const recipeItem = {
                    name: data.name,
                    title: data.title,
                    bio: data.bio,
                    image: res.data.data.display_url,
                };

                // Update the recipe on the backend
                const recipeRes = await axios.patch(`/chefs/${_id}`, recipeItem);
                if (recipeRes.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.title} is updated successfully`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        } catch (error) {
            console.error('Failed to update recipe:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1 className='text-5xl text-center'>Edit Chef</h1>
            <h3 className='text-sm text-center'>Edit your Chef</h3>
            <div className="w-5/3 bg-slate-200 rounded-3xl p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Chef Name*</span>
                        </div>
                        <input
                            {...register("name")}
                            defaultValue={name}
                            type="text"
                            placeholder="name"
                            className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Chef Title*</span>
                        </div>
                        <input
                            {...register("title")}
                            defaultValue={title}
                            type="text"
                            placeholder="title"
                            className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Bio*</span>
                        </div>
                        <textarea defaultValue={bio} {...register("bio")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full mt-5 max-w-xs" />
                    <br />
                    <button className="btn btn-outline mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditChefItem;