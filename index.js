// index.js
require('dotenv').config();

console.log("🔐 .env içeriği:");
for (const key in process.env) {
  if (key.startsWith("MYAPP_")) {
    console.log(`${key} = ${process.env[key]}`);
  }
}

