import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PublicRoute = () => {
  const { token, user } = useSelector((state) => state.auth)
  if (token && user) {
    return <Navigate to="/dashboard" replace />
  }
  return <Outlet />
}

export default PublicRoute