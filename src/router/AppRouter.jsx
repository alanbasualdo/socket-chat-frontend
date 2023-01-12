import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import { ChatPage } from "../pages/ChatPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="chat" element={<ChatPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="/*" element={<Navigate to="/chat" />} />
                </Routes>
            </Router>
        </>
    )
}
