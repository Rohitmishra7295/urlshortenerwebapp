import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const messages = [
  "Oops! That link got lost in cyberspace. 🚀",
  "This shortened URL doesn’t seem to exist. 🧐",
  "Hmm... Are you sure this is the right link? 🤔",
  "404: The link you're looking for has vanished! 💨",
  "Broken link alert! Maybe try shortening a new one? 🔗",
];

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Warning Icon */}
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4 animate-bounce" />

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800">
        Oops! Invalid or Expired URL.
      </h1>

      {/* Random Funny Message */}
      <p className="text-gray-600 mt-2 mb-6 text-lg">
        {messages[Math.floor(Math.random() * messages.length)]}
      </p>

      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 flex items-center gap-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition active:scale-95"
      >
        <FaHome /> Go back to home
      </button>
    </div>
  );
};

export default ErrorPage;