import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "../src/data/titanic.csv");
const jsonPath = path.join(__dirname, "../src/data/titanic.json");

try {
  const csvContent = fs.readFileSync(csvPath, "utf-8");
  const lines = csvContent.trim().split("\n");

  if (lines.length === 0) {
    throw new Error("CSV file is empty");
  }

  const headers = lines[0].split(",").map((h) => h.trim());

  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    const values = [];
    let currentValue = "";
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(currentValue.trim());
        currentValue = "";
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());

    const row = {};
    headers.forEach((header, index) => {
      let value = values[index] || "";

      if (value === "") {
        value = null;
      } else {
        value = value.trim();
      }

      if (header === "PassengerId" || header === "Survived" || header === "Pclass") {
        row[header] = value === null ? null : parseInt(value, 10);
      } else if (header === "Age" || header === "Fare") {
        row[header] = value === null ? null : parseFloat(value);
      } else if (header === "Name" || header === "Sex") {
        row[header] = value === null ? null : value;
      }
    });

    data.push({
      PassengerId: row.PassengerId,
      Survived: row.Survived,
      Pclass: row.Pclass,
      Name: row.Name,
      Sex: row.Sex,
      Age: row.Age,
      Fare: row.Fare,
    });
  }

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), "utf-8");

  console.log(`✅ Successfully converted ${data.length} records from CSV to JSON`);
  console.log(`📁 Output file: ${jsonPath}`);
} catch (error) {
  console.error("❌ Error converting CSV to JSON:", error.message);
  process.exit(1);
}

