import { getGitlabModule, getYandexModule } from './modules'
import { gitlabClient, yandexClient } from './clients'

export const api = {
  modules: {
    gitlab: getGitlabModule(gitlabClient),
    yandex: getYandexModule(yandexClient),
  },
}

export * from './types'
