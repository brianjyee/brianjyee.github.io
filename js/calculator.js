$(document).ready(function() {
    var equation_string = '';
    var answer = '';

    $('.calc-button').click(function() {
        if ($(this).text() == '=') {
            try {
                answer = eval(equation_string);
                $('#display').text(answer);
            } catch (e) {
                equation_string = ''
                $('#display').text('ERROR');
            }
        } else if ($(this).text() == 'C') {
            equation_string = ''
            $('#display').text('');
        } else {
            equation_string += $(this).text();
            $('#display').text(equation_string);
        }
    });
});