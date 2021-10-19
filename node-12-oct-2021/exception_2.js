let e = false;
console.log(1);
try {
  console.log(2);
  if (e) {
    throw "some error";
  }
  console.log(3);
} catch (error) {
  console.log(4);
} finally {
  console.log("clean up");
}
console.log(5);

// e = true

// 1
// 2
// 4
// clean up
// 5

// e == false

// 1
// 2
// 3
// clean up
// 5