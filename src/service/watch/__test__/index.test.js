const utils = require('../index');

describe('Testing Usage Functions', () => {
  test('Test CPU Usage Function', async () => {
    const res = await utils.getFreeCPU();

    expect(typeof res).toBe('object');
    expect(typeof res['cpuCores']).toBe('number');
    expect(typeof res['cpuFree']).toBe('number');

    expect(res['cpuFree']).toBeGreaterThanOrEqual(0);
    expect(res['cpuFree']).toBeLessThan(100);
    expect(res['cpuCores']).toBe(4);
  });

  test('Test Memory Usage Function', async () => {
    const res = await utils.getFreeMem();

    expect(typeof res).toBe('object');
    expect(typeof res['totalMem']).toBe('number');
    expect(typeof res['freeMem']).toBe('number');

    expect(res['freeMem']).toBeGreaterThanOrEqual(0);
    expect(res['freeMem']).toBeLessThan(8192);
    expect(res['totalMem']).toBe(8192);
  });

  test('Test Disk Usage Function', async () => {
    const res = await utils.getFreeDiskSpace();

    expect(typeof res).toBe('object');
    expect(typeof res['freeDisk']).toBe('number');
    expect(typeof res['freeDiskP']).toBe('number');

    expect(res['freeDiskP']).toBeGreaterThanOrEqual(0);
    expect(res['freeDiskP']).toBeLessThan(100);
  });

  test('Test All Usage Functions', async () => {
    const res = await utils.getAllStats();

    expect(typeof res).toBe('object');
    expect(typeof res.cpu['cpuCores']).toBe('number'); // %
    expect(typeof res.cpu['cpuFree']).toBe('number'); // number

    expect(typeof res.mem['totalMem']).toBe('number'); // in mb
    expect(typeof res.mem['freeMem']).toBe('number'); // in mb

    expect(typeof res.disk['freeDisk']).toBe('number'); // in gb
    expect(typeof res.disk['freeDiskP']).toBe('number'); // in  %

    expect(res.cpu['cpuFree']).toBeGreaterThanOrEqual(0);
    expect(res.cpu['cpuFree']).toBeLessThan(100);
    expect(res.cpu['cpuCores']).toBe(4);

    expect(res.mem['freeMem']).toBeGreaterThanOrEqual(0);
    expect(res.mem['freeMem']).toBeLessThan(8192);
    expect(res.mem['totalMem']).toBe(8192);

    expect(res.disk['freeDiskP']).toBeGreaterThanOrEqual(0);
    expect(res.disk['freeDiskP']).toBeLessThan(100);
  });
});
