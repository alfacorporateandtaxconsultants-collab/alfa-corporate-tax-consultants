export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

const STORAGE_KEY = 'alfa_messages';

export function getMessages(): Message[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addMessage(msg: Omit<Message, 'id' | 'date' | 'read'>): Message {
  const messages = getMessages();
  const newMessage: Message = {
    ...msg,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    read: false,
  };
  messages.unshift(newMessage);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  return newMessage;
}

export function markAsRead(id: string): void {
  const messages = getMessages().map(m =>
    m.id === id ? { ...m, read: true } : m
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter(m => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function getUnreadCount(): number {
  return getMessages().filter(m => !m.read).length;
}
