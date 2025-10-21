import { useEffect, useState } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const Edit = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState({
        title: "",
        subTitle: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setBlog({
            ...blog,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.patch(`https://m1crud.onrender.com/update/${id}`, blog)
        if (response.status === 200) {
            alert("Blog updated successfully")
            navigate("/")
        }
    }

    const fetchSingleBlog = async () => {
        const response = await axios.get(`https://m1crud.onrender.com/single/${id}`)
        setBlog(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        fetchSingleBlog()
    }, [])

    return (
        <>
            <Navbar />
            <div className="bg-white border-4 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Create Blog
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <form>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Blog Title</label>
                                <input value={blog.title} onChange={handleChange} type="text" name="title" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Blog Subtitle</label>
                                <input value={blog.subTitle} onChange={handleChange} type="text" name="subTitle" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                <textarea value={blog.description} onChange={handleChange} name="description" id="product-details" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" defaultValue={""} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b">
                    <button onClick={handleSubmit} className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Edit
