import React, { useState } from "react";
import WindowWrapper from "./WindowWrapper";
import type { WindowProps } from "../../types/windowProps";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { showErrorToast, showSuccessToast } from "../toast/CustomToast";

const MessageWindow: React.FC<WindowProps> = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/message`, form);
      showSuccessToast("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      showErrorToast("Error submitting Message. Please try again.");
      console.error(error);
    }
  };

  return (
    <WindowWrapper title="Message Me" onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto p-6 rounded-lg bg-zinc-900 shadow-lg space-y-4 text-white"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-indigo-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-indigo-500 outline-none"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-indigo-500 outline-none"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 focus:border-indigo-500 outline-none resize-none"
        />

        <button
          type="submit"
          className="flex items-center justify-center border border-zinc-700 focus:border-indigo-500 gap-2 w-full py-3 rounded-md transition-colors duration-200 font-semibold"
        >
          <FiSend className="text-lg" />
          Send Message
        </button>
      </form>
    </WindowWrapper>
  );
};

export default MessageWindow;
