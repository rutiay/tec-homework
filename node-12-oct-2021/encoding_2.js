const fs = require("fs");
const fileName = "b.txt";

fs.writeFileSync(fileName, "שלום עולם");
const data = fs.readFileSync(fileName);
console.log(data);

// לא התקבלה מחרוזת, כדי לפענח את התוכן שהתקבל ניתן להמיר את המספרים לאותיות לפי הערך ההקסדצימלי.
// ש = d7 a9
// ל = d7 9c
// ו = d7 95
// ם = d7 9d
// SPACE = 20
// ע = d7 a2
// ו = d7 95
// ל = d7 9c
// ם = d7 9d
// כדי לקבל מחרוזת תקינה יש להשתמש ב
// utf8 בזמן קריאת הקובץ.
