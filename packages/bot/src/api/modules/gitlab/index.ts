import toCamelCase from '@/helpers/toCamelCase'
import type { GetMrListResponse, GetMrListRequestParams, MergeRequestInfo } from './types'
import type { ApiClient } from '@/api/types'

function getGitlabModule(api: ApiClient) {
  return {
    /**
     * @description https://docs.gitlab.com/ee/api/merge_requests.html
     */
    getMrList(projectId: number | string, params?: GetMrListRequestParams) {
      return api
        .get<GetMrListResponse>(`v4/projects/${projectId}/merge_requests`, {
        params,
      })
        .then((res) => {
          res.data = toCamelCase(res.data)
          return res
        })
    },

    // _____
    // GRAPHQL Explorer
    // https://gitlab.maximumtest.ru/-/graphql-explorer
    // _____

    /**
     * @param projectPath umax/b2c-products/iam-lk-lms/phoenix/frontend
     * @param iid 701 - айди мрки. в графкл идёт как internalId
     *
     * @description https://docs.gitlab.com/ee/api/graphql/reference/#projectmergerequest
     */
    getMrInfo(projectPath: string, iid: number | string) {
      return api.post<MergeRequestInfo>('graphql', {
        query: `
{
  project(fullPath: "${projectPath}") {
    mergeRequest(iid: "${iid}") {
      id
      discussions {
        nodes {
          notes {
            edges {
              node {
                discussion {
                  id
                  resolved
                  resolvable
                }
                author {
                  name
                  username
                }
              }
            }
          }
        }
      }
      approvedBy {
        edges {
          node {
            name
            username
          }
        }
      }
    }
  }
}
        `,
      })
    },
  }
}

export default getGitlabModule

export * as GitlabModule from './types'
