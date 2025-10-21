import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SinglePage from "./pages/SinglePage"
import Create from "./pages/Create"
import Edit from "./pages/Edit"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SinglePage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App