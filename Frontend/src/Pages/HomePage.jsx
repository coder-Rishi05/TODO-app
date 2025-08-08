import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import api from "../lb/axios";

const HomePage = () => {
  const [rate_limit, setRate_limit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        const data = res.data;
        setNotes(data);
        console.log(data);
        setRate_limit(false);
      } catch (err) {
        console.log("Problem in getting the request ", err);

        if (err.response?.status === 429) setRate_limit(true);
        else toast.error("Failed to load notes");
        setRate_limit(true);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen   " data-theme="forest">
      <Navbar />

      {rate_limit && <RateLimit />}
      <div className="max-w-7xl mx-auto p-4 mt-6 ">
        {loading && (
          <div className="text-center text-primary py-10">
            {" "}
            Loading notes...{" "}
          </div>
        )}

        {notes.length > 0 && !rate_limit && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {notes.map((note, index) => (
              <NoteCard data={note} key={note._id} />
              // <div key={note._id} >

              //   {note.title} |

              //   {note.content}
              //   {/* {note.updatedAt}
              //   {note.createdAt} */}
              // </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
