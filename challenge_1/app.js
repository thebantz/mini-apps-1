// identifying values so we can manipulate through dom

const grid = document.getElementsByClassName('grid');
const row = document.getElementsByClassName('row');
const cell = document.getElementsByClassName('cell');

let results = [];

let playerTurn = ['x'];

// Below tracks who plays next and alternates 'x' and 'o' inputs
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', function (event) {
    console.log(event.type + ' has been fired');
    if (playerTurn[playerTurn.length - 1] === 'x') {
      playerTurn.push('o');
    } else if (playerTurn[playerTurn.length - 1] === 'o') {
      playerTurn.push('x');
    }
    console.log(cell[i].innerHTML);
  });
}

let changeText = function (id) {
  // added the no-overwrite policy for each cell
  if (!id.innerHTML) {
    id.innerHTML = playerTurn[playerTurn.length - 1];
  }
}

// Return values into an array of arrays (3x3)
// console.log(row[0].childNodes[5].innerHTML);
for (var j = 0; j < row.length; j++) {
  var eachRow = [];
  for (var k = 1; k < 6; k += 1) {
    if (k % 2 === 0) {
      continue;
    }
    eachRow.push(row[j].childNodes[k].innerHTML);
  }
  results.push(eachRow);
}

console.log(results);
