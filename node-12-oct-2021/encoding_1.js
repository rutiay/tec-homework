const fs = require("fs");
const fileName = "a.txt";

fs.writeFileSync(fileName, "Node is great");
const data = fs.readFileSync(fileName);
console.log(data);

// לא התקבלה מחרוזת, כדי לפענח את התוכן שהתקבל ניתן להמיר את המספרים לאותיות לפי הערך ההקסדצימלי.
// N = 4e
// o = 6f
// d = 64
// e = 65
// SPACE = 20
// i = 69
// s = 73
// SPACE = 20
// g = 67
// r = 72
// e = 65
// a = 61
// t = 74
// כדי לקבל מחרוזת תקינה יש להשתמש ב
// utf8 בזמן קריאת הקובץ.
