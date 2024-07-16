import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const usePopulars = () => {
    const axiosSecure = useAxios();
    const { refetch, data: popular = [] } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/popular`)
            return res.data
        }
    });
    return [popular, refetch]
};

export default usePopulars;