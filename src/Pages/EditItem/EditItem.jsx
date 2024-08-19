import { useLoaderData } from "react-router-dom";
import { useForm } from 'react-hook-form'
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const EditItem = () => {


    const { title, short_description, price, _id } = useLoaderData();

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
                const productItem = {
                    title: data.title,
                    price: data.price,
                    image: res.data.data.display_url,
                    short_description: data.short_description,
                };

                // Update the product on the backend
                const productRes = await axios.patch(`/products/${_id}`, productItem);
                if (productRes.data.modifiedCount > 0) {
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
            console.error('Failed to update product:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1 className='text-5xl text-center'>Edit Featured Product</h1>
            <h3 className='text-sm text-center'>Edit your Featured Product</h3>
            <div className="w-5/3 bg-slate-200 rounded-3xl p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Products Title*</span>
                        </div>
                        <input
                            {...register("title")}
                            defaultValue={title}
                            type="text"
                            placeholder="title"
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                    {...register("price")}
                                    type="text"
                                    defaultValue={price}
                                    placeholder="Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Product Details*</span>
                        </div>
                        <textarea defaultValue={short_description} {...register("short_description")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full mt-5 max-w-xs" />
                    <br />
                    <button className="btn btn-outline mt-5">Update</button>
                </form>
            </div>
        </div>
    );
};

export default EditItem;