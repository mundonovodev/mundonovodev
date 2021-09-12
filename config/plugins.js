module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: 'smtp.gmail.com', //SMTP Host
      port: 465   , //SMTP Port
      secure: true,
      username: 'mundonovodev@gmail.com',
      password: 'Bmj@241401!',
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: 'mundonovodev@gmail.com',
      replyTo: 'nao-responda@gmail.com',
    },
  },
});
