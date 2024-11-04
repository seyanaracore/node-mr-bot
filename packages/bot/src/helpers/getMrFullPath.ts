import { GITLAB_HOST } from '../api/consts'

/**
 *
 * @param projectPath umax/b2c-products/iam-lk-lms/phoenix/frontend
 * @param mrId айди мрки
 */
function getMrFullPath(projectPath: string, mrId: string | number) {
  const url = new URL(`${GITLAB_HOST}/${projectPath}/-/merge_requests/${mrId}`)

  return url.href
}

export default getMrFullPath
