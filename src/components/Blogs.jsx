import React from "react";
import { useGetBlogsQuery } from "../feature/services/blogApi";
import BlogsCard from "./BlogsCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();

  return (
    <>
      <Link to={"/create"}>
        <div className=" flex justify-center mt-5">
          <button className=" px-5 py-1 bg-slate-600 hover:bg-slate-500 rounded text-white">
            Create
          </button>
        </div>
      </Link>
      <div className=" mt-20 flex flex-wrap justify-center gap-5">
        {blogs?.map((blog) => {
          return <BlogsCard key={blog.id} blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Blogs;
