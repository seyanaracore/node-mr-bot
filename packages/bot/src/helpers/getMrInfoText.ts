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

  // mr.discussions - это массив вообще всех комментов.
  // То есть автор открыл тред - первый коммент, кто-то ответил - второй
  const issues = mr.discussions.filter(({ discussion }, idx) => {
    // Но discussion id - это айди всего треда, а не коммента.
    // Прилетает первый коммент дискуссии, если первый индекс по айди комента соответствует итеририруемому,
    // значит не дубликат оставляем в списке
    // Прилетает следующий коммент, айдишник будет тот же самый, но индекс уже другой,
    // значит это какой-то ответ автору дискусии и то-есть дубликат - добавляем в список
    const isDuplicate = idx !== mr.discussions.findIndex((el) => el.discussion.id === discussion.id)

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
