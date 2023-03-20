import { Header } from "../components/Header/Header";
import * as C from "../components/Section/Section.styles";

export const PageNotFound = () => {
    return (
        <>
            <Header />

            <C.Section>
                <C.PageNotFound>
                    <h1>PÁGINA NÃO ENCONTRADA</h1>
                    <h2>404</h2>
                </C.PageNotFound>
            </C.Section>
        </>
    )
}