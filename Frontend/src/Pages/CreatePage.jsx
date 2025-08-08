import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router";
import axios from "axios";
import api from "../lb/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content);
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required !");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", { title, content });
      toast.success("Note created successfully.");
      navigate("/");
    } catch (err) {
      if (err.response.status === 429) {
        toast.error("Slow down ! you are creating notes too fast. ", {
          duration: 4000,
          icon: "💀",
        });
      } else toast.error("failed to create note.");
    } finally {
    }
  };

  return (
    <div className="min-h-screen w-full relative ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-2xl mx-auto ">
          <Link to="/" className="btn-ghost btn mb-6 ">
            <ArrowLeftIcon className="size-5" />
            Back to notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="card-title text-2xl mb-4">Create new Note</div>
              <form action="" onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Note Title"
                    className="input input-border cursor-pointer border-green-400 "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control  mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Write your Note here... "
                    className=" textarea textarea-bordered h-60 w-full  border-green-400  "
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    disabled={loading}
                    type="submit"
                    className="btn btn-primary"
                  >
                    {loading ? " Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
