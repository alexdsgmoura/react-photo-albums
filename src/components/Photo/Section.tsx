import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PhotoProps } from '../../types/Photo'
import { LoadingIcon } from '../Section/Section.styles'

import * as C from './Photo.styles'

export const photoSection = () => {
  const [photo, setPhoto] = useState<PhotoProps[]>([])
  const [photoItem, setPhotoItem] = useState<PhotoProps>()

  const { id } = useParams()

  const loadPhotos = async () => {
    try {
      const response: PhotoProps[] = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json()

      setPhoto(response)
    } catch (e) {
      alert('Não foi possivel carregar.')
    }
  }

  useEffect(() => {
    setTimeout(async () => {
      await loadPhotos()

      setPhotoItem(photo.filter((photo) => photo.id === parseInt(id as string))[0])
    }, 1000)
  }, [photo, setPhoto])

  return (
    <>
      {!photoItem &&
        <C.Section display='flex'>
          <LoadingIcon visible={true}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
          </LoadingIcon>
        </C.Section>
      }

      {photoItem &&
        <C.Section display='grid'>
          <C.Photo>
            <C.PhotoItem src={`${photoItem?.url}`} />
          </C.Photo>

          <C.PhotoDesc>
            <C.Span>{photoItem.title}</C.Span>
          </C.PhotoDesc>
        </C.Section>
      }
    </>
  )
}