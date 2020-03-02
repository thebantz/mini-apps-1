// identifying values so we can manipulate through dom
// document.body.innerHTML = "";

var grid = document.getElementsByClassName('grid');
var row = document.getElementsByClassName('row');
var cell = document.getElementsByClassName('cell');

var results = [];

// loop through array to 
// 1. Retrieve all array values
// 2. Bind event listeners using DOM

// the below binds a div click into a turn by changing innerHTML into a letter
// document.getElementById('turn').onclick = function changeContent() {
//   document.getElementById('turn').innerHTML = "x";
// }

// document.getElementById('turnAgain').onclick = function changeContent() {
//   document.getElementById('turnAgain').innerHTML = "o";
// }

// next step is to create 

// be able to ask for grid values and push into an array, periodically
for (var i = 0; i < cell.length; i++) {
  results.push(cell[i].innerHTML);
  cell[i].addEventListener('click', function (event) {
    console.log(event.type + ' got fired');
  });
}

function changeText(id) {
  id.innerHTML = "X";
}

console.log(results);