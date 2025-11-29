
"use client";

export default function Button({ children, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}
