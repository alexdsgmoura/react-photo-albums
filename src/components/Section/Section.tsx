import { useEffect, useState } from 'react'
import * as C from './Section.styles'

import { AlbumType } from '../../types/Album'

export const Section = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [displayedAlbums, setDisplayedAlbums] = useState<AlbumType[]>([])

  useEffect(() => {
    setTimeout(() => {
      loadAlbums()
    }, 1000)
  }, [])

  useEffect(() => {
    if (albums.length > 0) {
      const startIndex = currentPage * 10
      const endIndex = startIndex + 10
      setDisplayedAlbums(albums.slice(startIndex, endIndex + 1))
    }
  }, [albums, currentPage])

  const loadAlbums = async () => {
    const response = await (await fetch('https://jsonplaceholder.typicode.com/albums')).json()

    setAlbums(response)
  }

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return (
    <C.Section>
      {albums.length <= 0 &&
        <C.LoadingIcon visible={true} onClick={loadAlbums}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </svg>
        </C.LoadingIcon>
      }

      {displayedAlbums.length > 0 &&
        <C.Albums>
          <ul>
            {displayedAlbums.map((value, index) => (
              <li key={index}>{value.title}</li>
            ))}
          </ul>

          <C.Navigation>
            <button
              type='button'
              disabled={currentPage === 0}
              onClick={handlePreviusPage}
              title='voltar página'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
            </button>

            <span>Página {currentPage + 1} de {Math.ceil(albums.length) / 10}</span>

            <button
              type='button'
              disabled={currentPage === Math.ceil(albums.length / 10) - 1}
              onClick={handleNextPage}
              title="Proxima página"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </C.Navigation>
        </C.Albums>
      }
    </C.Section>
  )
}