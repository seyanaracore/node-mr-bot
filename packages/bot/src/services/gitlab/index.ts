import gitlabServiceLogger from './logger'
import { api } from '@/api'
import { ProjectId, ProjectName } from '@/enums/project'
import getProjectPathFromMrPath from '@/helpers/getProjectPathFromMrPath'
import getMrFullPath from '@/helpers/getMrFullPath'
import type { MergeRequestFull } from './types'

class GitlabService {
  static async getOpenedMrList(projectId: number | string) {
    gitlabServiceLogger.info(
      `getting opened mr list. project id: ${projectId}, project name: ${ProjectName[projectId]}`,
    )

    const res = await api.modules.gitlab.getMrList(projectId, {
      state: 'opened',
    })

    return res.data
  }

  static async getMrInfo(projectPath: string, mrId: number) {
    const mrPath = getMrFullPath(projectPath, mrId)

    gitlabServiceLogger.info(`getting mr info. id: ${mrId}, path: ${mrPath}`)

    const res = await api.modules.gitlab.getMrInfo(projectPath, mrId)

    return res.data
  }

  static async getAllProjectsMrList() {
    const projectIds = Object.values(ProjectId)
    const responses = await Promise.all(projectIds.map(GitlabService.getOpenedMrList))

    return responses.flat()
  }

  static async getAllProjectsMrListFull(): Promise<MergeRequestFull[]> {
    const totalMrs = await GitlabService.getAllProjectsMrList()
    const result: MergeRequestFull[] = []

    await Promise.all(
      totalMrs.map(async (mr) => {
        const projectPath = getProjectPathFromMrPath(mr.webUrl)
        const res = await GitlabService.getMrInfo(projectPath, mr.iid)

        result.push({
          ...mr,
          approvedBy: res.data.project.mergeRequest.approvedBy.edges.map((el) => el.node),
          discussions: res.data.project.mergeRequest.discussions.nodes.flatMap((el) => {
            return el.notes.edges.map((note) => note.node)
          }),
        })
      }),
    )

    return result
  }
}

export default GitlabService

export * from './types'
