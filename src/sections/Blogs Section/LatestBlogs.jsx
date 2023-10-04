import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/blog'
import { Link } from 'react-router-dom'

const LatestBlogs = () => {

    const dispatch = useDispatch()

    const { latestBlogs } = useSelector(state => state.blog)

    useEffect(() => {

        dispatch(getAllBlogs())

    }, [])
    return (
        <>
            {
                latestBlogs && <div className="md:flex hidden px-0 py-8 min-w-[25%] flex-col">
                    <div className="sticky top-0 py-4">
                        <h2 className="text-2xl font-bold">Recent Posts</h2>
                        <ul className="mt-4 min-w-full">
                            {latestBlogs.map((blog, index) => (
                                <li key={index} className="mb-2 min-w-full">
                                    <Link to={`/blog/${blog._id}`} className='hover:text-blue-600'> {blog.title}</Link>
                                    <hr className="my-3 px-8" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }

        </>
    )
}

export default LatestBlogs