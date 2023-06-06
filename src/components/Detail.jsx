import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../feature/services/blogApi";

const Detail = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);

  return (
    <div className=" flex justify-center mt-20">
      <div className=" h-96 flex flex-col gap-3 shadow-md w-72">
        <img className=" h-[250px]" src={blog?.image} alt="" />
        <div className=" flex gap-3 flex-col items-center">
          <h2>{blog?.title}</h2>
          <p>{blog?.desc}</p>
          <div className=" flex gap-7">
            <Link to={`/`}>
              <button className=" rounded my-1 text-white px-5 py-1 bg-gray-600 hover:bg-gray-500">
                Back
              </button>
            </Link>
            <Link to={`/edit/${blog?.id}`}>
              <button className=" rounded my-1 text-white px-5 py-1 bg-purple-600 hover:bg-purple-500">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
