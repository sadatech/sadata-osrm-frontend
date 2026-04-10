/**
 * PM2 ecosystem configuration file.
 */
module.exports = {
  apps: [{
    name: 'osrm-frontend',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production'
    }
  }]
}