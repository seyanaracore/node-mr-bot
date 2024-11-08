/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { EventEmitter } from 'node:events'
import {
  sendMessage,
  getMrList,
  sendMrInfo,
  initLoggers,
} from './methods'
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

  get targetMrList() {
    return this.mrList.filter((mr) => {
      const hasIssues = !mr.blockingDiscussionsResolved
      const isApprovesNotEnough = mr.approvedBy.length < this.config.approvesForMerge
      const isDraft = mr.draft

      if (isDraft) return false

      return hasIssues || isApprovesNotEnough
    })
  }

  sendMrInfo = sendMrInfo

  constructor() {
    super()

    initLoggers.call(this)
  }
}

const mrBot = new Bot()

export default mrBot
