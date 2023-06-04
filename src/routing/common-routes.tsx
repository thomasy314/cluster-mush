import { Route } from "react-router-dom"
import { ContactPage } from "../pages/contact"
import { PrivacyPolicy, TermsOfUse } from "../pages/legal"

export const CommonRoutes = (
        <>
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/contact' element={<ContactPage />} />
        </>
)