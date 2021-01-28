const watcher = require('./service/watch/index');
const schedule = require('node-schedule');
global.settings = require('./settings.json');

(async () => {
  schedule.scheduleJob(`*/${global.settings.cpuTimerSeconds} * * * * *`, async () => {
    console.log('free CPU:: ', await watcher.getFreeCPU());
    console.log('free Mem:: ', await watcher.getFreeMem());
    console.log('free Disk:: ', await watcher.getFreeDiskSpace());
    console.log('Stats:: ', await watcher.getAllStats());
  });
})()
