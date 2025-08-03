import { ZapIcon } from "lucide-react";
import React from "react";

const RateLimit = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className=" border border-primary/30 rounded-lg shadow-md ">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 mb:mb-0 md:mr-6 ">
            <ZapIcon className="size-10 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-bold mb-2">Rate Limit Reached</h1>
            <p className="text-base-content mb-1">
              You've made too many requests in a short period. Please wait a
              moment.
            </p>
            <p className="text-sm text-base-content/70">
              Try sagain in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
