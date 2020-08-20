import http from 'k6/http'
import env from './env.js'

export default () => {
    http.get(env.baseUrl)
}

export let options = {
  stages: [
    { duration: "2m", target: 400 }, // ramp up to 400 users
    { duration: "3h56m", target: 400 }, // stay at 400 for ~4 hours
    { duration: "2m", target: 0 }, // scale down. (optional)
  ]
};