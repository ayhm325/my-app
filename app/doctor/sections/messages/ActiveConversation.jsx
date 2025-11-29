'use client';
import { useState } from 'react';
import MessageBubble from './MessageBubble';
import MessageInputForm from './MessageInputForm';

const mockMessages = [
  { id: 1, sender: 'patient', text: 'مرحباً دكتور، هل يمكنني الحصول على نتيجة التحليل؟', time: '10:00 ص' },
  { id: 2, sender: 'doctor', text: 'بالتأكيد، سأقوم بإرسالها لك الآن.', time: '10:15 ص' },
  { id: 3, sender: 'patient', text: 'شكراً لك دكتور', time: '10:30 ص' },
];

export default function ActiveConversation({ conversation }) {
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = (newMessageText) => {
    const newMessage = { id: messages.length + 1, sender: 'doctor', text: newMessageText, time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-lg">{conversation.patientName}</h3>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map(msg => <MessageBubble key={msg.id} message={msg} />)}
      </div>
      <MessageInputForm onSend={handleSendMessage} />
    </div>
  );
}
