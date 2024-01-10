// pm2.config.js
/*module.exports = {
    apps: [
      {
        name: 'mi-aplicacion',
        script: 'app.js',
        watch: true,
        ignore_watch: ['node_modules'],
      },
    ],
  };*/
  // pm2.config.js ---- segunda configuracion de prueba
/*module.exports = {
    apps: [
      {
        name: 'mi-strapi-app',
        script: 'node_modules/@strapi/strapi/bin/strapi.js',
        args: 'develop',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };*/
  // pm2.config.js
module.exports = {
    apps: [
      {
        name: 'mi-strapi-app',
        script: 'node_modules/strapi/bin/strapi.js',
        args: 'develop',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'development',
          HOST: '0.0.0.0',
          PORT: 1337,
        },
        env_production: {
          NODE_ENV: 'production',
          HOST: '0.0.0.0',
          PORT: 1337,
        },
      },
    ],
  };
  
  