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
    //Sum all CPU cores time types
    const usages = os.cpus().reduce((acc, cpu) => {
        acc['user'] ? acc['user'] += cpu.times.user : acc['user'] = cpu.times.user
        acc['sys'] ? acc['sys'] += cpu.times.sys : acc['sys'] = cpu.times.sys
        acc['idle'] ? acc['idle'] += cpu.times.idle : acc['idle'] = cpu.times.idle
        return acc;
    }, {});
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