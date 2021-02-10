const osu = require('node-os-utils');
const watcherStruct = {
  cpu: {
    cpuFree: 0,
    cpuCores: 0,
  },
  mem: {
    freeMem: 0,
    totalMem: 0,
  },
  disk: {
    freeDisk: 0,
    freeDiskP: 0,
  },
};

exports.getFreeCPU = async () => {
  watcherStruct.cpu.cpuFree = Number(`${(await osu.cpu.free()).toFixed(2)}`);
  watcherStruct.cpu.cpuCores = Number(`${osu.cpu.count()}`);
  return watcherStruct.cpu;
};

exports.getFreeMem = async () => {
  watcherStruct.mem.freeMem = Number(`${(await osu.mem.free()).freeMemMb}`);
  watcherStruct.mem.totalMem = Number(`${(await osu.mem.free()).totalMemMb}`);
  return watcherStruct.mem;
};

exports.getFreeDiskSpace = async () => {
  watcherStruct.disk.freeDisk = Number(`${(await osu.drive.free()).freeGb}`);
  watcherStruct.disk.freeDiskP = Number(`${(await osu.drive.free()).freePercentage}`);
  return watcherStruct.disk;
};

exports.getAllStats = async () => {
  await this.getFreeCPU();
  await this.getFreeMem();
  await this.getFreeDiskSpace();
  return watcherStruct;
};
