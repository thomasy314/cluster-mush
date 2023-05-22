import { Route } from "react-router-dom"
import { ContactPage } from "../pages/contact"
import { ReturnPolicy } from "../pages/legal-docs"

export const CommonRoutes = (
        <>
            <Route path='return-policy' element={<ReturnPolicy />} />
            <Route path='contact' element={<ContactPage />} />
        </>
)