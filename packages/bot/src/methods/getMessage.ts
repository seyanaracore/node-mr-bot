import groupBy from 'lodash/groupBy'
import getMrInfoText from '@/helpers/getMrInfoText'
import { ProjectName } from '@/enums/project'
import type IBot from '@/models/bot'
import type { MergeRequestFull } from '@/services/gitlab'

function getMessage(this: IBot, mrsList: MergeRequestFull[]) {
  let text = ''
  const mrsByProjectNames = groupBy(mrsList, (mr) => ProjectName[mr.projectId as never])

  Object.entries(mrsByProjectNames).forEach(([projectName, mrs], idx) => {
    if (idx !== 0) text += '\n'
    text += `#${projectName}\n`

    mrs?.forEach((mr) => {
      text += `  ${getMrInfoText(mr)}\n`
    })
  })

  return text
}

export default getMessage
