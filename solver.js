const sudoku = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];


function solve() {
    const aux = [];

    $("table#sudoku :input").each(function () {
        var input = $(this); // get the current input
        aux.push(input[0].value);
    });

    var i, column = 0, line = 0;
    for (i = 0; i < 81; i++) {

        sudoku[line][column] = aux[i]; // populate sudoku's array
        column++;
        if (i == 8 || i == 17 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62 || i == 71 || i == 80) {
            // each line end skip a line and goes back to the first column
            line++;
            column = 0;
        }
    }

    sudokoSolver(sudoku); // call recursive function 
    fillTable(); // show results
}

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (
            board[row][i] == k ||   /*Checks row*/
            board[i][col] == k ||   /*Checks line*/
            board[m][n] == k        /*Checks the box*/
        ) {
            return false;
        }
    }
    return true;
}


function sudokoSolver(data) {
    // i = column
    // j = line 
    // k = number 
    // data = sudoku's board

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (data[i][j] == '0') {
                for (let k = 1; k <= 9; k++) {
                    if (isValid(data, i, j, k)) {
                        data[i][j] = `${k}`;
                        if (sudokoSolver(data)) {
                            return true;
                        } else {
                            data[i][j] = '0';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true; // if all above validation fails this is a possible number
}


function fillTable(){

    var htmlContent = `<p>Please find the solution below:</p><hr> <table class="table table-bordered"><tr>`;

    for (i = 0; i < 81; i++) {
        // iterates to populate the solution

        var i, column = 0, line = 0;
        for (i = 0; i < 81; i++) {
    
            htmlContent += '<td>'+sudoku[line][column].toString()+'</td>';
            column++;
            if (i == 8 || i == 17 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62 || i == 71 || i == 80) {
                // each line end skip a line and goes back to the first column
                line++;
                column = 0;
                htmlContent += `</tr><tr>`;
            }
        }
    }
    htmlContent += '</table>';
    $( "#solved-table").append( htmlContent );
}



/*TODO : 
  Good to have :
  1- check if the content is a number
  2- Draw sudoku lines (css)
  3- adjust for to bigger sudokus (9x9 or
       Jigsaw Sudoku: 9×9 grid with nonomino regions.
       12×12 – Maxi. ...
       16×16 – Number Place Challenger. ...
       25×25 – Sudoku the Giant: Twenty-five 5×5 regions.
       100×100 – Sudoku-zilla. )
*/