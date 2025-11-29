'use client';
'use client';
import { useState } from 'react';
import ConversationList from './ConversationList';
import ActiveConversation from './ActiveConversation';
import { useDoctorTranslation } from '../../useDoctorTranslation';

const mockConversations = [
  { id: 1, patientName: 'أحمد علي', lastMessage: 'شكراً لك دكتور', time: '10:30 ص', unread: 1 },
  { id: 2, patientName: 'فاطمة حسن', lastMessage: 'متى موعد المتابعة؟', time: 'أمس', unread: 0 },
];

export default function MessagesSection() {
  const { t } = useDoctorTranslation();
  const [activeConversation, setActiveConversation] = useState(mockConversations[0]);

  return (
    <div className="flex h-full bg-white rounded-lg shadow overflow-hidden">
      <ConversationList conversations={mockConversations} activeId={activeConversation.id} onSelect={setActiveConversation} />
      <ActiveConversation conversation={activeConversation} />
    </div>
  );
}
