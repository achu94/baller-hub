import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import config, { type DbConfig } from '../config/config'; // Ensure this path is correct

const basename: string = path.basename(__filename);
const env = (process.env.NODE_ENV as 'development' | 'test' | 'production') || 'development';
const dbConfig: DbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
});

const db: any = {};

// Function to initialize models
function initModels(sequelize: Sequelize, DataTypes: any): void {
  const modelsDir = path.join(__dirname, "../models");

  fs.readdirSync(modelsDir)
    .filter((file: string) => {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.ts' &&
        file.indexOf('.test.ts') === -1
      );
    })
    .forEach((file: string) => {
      const model = require(path.join(modelsDir, file)).default;

      // Error handler.
      if (!model) return;

      db[model.name] = model;
    });
}

// Function to associate models
function associateModels(): void {
  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

// Connect to the database and initialize models
async function connectAndInitModels(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Initialize models after successful connection
    initModels(sequelize, DataTypes);

    // Check if tables exist, if not create them
    for (const modelName of Object.keys(db)) {
      const model = db[modelName];
      await model.sync({ alter: true }); // This will create the table if it doesn't exist and update it if it does
      console.log(`${modelName} table checked and synced successfully.`);
    }

    // Re-associate models after creating or syncing tables
    associateModels();

    // Export initialized Sequelize instance and models
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}

connectAndInitModels();

export default sequelize;
