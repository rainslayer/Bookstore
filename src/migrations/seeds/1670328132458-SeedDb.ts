import * as fs from 'fs';
import * as path from 'path';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1670328132458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const files = fs.readdirSync(__dirname);

    for await (const file of files) {
      if (path.extname(file) === '.pdf') {
        await queryRunner.query(
          `INSERT INTO "files" (title, pdf_data) VALUES ('${
            path.parse(file).name
          }', decode('${fs.readFileSync(
            __dirname + '/' + file,
            'hex',
          )}', 'hex'));`,
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE "files";');
  }
}
