console.log(1);
try {
  console.log(2);
  if (e) {
    throw "some error";
  }
  console.log(3);
} catch (error) {
  console.log(4);
}
console.log(5);

// e == true

// 1
// 2
// 4
// 5

// e == false

// 1
// 2
// 3
// 5
