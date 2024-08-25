import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useReviews = () => {
    const axiosSecure = useAxios();
    const { refetch, data: review = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews`)
            return res.data
        }
    });
    return [review, refetch]
};

export default useReviews;