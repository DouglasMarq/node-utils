const osu = require('node-os-utils');
const checkDiskSpace = require('check-disk-space');

let watcherStruct = {
  cpuFree: 0,
  freeMem: 0
}

exports.getFreeCPU = async () => {
  watcherStruct.cpuFree = `${Number((await osu.cpu.free()).toFixed(2))} %`
  return watcherStruct.cpuFree;
}

exports.getFreeMem = async () => {
  watcherStruct.freeMem = `${Number((await osu.mem.free()).freeMemMb)} MB`
  return watcherStruct.freeMem;
}
