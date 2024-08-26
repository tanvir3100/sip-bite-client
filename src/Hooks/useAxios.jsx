import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: 'https://sip-bite-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic
};

export default useAxios;