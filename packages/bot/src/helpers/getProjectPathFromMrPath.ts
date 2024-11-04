/**
 * @param mrPath полный путь мрки
 * @returns 'umax/b2c-products/iam-lk-lms/phoenix/frontend'
 */
function getProjectPathFromMrPath(mrPath: string): string {
  const url = new URL(mrPath)

  return url.pathname.split('-/merge_requests')[0].replace(url.hostname, '').slice(1, -1)
}

export default getProjectPathFromMrPath
