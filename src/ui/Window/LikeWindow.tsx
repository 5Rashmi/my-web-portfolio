import React, { useEffect, useState } from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import { showSuccessToast } from "../toast/CustomToast";
import axios from "axios";

const LikeWindow: React.FC<WindowProps> = ({ onClose }) => {
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState("");
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchLikes = async () => {
    const res = await axios.get(`${BASE_URL}/api/like`);
    setCount(res.data.count);
  };

  const handleLike = async () => {
    const res = await axios.post(`${BASE_URL}/api/like`);
    setCount(res.data.count);
  };

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) return;

    await axios.post(`${BASE_URL}/api/comment`, { message: comment });
    setComment("");
    showSuccessToast("Thanks for your suggestion.");
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  return (
    <WindowWrapper title="Like" onClose={onClose}>
      <div className="p-4 space-y-4 text-white">
        <p className="text-sm text-gray-300 mb-3">
          If you like my portfolio, give it a like ❤️
        </p>
        <button
          onClick={handleLike}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2.5 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:from-pink-600 hover:to-red-600"
        >
          <span className="text-lg">❤️</span>
          <span className="font-medium">Like ({count})</span>
        </button>

        <form onSubmit={handleComment} className="flex flex-col gap-2">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Any suggestions or feedback?"
            className="p-2 bg-gray-800 border border-gray-600 rounded resize-none"
            rows={3}
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700"
          >
            Submit Suggestion
          </button>
        </form>
      </div>
    </WindowWrapper>
  );
};

export default LikeWindow;
