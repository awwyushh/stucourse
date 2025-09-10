import db from "./src/db.js";
import fs from "fs";

const schema = fs.readFileSync("../sql/schema.sql", "utf8");

(async () => {
  try {
    await db.query(schema);
    console.log("Schema applied successfully");
    process.exit(0);
  } catch (err) {
    console.error("Migration failed:", err);
    process.exit(1);
  }
})();
