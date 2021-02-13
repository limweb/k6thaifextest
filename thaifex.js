import http from 'k6/http'

export default () => {
    http.get('https://www.thaifexportervirtualtradeshow.com/')
}

export let options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '1m', target: 500 },
    { duration: '2m', target: 1500 },
    { duration: '1h',target: 2000 },
    { duration: '1m', target: 100 },
  ],
};
