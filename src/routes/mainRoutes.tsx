import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Album } from "../pages/Album";
import { PageNotFound } from "../pages/PageNotFound";

export const MainRoutes = () => {
    const routes = useRoutes([
        {path: '/', element: <Home />},
        {path: '/album/:id', element: <Album />},
        {path: '*', element: <PageNotFound />}
    ])

    return routes
}