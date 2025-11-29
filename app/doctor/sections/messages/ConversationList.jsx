import ConversationListItem from './ConversationListItem';

export default function ConversationList({ conversations, activeId, onSelect }) {
  return (
    <div className="w-1/3 border-l border-gray-200 overflow-y-auto">
      {conversations.map(conv => (
        <ConversationListItem key={conv.id} conversation={conv} isActive={conv.id === activeId} onClick={() => onSelect(conv)} />
      ))}
    </div>
  );
}
