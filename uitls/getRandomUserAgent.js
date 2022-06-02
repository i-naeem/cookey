const UserAgent = require('user-agents');

const getRandomUserAgent = () => {
    const userAgent = new UserAgent();
    return userAgent.toString();
}

module.exports = getRandomUserAgent;