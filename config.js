module.exports = {
    bindingAddress: '0.0.0.0',
    port: parseInt(process.env.PORT) || 8080,
    getServerInfo: (req) => ({
        hostname: new URL('https://' + req.headers.host).hostname,
        port: 443,
        crossDomainPort: 443,
        protocol: 'https:'
    })
};
