/*
var module = {
    x: 42,
    getX: function() {
      return this.x;
    },
    getX2: () => this.x
  }
  var unboundGetX2 = module.getX2;
  console.log(unboundGetX2()); // The function gets invoked at the global scope

  var unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());

  console.log(module.getX());


  let o = {
      carId: 123,
      getId: function() {
          return this.carId;
      }
  }

console.log(o.getId());
*/
const MergeSort = require('./Algorithms/Sorting/mergeSort.js');
const QuickSort = require('./Algorithms/Sorting/quickSort');

var test = new MergeSort();
//MergeSort.testMergeSort();
//test.constructor.testMergeSort();

var quickSort = new QuickSort();
quickSort.constructor.testSort();

let testArray = [4];
testArray.pop();

// let q =  Boolean(testArray.length); // Math.floor(3/2);
// console.log(`Output: ${q}`);