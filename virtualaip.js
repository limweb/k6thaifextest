import http from 'k6/http'

export default () => {
    http.get('https://virtual-event-api.eventpass.co/data-test')
}

export let options = {
  stages: [
    { duration: '10s', target: 1 }, // below normal load
    { duration: '1m', target: 100 },
    { duration: '1m', target: 300 },
    { duration: '1m', target: 500 },
    { duration: '1m', target: 700 },
    { duration: '1m', target: 900 },
    { duration: '1m', target: 1100 },
    { duration: '1m', target: 1300 },
    { duration: '10s', target: 1400 }, // spike to 1400 users
    { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
    { duration: '10s', target: 100 }, // scale down. Recovery stage.
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
};
