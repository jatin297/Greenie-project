import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between items-center mt-1">
      <div className="relative">
        <input
          className="pl-8 pr-3 py-2 w-64 border border-purple-400 rounded-md focus:outline-none focus:border-purple-500"
          type="text"
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search in Table below.."
        />
      </div>
    </div>
  );
};
