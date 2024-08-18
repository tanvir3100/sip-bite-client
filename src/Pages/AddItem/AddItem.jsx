import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';

const AddItems = () => {
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const { register, handleSubmit, reset } = useForm();
    const axiosInstance = useAxios();

    const onSubmit = async (data) => {
        try {
            console.log('Form Data:', data);

            // Image upload to imgbb
            const formData = new FormData();
            formData.append('image', data.image[0]);

            const res = await axiosInstance.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Image upload response:', res.data);

            if (res.data.success) {
                // Prepare product data
                const productItem = {
                    title: data.title,
                    image: res.data.data.display_url,
                    price: data.price,
                    description: data.description,
                };

                // Send product data to the server
                try {
                    const productRes = await axiosInstance.post('/products', productItem);
                    console.log('Product creation response:', productRes.data);

                    if (productRes.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${data.name} added successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                } catch (error) {
                    console.error('Error adding product:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Please try again.',
                    });
                }
            } else {
                throw new Error('Image upload failed');
            }
        } catch (error) {
            console.error('Error adding item:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
            });
        }
    };

    return (
        <div>
            <h1 className='text-5xl text-center'>Add Item</h1>
            <h3 className='text-sm text-center'>Add your New Products</h3>
            <div className="w-5/6 bg-slate-200 rounded-3xl p-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Product title*</span>
                        </div>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-5">
                        <div className="flex-1">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Price*</span>
                                </div>
                                <input
                                    {...register("price", { required: true })}
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Product Details*</span>
                        </div>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full mt-5 max-w-xs" />
                    <br />
                    <button className="btn btn-outline mt-5">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
