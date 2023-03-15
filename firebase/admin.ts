import { applicationDefault } from "firebase-admin/app";

const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

try {
  initializeApp({
    credential: applicationDefault(),
    databaseUrl: process.env.FIREBASE_DATABASE_URL,
  });
} catch (error) {}

const db = getFirestore();

export default db;
