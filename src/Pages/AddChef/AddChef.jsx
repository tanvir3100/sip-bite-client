import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';

const AddChef = () => {
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
                const chefItem = {
                    name: data.name,
                    title: data.title,
                    bio: data.bio,
                    image: res.data.data.display_url,
                };

                // Send chef data to the server
                try {
                    const chefRes = await axiosInstance.post('/chefs', chefItem);
                    console.log('chef creation response:', chefRes.data);

                    if (chefRes.data.insertedId) {
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
            <h1 className='text-5xl text-center'>Add Chef</h1>
            <h3 className='text-sm text-center'>Add New Chef</h3>
            <div className="w-5/6 bg-slate-200 rounded-3xl p-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Chef name*</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Chef Name"
                            className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Chef title*</span>
                        </div>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            placeholder="Chef Title"
                            className="input input-bordered w-full" />
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Chef Bio*</span>
                        </div>
                        <textarea {...register("bio", { required: true })} className="textarea textarea-bordered h-24" placeholder="Chef Bio"></textarea>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full mt-5 max-w-xs" />
                    <br />
                    <button className="btn btn-outline mt-5">Add Chef</button>
                </form>
            </div>
        </div>
    );
};

export default AddChef;
