import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SinglePage from "./pages/SinglePage"
import Create from "./pages/Create"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SinglePage />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App