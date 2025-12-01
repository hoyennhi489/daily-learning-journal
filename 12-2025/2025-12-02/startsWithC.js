const myArr = [];
myArr.push("cam", "nhi");

myArr.push(
  "pigs", "goats", "sheep", "cows", "chickens",
  "cats", "dogs", "tuan", "son", "apple"
);

const answer = [];

for (let i = 0; i < myArr.length; i++) {
  // Check if the string starts with the letter "c"
  if (myArr[i].startsWith("c")) {
    answer.push(myArr[i]);
  }
}

console.log(answer);