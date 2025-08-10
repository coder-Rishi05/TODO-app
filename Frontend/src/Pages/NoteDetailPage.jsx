import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lb/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, Loader2Icon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Failed to fetch the note.", error);
        toast.error("Failed to fetch the note. ");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  console.log(note);

  console.log({ id });

  const handleDelete = () => {};

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <Loader2Icon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen  relative h-full w-full ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />

      <div className="container mx-auto px-4 py-4">
        <div className="max-w-2xl mx-auto  ">
          <div className="flex items-center justify-between mb-6  ">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" />
              Back to notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="size-5" />
              Delete Note
            </button>
          </div>
          <div className="card bg-base-300">
            <div className="card-body">
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  className="input pl-6 input-bordered border-green-400 placeholder:text-green-400  "
                  type="text"
                  placeholder="Note Title"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4 ">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  className="textarea  textarea-bordered h-32 mt-4 resize-none border-green-400 placeholder:text-green-400 p-6  "
                  type="text"
                  placeholder="Write your notes here..."
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
