import { useParams } from "react-router-dom";

import { Header } from "../components/Header/Header";
import * as C from '../components/Section/Section.styles'
import { Photos as PhotosComponent } from "../components/Photos/Photos";

export const Photos = () => {
    const params = useParams()

    const filterByAlbumId = async (albumId: number) => {
        const request = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()
    }

    return (
        <>
            <Header />
            <C.Section>
                <PhotosComponent />
            </C.Section>
        </>
    )
}