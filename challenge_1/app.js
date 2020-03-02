// identifying values so we can manipulate through dom

var grid = document.getElementsByClassName('grid');
var row = document.getElementsByClassName('row');
var cell = document.getElementsByClassName('cell');

var results = [];

console.log(grid);
console.log(row[0]);
console.log(cell[0].innerHTML);

// loop through array to 
// 1. Retrieve all array values
// 2. Bind event listeners using DOM

for (var i = 0; i < cell.length; i++) {
  results.push(cell[i].innerHTML);
  cell[i].addEventListener('click', function (event) {
    console.log(event.type + ' got fired')
  });
}

cell[0].addEventListener('click', function (event) {
  console.log(event.type + ' got fired')
});

console.log(results);