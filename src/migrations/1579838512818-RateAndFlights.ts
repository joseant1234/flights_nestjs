import { MigrationInterface, QueryRunner } from "typeorm";

export class RateAndFlights1579838512818 implements MigrationInterface {
    name = 'RateAndFlights1579838512818'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "rate" ("id" SERIAL NOT NULL, "origin" character varying NOT NULL, "destination" character varying NOT NULL, "price" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_2618d0d38af322d152ccc328f33" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "flight" ("id" SERIAL NOT NULL, "depatureAt" TIMESTAMP NOT NULL, "arrivalAt" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "rateId" integer, CONSTRAINT "PK_bf571ce6731cf071fc51b94df03" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "flight" ADD CONSTRAINT "FK_6260a1c9011097a8eea59e9167b" FOREIGN KEY ("rateId") REFERENCES "rate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "flight" DROP CONSTRAINT "FK_6260a1c9011097a8eea59e9167b"`, undefined);
        await queryRunner.query(`DROP TABLE "flight"`, undefined);
        await queryRunner.query(`DROP TABLE "rate"`, undefined);
    }

}
