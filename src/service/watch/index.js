const osu = require('node-os-utils');
const checkDiskSpace = require('check-disk-space');

let watcherStruct = {
  cpuFree: 0
}

exports.getFreeCPU = async () => {
  watcherStruct = {
    cpuFree: Number((await osu.cpu.free()).toFixed(2))
  }
  return watcherStruct;
}
