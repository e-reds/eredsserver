const path = require('path');

/* module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
 */

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-52-0-142-65.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd7ro1l3sr98s3t'),
      user: env('DATABASE_USERNAME', 'bmwocamarfwwoi'),
      password: env('DATABASE_PASSWORD', '9d2413a2aff272dc057317053c6f8ce2ad31b7e0c1271dddf6023eebc2d345db'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});