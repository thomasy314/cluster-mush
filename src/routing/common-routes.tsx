import { Route } from "react-router-dom"
import { ReturnPolicy } from "../pages/legal-docs"
import { MainPagePaths } from "./main-routes"
import { ContactPage } from "../pages/contact"

export const CommonRoutes = (
        <>
            <Route path='return-policy' element={<ReturnPolicy />} />
            <Route path='contact' element={<ContactPage />} />
        </>
)