import { Link } from "react-router-dom"

const Card = ({ blog }) => {
    return (

        <>
            <Link to={`/blog/${blog._id}`}>
                <div className="p-6">
                    <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://bishalrijal.info.np/wp-content/uploads/2024/05/Bishal-Rijal-Computer-Science.png" alt="blog" />
                    <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blog.title}</h1>
                    <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{blog.subTitle}</h2>
                    <p className="mx-auto text-base leading-relaxed text-gray-500">
                        {blog.description}</p>
                    <div className="mt-4">
                        <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card
