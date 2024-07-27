module.exports = ({ env }) => {
  console.log("🚀 ~ env:", env)

  return [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:', `${env('STRAPI_ADMIN_BACKEND_URL')}`],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
          ],
        },
      }
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [`${env('STRAPI_ADMIN_BACKEND_URL')}`],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },,
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
]};
