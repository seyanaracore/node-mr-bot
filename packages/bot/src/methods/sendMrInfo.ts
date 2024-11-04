import groupBy from 'lodash/groupBy'
import getMrInfoText from '@/helpers/getMrInfoText'
import { ProjectName } from '@/enums/project'
import type IBot from '@/models/bot'

async function sendMrInfo(this: IBot) {
  const res = await this.getMrList()

  if (res.error) return

  let text = ''
  const mrsByProjectNames = groupBy(this.targetMrList, (mr) => ProjectName[mr.projectId as never])

  Object.entries(mrsByProjectNames).forEach(([projectName, mrs], idx) => {
    if (idx !== 0) text += '\n'
    text += `#${projectName}\n`

    mrs?.forEach((mr) => {
      text += `  ${getMrInfoText(mr)}\n`
    })
  })

  await this.sendMessage({
    text,
  })
}

export default sendMrInfo
