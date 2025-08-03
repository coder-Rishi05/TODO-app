import { Plus } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-7xl p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary -tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4  ">
            <Link to={"/create"} className="btn btn-primary">
              <Plus className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
