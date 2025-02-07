import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

let client;

let MONGO = "mongodb+srv://ishwarideshmukh:Ishwari123@cluster0.7ua4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



export const initializeDbConnection = async () => {
    client = client = await  MongoClient.connect(MONGO);
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}