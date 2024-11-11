/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { EventEmitter } from 'node:events'
import {
  sendMessage,
  getMrList,
  sendMrInfo,
  initLoggers,
} from './methods'
import getMessage from './methods/getMessage'
import { botLogger } from '@/logger'
import { getConfig } from '@/utils/botConfig'
import type IBot from './models/bot'
import type { MergeRequestFull } from '@/services/gitlab'

class Bot extends EventEmitter implements IBot {
  config = getConfig()

  logger = botLogger

  mrList: MergeRequestFull[] = []

  sendMessage = sendMessage

  getMrList = getMrList

  getMrListIsLoading = false

  sendMrInfoIsLoading = false

  get targetMrList() {
    return this.mrList.filter((mr) => {
      const hasIssues = !mr.blockingDiscussionsResolved
      const isApprovesNotEnough = mr.approvedBy.length < this.config.approvesForMerge
      const isDraft = mr.draft
      // Не до конца надежная система, в целом могут быть два проекта с одинаковыми iid,
      // но кейс настолько редкий, что пусть будет так.
      const isExcluded = this.config.excludedMrIds.includes(mr.iid.toString())

      if (isDraft || isExcluded) return false

      return hasIssues || isApprovesNotEnough
    })
  }

  getMessage = getMessage

  sendMrInfo = sendMrInfo

  constructor() {
    super()

    initLoggers.call(this)
  }
}

const mrBot = new Bot()

export default mrBot
