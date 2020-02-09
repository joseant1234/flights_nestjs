import {MigrationInterface, QueryRunner} from "typeorm";

export class Airports1581176765015 implements MigrationInterface {
    name = 'Airports1581176765015'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "airport" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "iata" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_ea1ecba8dec9bee0cb60194e788" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "airport"`, undefined);
    }

}
