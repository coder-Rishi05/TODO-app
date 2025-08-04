// import Link from 'react'
import { Link } from "react-router";
import Note from "../../../Backend/src/models/Notes";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lb/utils";

const NoteCard = (props) => {
  const { data } = props;

  return (
    <Link
      to={`/note/${data._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 m-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{data.title}</h3>
        <p className="text-base-content/70 line-clamp-3 ">{data.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60 ">
            {formatDate(new Date(data.createdAt))}
          </span>
          {/* <span>{data.updatedAt}</span> */}
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
          </div>
          <button className="btn btn-xs btn-ghost">
            <Trash2Icon className="size-4 text-red-500" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
