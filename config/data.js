module.exports = {
    host: '127.0.0.1', // Hostname of IoTgo platform
    db: {
        uri: 'mongodb://localhost/iotgo', // MongoDB database address
        options: {
            user: 'iotgo', // MongoDB database username
            pass: 'iotgo', // MongoDB database password
        }
    },
    jwt: {
        secret: '0e3e2578a8b145f19718fcca65d545b1', // Shared secret to encrypt JSON Web Token
        algorithms: ['HS256']
    },
    admin: {
        'iotgo@iteadstudio.com': 'password' // Administrator account of IoTgo platform
    },
    page: {
        limit: 50, // Default query page limit
        sort: -1 // Default query sort order
    },
    recaptcha: {
        secret: '6LeJXboZAAAAAHSWKr2tIxvFkacfVpJlEqWcAZYJ', // Google reCAPTCHA serect
        url: 'https://www.google.com/recaptcha/api/siteverify'
    },
    pendingRequestTimeout: 3000,
    mailgun: {
        api_key: 'c944342a96788f764da06f4d03f746f4-a65173b1-3cfc7d63', //Mailgun API Key
        domain: 'sandboxb6d9571c68954b458ac0b0f36a2b8162.mailgun.org', //Mailgun Domain Name
        from: 'crreddy.ram@gmail.com' //Mailgun Default SMTP Login Email
    },
    upgradeUrl: "http://v.itead.cc/api/upgrade"
};
