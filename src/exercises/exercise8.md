## Problem 8

1. Calculate Total Age of Developers: Write a code snippet to sum up the ages of all developers using the provided developers data set. This will give you the collective age of the team.
2. Calculate Years Played by Each Doctor Since 2000: Use the doctors data set to determine how many years each actor played the role of the Doctor starting from the year 2000. Here's how the output should be formatted:
```ts
const filteredData = [
  { doctorNumber: '#9', playedBy: 'Christopher Eccleston', yearsPlayed: 1 },
  { doctorNumber: '#10', playedBy: 'David Tennant', yearsPlayed: 6 },
  { doctorNumber: '#11', playedBy: 'Matt Smith', yearsPlayed: 4 },
  { doctorNumber: '#12', playedBy: 'Peter Capaldi', yearsPlayed: 1 }
];
```

3. Function to Count Letters in a String: Implement a function that takes a string and returns an object detailing the frequency of each character in the string. Utilize the .reduce method to construct this object.
```ts
// Example usage:
countLetters('abbcccddddeeeee'); // => {a:1, b:2, c:3, d:4, e:5}
const countLetters = string => {
  // Your code here
};
```

4. Function to Check if a Target Character is in a String: Develop a function that checks whether a specified character is present in a given string. This function should also use the .reduce method to perform the check.
```ts
// Example usage:
isPresent('abcd', 'b'); // => true
isPresent('efghi', 'a'); // => false
const isPresent = (string, target) => {
  // Code here
};
```