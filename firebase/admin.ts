import { applicationDefault, getApps } from "firebase-admin/app";
// require("dotenv").config();

const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

try {
  initializeApp({
    credential: applicationDefault(),
    databaseUrl:
      "https://console.firebase.google.com/project/net-ter/database/net-ter-default-rtdb/data/~2F",
  });
} catch (error) {}

const db = getFirestore();

export default db;
