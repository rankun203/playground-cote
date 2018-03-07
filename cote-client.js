const {
  performance
} = require('perf_hooks');
const cote = require('cote');

const requester = new cote.Requester({
  name: 'currency conversion requester'
});
console.log('---------------\n\n');

const request = {
  type: 'convert',
  from: 'usd',
  to: 'eur',
  amount: 100
};

const start = performance.now();
let firstRespTime;
let respCount = 0;
const LOOP_TIMES = 1000000;

for (var i = 0; i < LOOP_TIMES; i++) {
  requester.send(request, res => {
    if (!firstRespTime) firstRespTime = performance.now();
    respCount++;

    // if (i / (LOOP_TIMES / 10) === String(respCount).indexOf(0)) { // only prints on 1/10, 2/10
    if (respCount === LOOP_TIMES) {
      console.log(performance.now() - firstRespTime, i, res);
    }
  })
}
