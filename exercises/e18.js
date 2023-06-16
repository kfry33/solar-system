/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
export function maxBy(array) {
  // Your code goes here...
  let min = 0;
  let output;
  for (let person of array) {
    let value = person;
    if (value.count > min) {
      min = value.count;
      output = person;
    }
  }
  return output;
}
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let duplicateAsts = [];
  let index = -1;
  // let count = 0;
  for (let i = 0; i < data.asteroids.length; i++) {
    index = -1;
    for (let j = 0; j < duplicateAsts.length; j++) {
      if (duplicateAsts[j].year == data.asteroids[i].discoveryYear) {
        index = j;
      }
    }

    if (index != -1) {
      duplicateAsts[index].count++;
    } else {
      duplicateAsts.push({ year: data.asteroids[i].discoveryYear, count: 1 });
    }
  }
  let output = maxBy(duplicateAsts);
  return output.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
