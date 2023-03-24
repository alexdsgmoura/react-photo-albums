export const api = {
    getAllUsers: async () => {

    },

    getAllAlbumsFromUserId: async () => {

    },

    getAllPhotosFromAlbumId: async () => {

    },

    getPhotoFromId: async (PhotoId: string) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${PhotoId}`)
        const json = await response.json()

        return json
    }
}