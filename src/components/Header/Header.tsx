import { Link } from "react-router-dom"

import * as C  from "./Header.styles"

export const Header = () => {
    return (
        <C.Header>
            <C.Container>
                <Link to='/'>
                    <C.title>ASG <C.span>ALBUMS</C.span></C.title>
                </Link>
            </C.Container>
        </C.Header>
    )
}