import { createService } from './service'
import api from './api'

const service = createService(api, {
  config: {
    baseUrl: '/'
  }
})

export default service