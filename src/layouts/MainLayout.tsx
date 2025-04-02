import { Outlet } from "react-router"
import { Navbar } from "../components/ui/Navbar"

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
