'use client';
import { useState } from 'react';

export default function MessageInputForm({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex items-center space-x-reverse space-x-2">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="اكتب رسالتك..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
        إرسال
      </button>
    </form>
  );
}
