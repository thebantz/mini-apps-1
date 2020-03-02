// identifying values so we can manipulate through dom

const grid = document.getElementsByClassName('grid');
const row = document.getElementsByClassName('row');
const cell = document.getElementsByClassName('cell');

let results = [];
let moves = 0;

let playerTurn = ['x'];

// Below tracks who plays next and alternates 'x' and 'o' inputs
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', function (event) {
    // console.log(event.type + ' has been fired');
    if (playerTurn[playerTurn.length - 1] === 'x') {
      playerTurn.push('o');
    } else if (playerTurn[playerTurn.length - 1] === 'o') {
      playerTurn.push('x');
    }
  });
}

let changeText = function (id) {
  // added the no-overwrite policy for each cell
  if (!id.innerHTML) {
    id.innerHTML = playerTurn[playerTurn.length - 1];
  }
}

// Return values into an array of arrays (3x3)
// console.log(row[0].childNodes[5]);
for (var j = 0; j < row.length; j++) {
  var eachRow = [];
  for (var k = 1; k < 6; k += 1) {
    if (k % 2 === 0) {
      continue;
    }
    row[j].childNodes[k].addEventListener('click', function (event) {
      moves++;
      console.log('moves: ', moves)
      if (moves > 2) {
        checkForWinner();
      };
    });
  }
}

// create a helper function that maps each innerHTML of the grid into array of arrays
let transformToGrid = function () {
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
  let grid = results.slice(results.length - 3);
  return grid;
}
// create a helper function that checks for winner and invokes helper function above
let checkForWinner = function () {
  let grid = transformToGrid();
  console.log('from checkForWinner: ', transformToGrid());
  // Declare winning combos - Laterals (Horizontal)
  // check one case ("x", "x", "x") @ first tile row
  // for (var i = 0; i < grid[0].length; i++) {
  //   let lateralWinX = move => move = 'x';
  //   if (grid[0][i] === "x") {

  //     console.log('x won the round!');
  //   }
  // }

  let firstRowArr = grid[0];
  let lateralWinX = move => move === 'x';
  firstRowArr.every(lateralWinX);
  console.log('grid[0]: ', firstRowArr);
  console.log('does the first row win? ', firstRowArr.every(lateralWinX));


  // Declare winning combos - Laterals (Vertical)
}