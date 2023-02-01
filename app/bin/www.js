"use strict"

// 모듈
var os = require('os');
const app = require("../app");
require('dotenv').config(); 

// ip
const ip = getIp();

// 포트
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server has been running..!`);
    console.log(`[Server address]`);
    console.log(`- http://${ip}:${port}`);
    console.log(`- http://127.0.0.1:${port}`);
    console.log(`- http://localhost:${port}`);
    console.log(`Press CRTL + C to shut down the server`);
});

// IPv4 반환
function getIp() {
    var ifaces = os.networkInterfaces();
    var ip = '';
    for (var dev in ifaces) {
        var alias = 0;
        ifaces[dev].forEach(function(details) {
            if (details.family == 'IPv4' && details.internal === false) {
                ip = details.address;
                ++alias;
            }
        });
    }
    return ip;
}