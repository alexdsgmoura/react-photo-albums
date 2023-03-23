import * as C from '../components/Photo/Photo.styles'

import { Header } from '../components/Header/Header'
import * as P from '../components/Photo/Section'

export const Photo = () => {
  return (
    <C.Container>
      <Header />
      <P.photoSection />
    </C.Container>
  )
}