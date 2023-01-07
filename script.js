// Difficulty: 2

// Username, Password, Age
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "mehrdadnaderi",
  [password]: "123456",
  age: 27,
};

console.log(user.username);
console.log(user.password);


const v1 = Symbol("test");
const v2 = Symbol("test");
console.log(v1 === v2);