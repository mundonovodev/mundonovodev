module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'mundonovodev@gmail.com',
      defaultReplyTo: 'mundonovodev@gmail.com',
      testAddress: 'mundonovodev@gmail.com',
    },
  },
  // ...
});
