import { BrowserRouter, Route, Routes } from "react-router"
import { MainLayout } from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
