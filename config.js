const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~FIghWaDB#QamrDBlr7iKyOSMCt0zsOQ-1ft_3HhlU9wfQUxV0hMU'
};
