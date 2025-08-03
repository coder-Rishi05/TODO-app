import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";

const HomePage = () => {
  const [rate_limit, setRate_limit] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);



  return (
    <div className="min-h-screen   ">
      <Navbar />
      {rate_limit && <RateLimit />}
    </div>
  );
};

export default HomePage;
