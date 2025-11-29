export default function MessageBubble({ message }) {
  const isDoctor = message.sender === 'doctor';
  return (
    <div className={`flex ${isDoctor ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isDoctor ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        <p>{message.text}</p>
        <p className={`text-xs mt-1 ${isDoctor ? 'text-blue-100' : 'text-gray-500'}`}>{message.time}</p>
      </div>
    </div>
  );
}
