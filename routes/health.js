const express = require('express');
const os = require('os');

const router = express.Router();

const round = (num) => {
    return Number(parseFloat((num).toFixed(4)));
}

const getMemoryUsage = () => {
    const free = os.freemem();
    const total = os.totalmem();

    return round((total - free) / total * 100);
};

const getCpuUsage = () => {
    let totalIdle = 0;
    let totalTick = 0;
    const cpus = os.cpus();
    const cpusCount = cpus.length;

    //Loop over CPU cores
    for (let i = 0; i < cpusCount; i++) {
        let cpu = cpus[i];
        //Sum tick in a cores
        for (type in cpu.times) {
            totalTick += cpu.times[type];
        }
        //Sum idle time of a core
        totalIdle += cpu.times.idle;
    }
    const avgUsage = 100 * ((totalIdle / cpusCount) / (totalTick / cpusCount));

    return round(100 - avgUsage);
};

router.get('/', (req, res) => {
    res.status(200).send({
        'OS_name': os.type(),
        'platform_version': process.version,
        'memory_usage': getMemoryUsage(),
        'CPU_usage': getCpuUsage()
    });
});


module.exports = router;