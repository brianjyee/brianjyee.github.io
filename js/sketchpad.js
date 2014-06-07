$('#start').click(function() {
    $('.grid').empty();

    var gridSize = prompt("What size grid?");
    var squareSize = 800 / gridSize;

    if (gridSize > 100) {
        $('.grid').append('<div class="alert-danger">That\'s too big! Pick a smaller number.</div>');
    } else {
        $('.grid').append('<table><tbody>');

        // grid rows
        for (i=0; i<gridSize; i++) {
            $('table').append('<tr class="grid-row"></tr>');
        }

        // grid squares
        for (j=0; j<gridSize; j++) {
            $('.grid-row').append('<th><div class="grid-square"></div></th>');
        }

        // square sizes
        $('.grid-square').css('width', squareSize);
        $('.grid-square').css('height', squareSize);

        $('.grid').append('</tbody></table>');
    }

    $('.grid-square').mouseenter(function() {
    $(this).css('background-color', 'black');
    })
});