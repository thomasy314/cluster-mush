import { Route } from "react-router-dom"
import { ContactPage } from "../pages/contact"
import { PrivacyPolicy, ReturnPolicy } from "../pages/legal"

export const CommonRoutes = (
        <>
            <Route path='/return-policy' element={<ReturnPolicy />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<ContactPage />} />
        </>
)