"use client";

export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        py-2 px-4
        bg-blue-600 text-white font-semibold
        rounded-lg
        shadow-md
        hover:bg-blue-700
        active:bg-blue-800
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        transition-all duration-200
        ${className}
      `}
    >
      {children}
    </button>
  );
}
