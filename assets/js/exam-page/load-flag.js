$(document).ready(function () {
    countDown();
    createFlagForm();
});

function createFlagForm() {
    let table = '';
    let num = 40;
    let row = 0;
    if (num / 10 >= Math.floor(num / 10)) {
        row = Math.floor(num / 10) + 1;
    }
    console.log(row);
    let write = 1;

    for (let i = 0; i < row; i++) {
        let td = '';
        for (let j = 0; j < 10; j++) {
            td += '<td><a href=#Q' + (write) + '>' + (write) + '</a></td>';
            if (write >= num)
                break;
            write++;
        }
        table = table + '<tr>' + td + '</tr>';
    }
    console.log(table);
    $('#flag-list').append(table);
}


function countDown() {
    $('#clock').countdown('2019/03/27 20:46:56')
        .on('update.countdown', function (event) {
            var format = '%H:%M:%S';
            if (event.offset.totalDays > 0) {
                format = '%-d day%!d ' + format;
            }
            if (event.offset.weeks > 0) {
                format = '%-w week%!w ' + format;
            }
            $(this).html(event.strftime(format));
        })
        .on('finish.countdown', function (event) {
            $(this).html('This offer has expired!')
                .parent().addClass('disabled');
        });
}