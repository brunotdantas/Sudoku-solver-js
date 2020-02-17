/*


function GetCellValues() {
    var table = document.getElementById('mytable');
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            alert(table.rows[r].cells[c].innerHTML);
        }
    }
}


var reloadTable = function(employees) {
    var table = $('#employeesTable');
    table.find("tbody tr").remove();
    employees.forEach(function (employee) {
        table.append("<tr><td>" + employee.id + "</td><td>" + employee.name + "</td></tr>");
    });
};


*/



function reset(){
    
    // place 0 to all inputs 
    


}

function solve(){
    const aux = [];
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

    $("table#sudoku :input").each(function(){
        var input = $(this); // This is the jquery object of the input, do what you will
        aux.push(input[0].value);
    });
    
    var i,column=0,line=0;
    for (i = 0; i < 81; i++) {

        sudoku[line][column] = aux[i]; // populate sudoku's array
        column++;
        if (i == 8 || i == 17 || i == 17 || i == 26 || i == 35 || i == 44 || i == 53 || i == 62 || i == 71 || i == 80){
            // each line end skip a line and goes back to the first column
            line++;
            column=0;
        }
    } 

    console.log(sudoku);

    // Solve the missing numbers (missing = 0)

        // navegate through the array looking for missing numbers  
        col=0;li=0;
        for (li = 0; li < 9; li++) {
            for (col = 0; col < 9; col++) {
                
                if (sudoku[li][col]=="0"){
                    console.log("linha: "+li.toString()+" coluna" + col.toString() + " é zero");

                }


            }
        }
}


// TODO : 
//  - Apply recursive method  // Check one note 
/*
    
    PAREI AQUI 

*/
//  Good to have :
//  1- check if the content is a number
//  2- Adjust columns width
//  3- adjust for to bigger sudokus (9x9 or
//       Jigsaw Sudoku: 9×9 grid with nonomino regions.
//       12×12 – Maxi. ...
//       16×16 – Number Place Challenger. ...
//       25×25 – Sudoku the Giant: Twenty-five 5×5 regions.
//       100×100 – Sudoku-zilla. )
