import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";

export const showSuccessToast = (message: string) => {
  toast.custom((t) => (
    <ToastLayout
      visible={t.visible}
      icon={<FiCheckCircle className="text-green-500 text-2xl mt-1" />}
      title="Success"
      titleColor="text-green-400"
      message={message}
      id={t.id}
    />
  ));
};

export const showErrorToast = (message: string) => {
  toast.custom((t) => (
    <ToastLayout
      visible={t.visible}
      icon={<FiXCircle className="text-red-500 text-2xl mt-1" />}
      title="Error"
      titleColor="text-red-400"
      message={message}
      id={t.id}
    />
  ));
};

const ToastLayout = ({
  visible,
  icon,
  title,
  titleColor,
  message,
  id,
}: {
  visible: boolean;
  icon: React.ReactNode;
  title: string;
  titleColor: string;
  message: string;
  id: string;
}) => (
  <div
    className={`max-w-xs w-full bg-zinc-900 text-white border-l-4 rounded shadow-lg p-4 flex items-start gap-3 ${
      visible ? "animate-enter" : "animate-leave"
    }`}
  >
    {icon}
    <div className="flex-1">
      <p className={`font-semibold ${titleColor}`}>{title}</p>
      <p className="text-sm">{message}</p>
    </div>
    <button
      onClick={() => toast.dismiss(id)}
      className="ml-2 text-zinc-400 hover:text-white"
    >
      ✖
    </button>
  </div>
);
