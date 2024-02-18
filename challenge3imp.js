import { pyramidCreator, passwordMaker, nameLengthSelector, getArrayData } from "./challenge3exp.js";

console.log('Expected: 4 level pyramid');  pyramidCreator(4);

console.log('Expected: 15 character password');  passwordMaker (15);

console.log('Expected: 5 letters name or less', nameLengthSelector(['Alejandro','Luis','Tomás','Sergio'], 5));

console.log('Expected: sum: 42, average: 4.20, median: 3.5', getArrayData([3,2,5,6,7,8,4,3,2,2]));
