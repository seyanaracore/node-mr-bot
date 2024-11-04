import type { MessageBodyGroup } from '@/services/yandex'

export type BotMessageBody = Omit<MessageBodyGroup, 'chatId'>
