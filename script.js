"use strict";

const arr = [1, 2, 3, 4, 5, 6];

// ----MAP----

Array.prototype.map2 = function (callback) {
  const array = [];
  for (const [index, element] of this.entries()) {
    array.push(callback(element, index));
  }

  return array;
};

const resultMap = arr.map2(numb => numb * 2);
console.log(resultMap); // [2, 4, 6, 8, 10, 12]

// ----FILTER----

Array.prototype.filter2 = function (callback) {
  const array = [];
  for (const element of this) {
    callback(element) && array.push(element);
  }

  return array;
};

const resultFilter = arr.filter2(numb => numb % 2 === 0);
console.log(resultFilter); // [2,4,6]

// ----FOREACH----

Array.prototype.forEach2 = function (callback) {
  for (const [index, element] of this.entries()) {
    callback(element, index);
  }
};

arr.forEach2((numb, i) => console.log(`Index ${i}: ${numb}`));

// ----FIND----

const json = [
  { id: 1, name: "Minh Phuc" },
  { id: 2, name: "Minh Tri" },
  { id: 3, name: "Minh Quang" },
  { id: 4, name: "Minh Dang" },
];

Array.prototype.find2 = function (callback) {
  for (const [index, element] of this.entries()) {
    if (callback(element, index)) return element;
  }
};

const resultFind = json.find2(person => person.id === 3);
console.log(`Person found: ${resultFind.name}`); // Minh Quang

// ----REDUCE----

const arrReduce = [15.5, 2.3, 1.1, 4.7];

Array.prototype.reduce2 = function (callback, initialValue) {
  let initValue = initialValue !== undefined ? initialValue : this[0];

  for (const [index, element] of this.entries()) {
    if (initValue === this[0] && index === 0) continue;

    initValue = callback(initValue, element, index);
  }

  return initValue;
};

//prettier-ignore
const resultReduce = arrReduce.reduce2((total, numb) => total + Math.round(numb), 0); // 24
console.log(resultReduce);

console.log(arr.reduce2((total, numb) => total + numb)); // 21
