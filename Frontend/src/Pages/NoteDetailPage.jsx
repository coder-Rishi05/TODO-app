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
    <div className="min-h-screen bg-base-200  ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6  ">
          <Link to="/" className="btn btn-ghost">
            <ArrowLeftIcon className="size-5" />
            Back to notes
          </Link>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            <Trash2Icon className="size-5" />
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
