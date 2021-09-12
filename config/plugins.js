module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: env('SMTP_HOST'), //SMTP Host
      port: 465   , //SMTP Port
      secure: true,
      username: env('SMTP_USERNAME'),
      password: env('SMTP_PASSWORD'),
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: env('SMTP_FROM'),
      replyTo: env('SMTP_REPLYTO'),
    },
  },
});
