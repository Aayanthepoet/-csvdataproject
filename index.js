// This function will parse and display CSV data with headers and rows
function parseCSVstructure(csv) {
    // Step 1: Split the CSV string into rows using the newline character '\n'
    const lines = csv.split('\n');
    console.log(lines); // Print the rows to check if it's correct

    // Step 2: Extract the headers from the first row
    const headers = lines[0].split(',');
    console.log(headers); // Print the headers to check if it's correct

    // Step 3: Loop through the remaining rows to process the data
    for (let i = 1; i < lines.length; i++) {
        const cells = lines[i].split(',');
        console.log(cells); // Print each row of data
    }
}

// Example CSV data
const csvData = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Call the function with the CSV data
parseCSVstructure(csvData);