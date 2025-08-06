import React from "react";
import type { WindowProps } from "../../types/windowProps";
import WindowWrapper from "./WindowWrapper";
import { blogsData } from "../../datas/blogs.data";

const BlogWindow: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <WindowWrapper title="Blog" onClose={onClose}>
      <div className="max-h-[35rem] overflow-y-auto scrollbar-custom">
        {blogsData.map((blog, index) => (
          <div key={index} className="p-4">
            <div className="flex flex-col items-center p-6">
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
              >
                <img
                  src={blog.image}
                  alt="Cloud Blog Logo"
                  className="w-24 h-24 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {blog.description}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </WindowWrapper>
  );
};

export default BlogWindow;
