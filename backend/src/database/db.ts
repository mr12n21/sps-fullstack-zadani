import { Sequelize } from 'sequelize';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  logging: false,
});

export default sequelize;