export default function ConversationListItem({ conversation, isActive, onClick }) {
  return (
    <div onClick={onClick} className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${isActive ? 'bg-amber-50' : ''}`}>
      <div className="flex justify-between items-start">
        <h4 className="font-semibold text-gray-900">{conversation.patientName}</h4>
        <span className="text-xs text-gray-500">{conversation.time}</span>
      </div>
      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
      {conversation.unread > 0 && <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">{conversation.unread}</span>}
    </div>
  );
}
