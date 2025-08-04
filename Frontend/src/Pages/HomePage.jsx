import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";
import axios from "axios";
import toast from "react-hot-toast";

const HomePage = () => {
  const [rate_limit, setRate_limit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:1234/api/notes");
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
    <div className="min-h-screen   ">
      <Navbar />

      {rate_limit && <RateLimit />}
      <div className="max-w-7xl mx-auto p-4 mt-6 ">
      
      </div>
    </div>
  );
};

export default HomePage;
