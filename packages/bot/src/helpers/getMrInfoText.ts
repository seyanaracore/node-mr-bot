import type { MergeRequestFull } from '../services/gitlab'

function resolveTrackerHref(key: string) {
  const url = new URL(`https://tracker.yandex.ru/${key}`)

  return url.href
}

// - ITLMS-228: Поднимаем проект с колен (!322) | [Веня] | (Дима-2, Антон-4)
function getMrInfoText(mr: MergeRequestFull) {
  let text = ''
  const [taskKey, title] = mr.title.split(': ')

  if (title) {
    text += `[${taskKey}](${resolveTrackerHref(taskKey)}): ${title}`
  } else {
    text += mr.title
  }

  text += ` ([${mr.reference}](${mr.webUrl}))`

  text += ` | [${mr.author.name}]`

  const issues = mr.discussions.filter(({ discussion }, idx) => {
    const isDuplicate = idx !== mr.discussions.findLastIndex((el) => el.discussion.id === discussion.id)

    return !(isDuplicate || discussion.resolved || !discussion.resolvable)
  })

  if (issues.length) {
    text += ' | ('

    /**
     * {
     *  'Anton Tigunov': 2
     * }
     */
    const issuesAmountByAuthor = issues.reduce<Record<string, number>>(
      (acc, { author: { name: i } }) => {
        if (typeof acc[i] !== 'undefined') {
          acc[i] += 1
        } else {
          acc[i] = 1
        }

        return acc
      },
      {},
    )

    Object.entries(issuesAmountByAuthor).forEach(([author, amount], idx) => {
      if (idx !== 0) {
        text += ', '
      }

      text += `${author}-${amount}`
    })

    text += ')'
  }

  return text
}

export default getMrInfoText
