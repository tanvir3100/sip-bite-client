import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: 'https://sipbite-server-side.vercel.app'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;