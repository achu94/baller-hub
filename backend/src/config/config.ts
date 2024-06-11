// Load environment variables from .env file
export interface Config {
    username: string;
    password: string | '';
    database: string;
    host: string;
    port: number;
    dialect: 'mysql';
    server_port: number;
  }
  
  export interface ConfigOptions {
    development: Config;
    test: Config;
    production: Config;
  }

  const configOptions: ConfigOptions = {
    development: {
     username: process.env.DEV_DB_USERNAME || 'root',
     password: process.env.DEV_DB_PASSWORD || '',
     database: process.env.DEV_DB_NAME || 'database_development',
     host: process.env.DEV_DB_HOST || '127.0.0.1',
     port: parseInt(process.env.DEV_DB_PORT || '3307', 10),
     dialect: 'mysql',
     server_port: parseInt(process.env.DEV_SERVER_PORT || '3000', 10),
    },
    test: {
     username: process.env.TEST_DB_USERNAME || 'root',
     password: process.env.TEST_DB_PASSWORD || '',
     database: process.env.TEST_DB_NAME || 'database_test',
     host: process.env.TEST_DB_HOST || '127.0.0.1',
     port: parseInt(process.env.TEST_DB_PORT || '3307', 10),
     dialect: 'mysql',
     server_port: parseInt(process.env.DEV_SERVER_PORT || '3000', 10),
    },
    production: {
     username: process.env.PROD_DB_USERNAME || 'root',
     password: process.env.PROD_DB_PASSWORD || '',
     database: process.env.PROD_DB_NAME || 'database_production',
     host: process.env.PROD_DB_HOST || '127.0.0.1',
     port: parseInt(process.env.PROD_DB_PORT || '3307', 10),
     dialect: 'mysql',
     server_port: parseInt(process.env.DEV_SERVER_PORT || '3000', 10),
    },
  };

  const env = (process.env.NODE_ENV as 'development' | 'test' | 'production') || 'development';
  const config: Config = configOptions[env];
  
  export default config;