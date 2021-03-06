echo '';
echo '';
echo '';
echo '';
echo '   |       SMOKE TEST';
echo '   |';
echo '   |';
echo '   |';
echo '   |';
echo '   |_____________________________________';
k6 run  --out json=smoketest.json   --summary-export=summary-smoketest.json  smoketest.js;
echo '';
echo '';
echo '';
echo '';
echo '   |       LOAD TEST';
echo '   |';
echo '   |       /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\';
echo '   |    /                        \';
echo '   | /                              \ `1h';
echo '   |_____________________________________';
k6 run  --out json=loadtest.json   --summary-export=summary-loadtest.json  loadtest.js;
echo '';
echo '';
echo '';
echo '   |       Endurance TEST';
echo '   |';
echo '   |  /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\';
echo '   | /                      \';
echo '   |/                        \ ` 5h';
echo '   |_____________________________________';
k6 run  --out json=endurance.json   --summary-export=summary-endurance.json  endurancetest.js;
echo '';
echo '';
echo '';
echo '';
echo '   |       STRESS TEST';
echo '   |';
echo '   |              /¯¯¯¯¯¯¯¯¯¯¯¯ ¯¯\';
echo '   |       /¯¯¯¯¯¯                 \';
echo '   |/¯¯¯¯¯¯                         \ ';
echo '   |_____________________________________';
k6 run  --out json=stress.json   --summary-export=summary-stress.json  stresstest.js;
echo '';
echo '';
echo '';
echo '';
echo '   |       PEAK TEST';
echo '   |';
echo '   |              /\           ';
echo '   |     /\      /  \          ';
echo '   |    /  \____/    \________ ';
echo '   |/¯¯¯                        ';
echo '   |_____________________________________';
k6 run  --out json=peak.json   --summary-export=summary-peak.json  peaktest.js;
echo '';