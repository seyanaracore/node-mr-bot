import type { ExcludedMrItem } from "./excludedMrItem";

export type ScheduleConfig = {
  time: number[]
}

export type BotConfig = {
  approvesForMerge: number
  reviewChatId: string
  excludedMrs: ExcludedMrItem[]
  schedule: ScheduleConfig
}
