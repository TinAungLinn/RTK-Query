import React from "react";
import { Link } from "react-router-dom";
import { useGetDeleteBlogMutation } from "../feature/services/blogApi";

const BlogsCard = ({ blog }) => {
  const [getDeleteBlog] = useGetDeleteBlogMutation();

  return (
    <div className=" h-96 flex flex-col gap-3 shadow-md w-72">
      <img className=" h-[250px]" src={blog?.image} alt="" />
      <div className=" flex flex-col gap-3 items-center">
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>
        <div className=" flex gap-7">
          <Link to={`/detail/${blog.id}`}>
            <button className=" rounded my-1 text-white px-5 py-1 bg-gray-600 hover:bg-slate-500">
              Detail
            </button>
          </Link>
          <button
            onClick={() => getDeleteBlog(blog?.id)}
            className=" rounded my-1 text-white px-5 py-1 bg-red-600 hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
