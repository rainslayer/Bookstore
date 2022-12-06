import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFilesEntity1670325834126 implements MigrationInterface {
    name = 'CreateFilesEntity1670325834126'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "files" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "secret" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "pdf_data" bytea NOT NULL,
                CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "files"
        `);
    }

}
