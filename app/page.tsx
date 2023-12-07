//fetch data from local .json file and log it to console

import * as fs from "fs";

// Replace 'your_file.json' with the actual file path
const filePath: string = "./json_folder/stuff.json";

// Read the JSON file
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Access the 'data.name' field
    const name: string | undefined = jsonData?.data?.name;

    // Access the 'date' field
    const date: string | undefined = jsonData?.date;

    console.log(date)

    // Print or use the extracted data
    if (name !== undefined) {
      console.log(`Name: ${name}`);
    }

    if (date !== undefined) {
      console.log(`Date: ${date}`);
    }
  } catch (parseError: any) {
    console.error(`Error parsing JSON: ${parseError.message}`);
  }
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>JSON Converter</p>
      </div>
    </main>
  );
}
