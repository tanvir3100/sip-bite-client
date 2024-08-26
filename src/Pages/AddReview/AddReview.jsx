import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';

const AddReview = () => {
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
                // Prepare review data
                const reviewItem = {
                    name: data.name,
                    description: data.description,
                };

                // Send review data to the server
                try {
                    const reviewRes = await axiosInstance.post('/reviews', reviewItem);
                    console.log('review creation response:', reviewRes.data);

                    if (reviewRes.data.insertedId) {
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
                    console.error('Error adding recipe:', error);
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
            <h1 className='text-5xl text-center'>Add Review</h1>
            <h3 className='text-sm text-center'>Add your New Review</h3>
            <div className="w-5/6 bg-slate-200 rounded-3xl p-5 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Customer Name*</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Customer Name"
                            className="input input-bordered w-full" />
                    </label> 
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Description*</span>
                        </div>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <br />
                    <button className="btn btn-outline mt-5">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;
