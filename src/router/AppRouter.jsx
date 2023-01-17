import { useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {

    const { auth, verificarToken } = useContext(AuthContext)

    useEffect(() => {
        verificarToken()
    }, [verificarToken])

    if (auth.checking) {
        return <h1>Espere por favor...</h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth/*"
                    element={<PublicRoute isAuthenticated={auth.logged} />}
                />
                <Route
                    path="/"
                    element={<PrivateRoute isAuthenticated={auth.logged} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}