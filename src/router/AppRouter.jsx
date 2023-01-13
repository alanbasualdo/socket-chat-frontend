import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from "./AuthRouter"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChatPage />} />
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path="*" element={<p>La página no existe.</p>} />
            </Routes>
        </BrowserRouter>
    )
}