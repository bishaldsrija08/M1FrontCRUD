import { useState } from "react"
import Card from "../component/Card"
import axios from "axios"
import Navbar from "../component/Navbar"

const Home = () => {
  const [blog, setBlog] = useState([])
  const fetchAllBlogs = async () => {
    const response = await axios.get("http://localhost:3000/")
    setBlog(response.data.data)
    // console.log(response.data.data)
  }

  useState(() => {
    fetchAllBlogs()
  }, [])

  return (
    <>
    <Navbar/>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            {blog.map((blog, index) => <Card key={index} blog={blog} />)}
          </div>
        </div>
      </section>

    </>
  )
}

export default Home