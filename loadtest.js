import http from 'k6/http'
import env from './env.js'

export default () => {
    http.get(env.baseUrl)
}

export let options = {
  stages: [
    { duration: "5m", target: 100 }, 
    { duration: "10m", target: 100 }, 
    { duration: "5m", target: 0 }, 
  ],
  thresholds: {
    'http_req_duration': ['p(99)<1500'], 
    'logged in successfully': ['p(99)<1500'], 
  }
};