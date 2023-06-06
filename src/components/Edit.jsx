import React, { useEffect, useState } from "react";
import { useEditBlogMutation, useGetSingleBlogQuery } from "../feature/services/blogApi";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () => {
  const {id} = useParams();
    const { data: blog} = useGetSingleBlogQuery(id)

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const [editBlog] = useEditBlogMutation();

  useEffect(()=> {
    setTitle(blog?.title),
    setDesc(blog?.desc),
    setImage(blog?.image)
  },[blog])

  const nav = useNavigate();

  const editBlogHandler = (e) => {
    e.preventDefault();
    const newData = { id, title, desc, image };
    editBlog(newData);
    nav("/");
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <form
        onSubmit={editBlogHandler}
        className="flex flex-col gap-10 p-14 shadow-lg w-96"
      >
        <h1 className=" text-2xl text-slate-800 font-semibold">Edit Blog</h1>
        <input
          defaultValue={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title..."
          className=" outline-none border-b border-b-slate-800"
        />
        <input
          defaultValue={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          placeholder="Desc..."
          className=" outline-none border-b border-b-slate-800"
        />
        <input
          defaultValue={image}
          required
          onChange={(e) => setImage(e.target.value)}
          type="text"
          placeholder="Image..."
          className=" outline-none border-b border-b-slate-800"
        />
        <div className=" flex justify-between">

        <button
          className=" px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
          type="submit"
        >
          Update
        </button>
        <Link to={"/"}>
        <button className=" px-5 py-1 bg-slate-600 hover:bg-slate-500 rounded text-white">Back</button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Edit;
