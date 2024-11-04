import axios from 'axios'
import { getControlModule, getConfigModule, getMessageModule } from '@/api/modules'

const client = axios.create({
  baseURL: '/api',
})

export const api = {
  modules: {
    control: getControlModule(client),
    config: getConfigModule(client),
    message: getMessageModule(client),
  },
}
