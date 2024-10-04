// Step 1: Define the initial array
let people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ];
  
  // Step 2: Remove the last element from the sorted array
  // This removes the object with id "98", i.e., "Bill"
  people.pop();
  
  // Step 3: Insert the following object at index 1:
  // { id: "48", name: "Barry", occupation: "Runner", age: "25" }
  people.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
  
  // Step 4: Add the following object to the end of the array:
  // { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  people.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
  
  // Step 5: Log the modified array to verify the changes
  console.log("Sorted array:", people);
  
  // Step 6: Calculate the average age of the people in the array
  let totalAge = 0;
  for (let i = 0; i < people.length; i++) {
    totalAge += parseInt(people[i].age);
  }
  let averageAge = totalAge / people.length;
  
  // Step 7: Log the calculated average age
  console.log("Average age:", averageAge);
  