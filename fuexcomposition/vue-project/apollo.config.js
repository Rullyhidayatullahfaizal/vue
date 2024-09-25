export default {
    client: {
      service: {
        name: 'vue-project',
        // URL to the GraphQL API
        url: 'https://spacex-production.up.railway.app/',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  };
  