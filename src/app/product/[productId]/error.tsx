"use client";
import React from "react";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <p>Error: {error.message}</p>
      <button
        className="px-6 py-2 bg-blue-400 hover:bg-blue-800"
        onClick={reset}
      >
        Reload
      </button>
    </div>
  );
};

export default error;
