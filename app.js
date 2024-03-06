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

// const colors = ["Red", "Green"];
// console.log(colors.length);

// let c = "White";

// colors.push("Blue", 2023, c);
// colors.push(2023);

// console.log(colors.length);

// const car = ["Audi", "BMW"];
// const car2 = ["Ford", "Tesla", "Mercedes"];

// car.push(car2);
// car.push(...car2);

// console.log(car[2][2]);

// const car = ["Audi", "BMW"];

// console.log(car.pop());

// const silinen = car.pop();
// console.log(silinen);

// const colors = ["Green", "Blue"];

// console.log(colors.unshift("Red"));
// console.log(colors);

// const car = ["Audi", "BMW"];
// const car2 = ["Ford", "Tesla", "Mercedes"];

// car.unshift(...car2);
// console.log(car);

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// console.log(colors.shift());

// console.log(colors);

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// console.log(colors.splice(2, 1));
// console.log(colors.splice(2));

// console.log(colors);

// console.log(colors.splice(2, 0, "White"));
// console.log(colors);

// console.log(colors.splice(3, 1, "Pink"));
// console.log(colors.splice(3, 2, "Pink", "Black"));

// console.log(colors);

// let color1 = ["red", "green"];
// const color2 = ["blue", "orange"];
// const color3 = [10, true];

// const joinedArray = color1.concat(color2, color3);
// console.log(color1);
// const destr = color1.push(...color2, ...color3);
// console.log(color1);

// color1 = color1.concat("Black", color2, 2);
// console.log(color1);

// const colors = ["Red", "Green", "Blue", "Brown", "Green"];
// console.log(colors.indexOf("Green"));
// console.log(colors.indexOf("Green", 3));
// console.log(colors.indexOf("reen"));
// console.log(colors.lastIndexOf("Green"));
// console.log(colors.lastIndexOf("Green", -2));
// console.log(colors.lastIndexOf("Green", 3));
// console.log(colors.lastIndexOf("green"));

// console.log(colors[colors.indexOf("Green")]);

// const colors = ["Red", "Green", "Blue", "Green", "Brown", "yellow"];
// colors.reverse();
// console.log(colors);

// const arr = ["C", "l", "a", "r", "u", "s", "w", "a", "y"];

// console.log(arr.join());
// console.log(arr.join(""));
// console.log(arr.join("-"));
// console.log(arr);

//  const arr = [ 55, 5, 22, 2, 11, 1, 111 ]
// arr.sort()
// console.log(arr)

// // ascending sorting
// arr.sort((a,b) => a-b)
// console.log(arr) // [ 1, 2, 5, 11, 22, 55, 111 ]

// // descending sorting
// arr.sort((a,b) => b-a) //numeritik olarak sıralar
// console.log(arr) // [ 111, 55, 22, 11, 5,  2,  1 ]

//includes
/* const arr = [ 'red', 'blue', 'Purple', "white", "orange" ]

console.log(arr.includes('blue')) // true

console.log(arr.includes('Blue')) // false

console.log(arr.includes('blue', 2)) // false */

//Nested Arrays

// const arr = [1, true, [6, 7, 8], [3, 'Red', 5] ]
// arr.sort()
// arr[2].splice(1,1,'yellow')
// console.log(arr.length)

// console.log(arr[0]) // 1

// console.log(arr[2]) // [3, 'Red', 5]
// console.log(arr[3]) // [6, 7, 8]

// console.log(arr[2][0]) // 3
// console.log(arr[2][1]) // Red
// console.log(arr[2][2]) // 5

// console.log(arr[3][2]) //8

const arr = ["Red", "Green", , , , , "Blue"];

console.log(arr);
