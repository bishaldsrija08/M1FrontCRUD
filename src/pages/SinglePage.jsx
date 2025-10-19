import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../component/Navbar";

const SinglePage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [blog, setBlog] = useState({})
    const fetchSingleBlog = async () => {
        const response = await axios.get(`http://localhost:3000/single/${id}`)
        setBlog(response.data.data)
        console.log(response.data.data)
    }
    useState(() => {
        fetchSingleBlog()
    }, [])

    const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:3000/delete/${id}`);
        if (response.status === 200) {
            alert("Blog deleted successfully");
            navigate("/");
        }
    }
    return (
        <>
            <Navbar />
            <div className="w-full h-full bg-white dark:bg-gray-800">
                <div className="w-full mx-auto py-10 bg-white dark:bg-gray-800">
                    {/*  */}
                    <div className="w-[94%] mx-auto flex gap-1 items-center text-gray-500 sm:text-[12px] xs:text-[10px] font-semibold dark:text-gray-400">
                        <span>Blog</span>
                        <span className="font-semibold text-md">&gt;</span>
                        <span>Framework</span>
                        <span className="font-semibold text-md">&gt;</span>
                        <span>{blog.title}</span>
                    </div>
                    {/*  */}
                    <h1 className="w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-4 pt-8 dark:text-white">{blog.title}</h1>
                    {/* Blog Cover */}
                    <img src="https://bishalrijal.info.np/wp-content/uploads/2024/05/Bishal-Rijal-Computer-Science.png" alt="Blog Cover" className="xl:w-[80%] xs:w-[96%] mx-auto lg:h-[560px] md:h-[480px] rounded-lg" />
                    {/* Blog Info */}
                    <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
                        <div className="flex gap-2 items-center">
                            <img src="https://media.licdn.com/dms/image/v2/D5603AQHHsDzbv9g9bg/profile-displayphoto-shrink_800_800/B56ZVUv4dkHQAc-/0/1740883594927?e=1762387200&v=beta&t=gxhjs2HpNG8dAh_0zhVvLBA0HeEykuS8yV8RjsxjM08" alt="Bloger Profile" className="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full" />
                            <h2 className="text-sm font-semibold dark:text-white">Bishal Rijal</h2>
                        </div>
                        <div className="dark:text-gray-500">|</div>
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">MAY 20, 2024</h3>
                        <div className="dark:text-gray-500">|</div>
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">5 MIN READ</h4>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 text-white m-3 px-4 py-2 rounded">Edit</button>
                        <button onClick={handleDelete} className="bg-red-500 text-white px-4 m-3 py-2 rounded">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePage