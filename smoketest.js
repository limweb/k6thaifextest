import http from 'k6/http'
import env from './env.js'

export default () => {
    http.get(env.baseUrl)
}

export let options = {
  vus: 1,
  duration: '1m',

  thresholds: {
    'http_req_duration': ['p(99)<1500'],
  }
};