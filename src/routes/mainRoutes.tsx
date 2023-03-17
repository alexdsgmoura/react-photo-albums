import { useRoutes } from "react-router-dom";

import { Home } from "../pages/Home";

export const MainRoutes = () => {
    const routes = useRoutes([
        {path: '/', element: <Home />}
    ])

    return routes
}