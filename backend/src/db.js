import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let client;

let MONGO = 



export const initializeDbConnection = async () => {
    client = client = await  MongoClient.connect(MONGO);
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}
