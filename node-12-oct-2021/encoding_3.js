const fs = require("fs");
const fileName = "c.txt";

fs.writeFile(fileName, "שלום עליכם", (err) => {
  if (err) {
    console.log("Error!");
    return;
  }
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log("Error!");
      return;
    }
    console.log(data);
  });
});
