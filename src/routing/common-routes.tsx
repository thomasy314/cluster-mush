import { Route } from "react-router-dom"
import { ContactPage } from "../pages/contact"
import { PrivacyPolicy, ReturnPolicy, ShippingPolicy, TermsOfUse } from "../pages/legal"

export const CommonRoutes = (
        <>
            <Route path='/return-policy' element={<ReturnPolicy />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
        </>
)