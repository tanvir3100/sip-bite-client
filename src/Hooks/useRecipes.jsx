import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useRecipes = () => {
    const axiosSecure = useAxios();
    const { refetch, data: recipes = [] } = useQuery({
        queryKey: ['recipe'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/recipes`)
            return res.data
        }
    });
    return [recipes, refetch]
};

export default useRecipes;