import * as execSh from 'exec-sh';
import * as dotenv from 'dotenv';

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = 'localhost';
const port = process.env.DB_PORT;
const databasse = process.env.DB_NAME;

const command = `psql "user=${username} password=${password} host=${host} port=${port} sslmode=require" -c "create database ${databasse};" `
execSh(command, {}, function(err){
  if (err) {
    console.log("Exit code: ", err.code);
  }
});
