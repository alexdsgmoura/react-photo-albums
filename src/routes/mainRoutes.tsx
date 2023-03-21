import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Photos } from "../pages/Photos";
import { Albums } from "../pages/Albums";
import { PageNotFound } from "../pages/PageNotFound";

export const MainRoutes = () => {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/albums/:user', element: <Albums /> },
        { path: '/albums/:id/:id', element: <Photos /> },
        { path: '*', element: <PageNotFound /> }
    ])

    return routes
}