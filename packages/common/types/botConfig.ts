export type ScheduleConfig = {
  time: number[]
}

export type BotConfig = {
  approvesForMerge: number
  reviewChatId: string
  excludedMrIds: string[]
  schedule: ScheduleConfig
}
