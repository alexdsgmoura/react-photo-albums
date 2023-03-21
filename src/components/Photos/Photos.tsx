import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as C from './Photos.style'
import { LoadingIcon, Navigation } from '../Section/Section.styles'

import { PhotoProps } from '../../types/Photo'
import { Link } from 'react-router-dom'
import { Button, CountPages, NextPrevButtonArea, Span } from '../Albums/Albums.style'

export const Photos = () => {
    const [photos, setPhotos] = useState<PhotoProps[]>([])
    const [currentPage, setCurrentPage] = useState(0)
    const [displayedPhotos, setDisplayedPhotos] = useState<PhotoProps[]>([])

    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            loadPhotos(parseInt(id as string))
        }, 1000)
    }, [])

    const loadPhotos = async (id: number) => {
        try {
            const response: PhotoProps[] = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()

            setPhotos(response.filter((photos) => photos.albumId === id))
        } catch (e) {
            alert('Não foi possível carregar as fotos deste album!')
        }
    }

    const handlePreviusPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1)
            const startIndex = (currentPage - 1) * 10
            const endIndex = startIndex + 10
            setDisplayedPhotos(photos.slice(startIndex, endIndex))
        }
    }

    const handleNextPage = () => {
        if (currentPage < Math.ceil(photos.length / 10) - 1) {
            setCurrentPage((nextPage) => nextPage + 1)
            const startIndex = (currentPage + 1) * 10
            const endIndex = startIndex + 10
            setDisplayedPhotos(photos.slice(startIndex, endIndex))
        }
    }

    useEffect(() => {
        if (photos.length > 0) {
            const startIndex = currentPage * 10
            const endIndex = startIndex + 10

            setDisplayedPhotos(photos.slice(startIndex, endIndex))
        }
    }, [photos, setPhotos])

    return (
        <C.Container>
            {photos.length <= 0 &&
                <LoadingIcon visible={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                </LoadingIcon>
            }

            {photos.length > 0 &&
                <C.PhotosList>
                    {displayedPhotos.map((value, index) => (
                        <Link key={index} to={`/albums/${id}/${id}/photo/${value.id}`}><C.PhotoItem key={index} src={value.thumbnailUrl} /></Link>
                    ))}
                </C.PhotosList>
            }

            {photos.length > 0 &&
                <Navigation>
                    <CountPages>
                        <Span>{`Página ${currentPage + 1} de ${Math.ceil(photos.length) / 10}`}</Span>
                    </CountPages>

                    <NextPrevButtonArea>
                        <Button
                            onClick={handlePreviusPage}
                            disabled={currentPage === 0}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </Button>

                        <Button
                            onClick={handleNextPage}
                            disabled={currentPage === Math.ceil(photos.length / 10) - 1}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </Button>
                    </NextPrevButtonArea>
                </Navigation>
            }
        </C.Container>
    )
}