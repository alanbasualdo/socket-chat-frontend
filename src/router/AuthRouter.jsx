import { Routes, Route } from "react-router-dom"
import '../css/login-register.css'
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AuthRouter = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="*" element={<p>La página no existe</p>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}