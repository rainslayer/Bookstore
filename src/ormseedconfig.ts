import { DataSource } from 'typeorm';
import { ormconfig } from './ormconfig';

const ormseedconfig = {
  ...ormconfig,
  migrations: ['src/migrations/seeds/*.ts'],
};

export default new DataSource(ormseedconfig);
