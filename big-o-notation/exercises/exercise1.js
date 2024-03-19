// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; ) {
    // let i = 0; O(1)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
    i += 1; // O(n)
  }
  return a; // O(1)
}

/*
  Time Complexity: O(n)

  let's break it down
    4 + n + n + n + n
    4 + 4n
    Big(4 + 4n) -> O(n)
*/
