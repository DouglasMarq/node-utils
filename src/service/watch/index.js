const osu = require('node-os-utils');

process.env.UV_THREADPOOL_SIZE = osu.cpu.count()

let watcherStruct = {
  cpu: {
    cpuFree: 0,
    cpuCores: 0
  },
  mem: {
    freeMem: 0,
    totalMem: 0
  },
  disk: {
    freeDisk: 0,
    freeDiskP: 0
  }
}

exports.getFreeCPU = async () => {
  watcherStruct.cpu.cpuFree = `${(await osu.cpu.free()).toFixed(2)} %`
  watcherStruct.cpu.cpuCores = `${osu.cpu.count()}`
  return watcherStruct.cpu;
}

exports.getFreeMem = async () => {
  watcherStruct.mem.freeMem = `${(await osu.mem.free()).freeMemMb} MB`
  watcherStruct.mem.totalMem = `${(await osu.mem.free()).totalMemMb} MB`
  return watcherStruct.mem;
}

exports.getFreeDiskSpace = async () => {
  watcherStruct.disk.freeDisk = `${(await osu.drive.free()).freeGb} GB`
  watcherStruct.disk.freeDiskP = `${(await osu.drive.free()).freePercentage} %`
  return watcherStruct.disk;
}

exports.getAllStats = async () => {
  await this.getFreeCPU();
  await this.getFreeMem();
  await this.getFreeDiskSpace();
  return watcherStruct;
}
