import { sequelize } from './db';
import fs from 'fs';
import path from 'path';

async function seed() {
  const seedFile = path.join(__dirname, 'seed.sql');
  const seedQueries = fs.readFileSync(seedFile, 'utf-8');
  await sequelize.query(seedQueries);
  console.log('Database seeded successfully');
  await sequelize.close();
}

seed().catch(console.error);