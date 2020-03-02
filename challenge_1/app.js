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
    console.log(event.type + ' has been fired');
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
        transformToGrid();
        console.log('check for winner');
      };
    });
    // eachRow.push(row[j].childNodes[k].innerText); // DOES NOT WORK
    // console.log('what is this? ', row[j].childNodes[k]);
    // Leaving this to work on checkForWinner
    // WAS Hoping to circle back to transform grid into an 3x3 array of arrays
  }
  // results.push(eachRow); // DOES NOT WORK
}

// console.log(results);

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
  console.log(results);
}
// create a helper function that checks for winner and invokes helper function above