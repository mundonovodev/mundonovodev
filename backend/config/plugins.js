module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: env('DEFAULT_FROM'),
      defaultReplyTo: env('DEFAULT_REPLY_TO'),
      testAddress: env('TEST_ADDRESS'),
    },
  },
  // ...
});
