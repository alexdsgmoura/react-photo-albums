import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllUsers: async () => {
        const response = await axiosInstance('/users')

        return response.data
    },

    getAllAlbumsFromUserId: async () => {
        const response = await axiosInstance('/albums')

        return response.data
    },

    getAllPhotosFromAlbumId: async () => {
        const response = await axiosInstance('/photos')

        return response.data
    },

    getPhotoFromId: async (PhotoId: string) => {
        const response = await axiosInstance(`/photos/${PhotoId}`)

        return response.data
    }
}