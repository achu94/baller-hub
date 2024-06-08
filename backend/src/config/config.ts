// Load environment variables from .env file
export interface DbConfig {
    username: string;
    password: string | '';
    database: string;
    host: string;
    port: number;
    dialect: 'mysql';
  }
  
  export interface Config {
    development: DbConfig;
    test: DbConfig;
    production: DbConfig;
  }

  const config: Config = {
    development: {
      username: process.env.DEV_DB_USERNAME || 'root',
      password: process.env.DEV_DB_PASSWORD || '',
      database: process.env.DEV_DB_NAME || 'database_development',
      host: process.env.DEV_DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DEV_DB_PORT || '3307', 10),
      dialect: 'mysql',
    },
    test: {
      username: process.env.TEST_DB_USERNAME || 'root',
      password: process.env.TEST_DB_PASSWORD || '',
      database: process.env.TEST_DB_NAME || 'database_test',
      host: process.env.TEST_DB_HOST || '127.0.0.1',
      port: parseInt(process.env.TEST_DB_PORT || '3307', 10),
      dialect: 'mysql',
    },
    production: {
      username: process.env.PROD_DB_USERNAME || 'root',
      password: process.env.PROD_DB_PASSWORD || '',
      database: process.env.PROD_DB_NAME || 'database_production',
      host: process.env.PROD_DB_HOST || '127.0.0.1',
      port: parseInt(process.env.PROD_DB_PORT || '3307', 10),
      dialect: 'mysql',
    },
  };
  
  export default config;
  