// const arr = [100, "CW", false];
// console.log(arr);

// const dizi = new Array(100, "CW", true);
// console.log(dizi);

// const dizi2 = new Array(10);
// console.log(dizi2);

// const colors = ["Red", "Green", "Blue"];

// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// console.log(colors[colors.length - 2]);
// console.log(colors[-1]);
// console.log(colors[56]);

// const colors = ["Red", "Green", "Blue"];
// console.log(typeof colors);

// console.log(Array.isArray(colors));
// console.log(colors instanceof Array);

// const variables = "1";
// console.log(Array.isArray(variables));
// console.log(Array instanceof Array);

// let str = "Brown";
// console.log(str[0]);
// str[0] = "b";
// console.log(str);

// str = "brown";

// const colors = ["Red", "Green", "Blue"];

// colors[1] = "yellow";
// console.log(colors);
// colors[3] = 5;
// console.log(colors);
// let c = "Pink";
// colors[4] = c;
// console.log(colors);

// const colors = ["Red", "Green", "Blue"];

// colors[6] = 2;
// console.log(colors);
// console.log(colors.length);
// console.log(colors[3]);

// colors[100] = "Pink";

// console.log(colors);

// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);

// a = 6;
// console.log(b);

// b = a;
// console.log(b);

// let arr1 = [1, 2, "Three", false];

// const arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// arr1[0] = 0;

// console.log(arr1);
// console.log(arr2);

// const c = ["2"];
// console.log(c);

// console.log(Boolean(c));

// const d = ["2"];
// console.log(c == d);

// console.log(arr1 == arr2);

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// const cls = colors.slice();
// console.log(colors);
// console.log(cls);

// colors[0] = "Black";
// console.log(colors);
// console.log(cls);

// console.log(colors.slice(2, 4));
// console.log(colors.slice(-2));
// console.log(colors.slice(2));
// console.log(colors.slice(8));
// console.log(colors.slice(-2, 1));
// console.log(colors.slice(-3, -1));

const colors = ["Red", "Green"];
console.log(colors.length);

let c = "White";

colors.push("Blue", 2023, c);
colors.push(2023);

console.log(colors.length);

const car = ["Audi", "BMW"];
const car2 = ["Ford", "Tesla", "Mercedes"];

car.push(car2);
car.push(...car2);

console.log(car[2][2]);
