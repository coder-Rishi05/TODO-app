import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";
import axios from "axios";

const HomePage = () => {
  const [rate_limit, setRate_limit] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.post("http://localhost:5173/api/notes");

        console.log(res.data);
      } catch (err) {
        console.log("Problem in getting the request ", err);
      }
    };
  }, []);

  return (
    <div className="min-h-screen   ">
      <Navbar />
      {rate_limit && <RateLimit />}
    </div>
  );
};

export default HomePage;
