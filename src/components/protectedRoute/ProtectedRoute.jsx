import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const { token, user } = useSelector((state) => state.auth)
    if (!token || !user) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}

export default ProtectedRoute