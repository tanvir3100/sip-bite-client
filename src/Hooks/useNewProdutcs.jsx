import { useQuery } from "@tanstack/react-query";
import useAxios from './useAxios';

const useNewProdutcs = () => {
    const axiosSecure = useAxios();
    const { refetch, data: product = [] } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products`)
            return res.data
        }
    });
    return [product, refetch]
};

export default useNewProdutcs;



