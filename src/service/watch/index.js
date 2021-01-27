const osu = require('node-os-utils');
const checkDiskSpace = require('check-disk-space');

exports.getFreeCPU = async () => {
  return Number((await osu.cpu.free()).toFixed(2));
}
