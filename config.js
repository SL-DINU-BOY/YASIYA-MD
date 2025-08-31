const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~tEhHHCDA#B47UEuKljjIlS9xHGF_6lPpn8gSDBL4vgm2h-L8wfLw'
};
