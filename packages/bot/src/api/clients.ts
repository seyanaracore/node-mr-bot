import axios from 'axios'
import { GITLAB_HOST } from './consts'

export const gitlabClient = axios.create({
  baseURL: `${GITLAB_HOST}/api`,
  headers: {
    Authorization: `Bearer ${process.env.GITLAB_TOKEN}`,
  },
})

export const yandexClient = axios.create({
  baseURL: 'https://botapi.messenger.yandex.net/bot',
  headers: {
    Authorization: `OAuth ${process.env.GITLAB_TOKEN}`,
  },
})
