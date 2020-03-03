// identifying values so we can manipulate through dom

const threeby3 = document.getElementsByClassName('grid');
const row = document.getElementsByClassName('row');
const cell = document.getElementsByClassName('cell');

let results = [];
let moves = 0;

let playerTurn = ['x'];

for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', function (event) {
    if (playerTurn[playerTurn.length - 1] === 'x') {
      playerTurn.push('o');
    } else if (playerTurn[playerTurn.length - 1] === 'o') {
      playerTurn.push('x');
    }
  });
}

let changeText = function (id) {
  if (!id.innerHTML) {
    id.innerHTML = playerTurn[playerTurn.length - 1];
  }
}

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
  let Xwins = move => move === 'x';
  let Owins = move => move === 'o';
  let xD = 0;
  let oD = 0;
  let xDr = 0;
  let oDr = 0;
  console.log('from checkForWinner: ', transformToGrid());

  // Declare winning combos - Laterals (Horizontal)
  let horizontalWin = () => {
    for (var i = 0; i < grid.length; i++) {
      if (grid[i].every(Xwins)) {
        alert('x wins by rows!');
      } else if (grid[i].every(Owins)) {
        alert('o wins by rows!');
      }
    }
  }


  // Declare winning combos - Laterals (Vertical)
  let verticalWin = () => {
    let col1 = grid.map((col) => col[0]);
    let col2 = grid.map((col) => col[1]);
    let col3 = grid.map((col) => col[2]);
    if (col1.every(Xwins) || col2.every(Xwins) || col3.every(Xwins)) {
      alert('x wins by columns!');
    } else if (col1.every(Owins) || col2.every(Owins) || col3.every(Owins)) {
      alert('o wins by columns!');
    }
  }


  // Declare winning combos - Diagonal (Top Left to Bottom Right)
  let diagonalWin = () => {
    for (var i = 0; i < grid.length; i++) {
      if (grid[i][i] === 'x') {
        xD++;
      } else if (grid[i][i] === 'o') {
        oD++;
      }
    }

    for (var i = 0; i < grid.length; i++) {
      if (grid[i][2 - i] === 'x') {
        xDr++;
      } else if (grid[i][2 - i] === 'o') {
        oDr++;
      }
    }

    if (xD === 3 || xDr === 3) {
      alert('X won diagonally!');
    }

    if (oD === 3 || oDr === 3) {
      alert('O won diagonally!');
    }

  }
  verticalWin();
  horizontalWin();
  diagonalWin();
};