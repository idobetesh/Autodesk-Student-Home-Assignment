const express = require('express');
const os = require('os');

const router = express.Router();

const round = (num, digits = 4) => {
    return Number(parseFloat((num).toFixed(digits)));
}

const getMemoryUsage = () => {
    const free = os.freemem();
    const total = os.totalmem();

    return round((total - free) / total * 100);
};

const getCpuUsage = () => {
    //Sum all CPU cores time types
    const usages = os.cpus().reduce((acc, cpu) => {
        acc.user += cpu.times.user
        acc.sys += cpu.times.sys
        acc.idle += cpu.times.idle
        return acc;
    }, { user: 0, sys: 0, idle: 0 });

    const avgIdleUsage = 100 * (usages.idle / (usages.idle + usages.sys + usages.user));

    return round(100 - avgIdleUsage);
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