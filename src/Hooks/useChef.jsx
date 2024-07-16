import { useQuery } from "@tanstack/react-query";
import useAxios from './useAxios';

const useChef = () => {
    const axiosSecure = useAxios();
    const { refetch, data: chef = [] } = useQuery({
        queryKey: ['chef'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/chefs`)
            return res.data
        }
    });
    return [chef, refetch]
};

export default useChef;