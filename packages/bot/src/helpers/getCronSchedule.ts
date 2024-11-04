import type { ScheduleConfig } from '@/types/botConfig'

export function getCronSchedule(schedule: ScheduleConfig): string {
  return `0 0 ${schedule.time.join(',')} * * *`
  // return `0 * * * * *`
}
