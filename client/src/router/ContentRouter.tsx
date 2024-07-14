import { FC, Suspense } from "react";
import { routes } from "./routes";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";

export const ContentRouter: FC = () => {
    return (
        <Suspense>
            <Routes>
                {
                    routes.map(route => {
                        return (
                            <Route key={`main-${route.route}`} path={route.route} element={<route.component/>}></Route>
                        )
                    })
                }
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </Suspense>
    )
}