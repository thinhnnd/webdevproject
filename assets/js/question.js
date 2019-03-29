function addQuestion() {
    let made = localStorage.getItem(localStorage.key(0));
    if (!made) {
        $('#question-place').html(`<h1 class="text-center"> Vui lòng chọn mã đề để thêm câu hỏi !  </h1>`);
        $('.save-question').remove();
    }
    else {
        $('#question-place').append(`<h1 class="text-center"> Thêm câu hỏi cho đề ${localStorage.key(0)}  </h1>`);
        for (var i = 0; i < made; i++) {
            var questionFmt = `<div class="col-xs-6 col-sm-4 col-md-2 col-lg-2" >

        <div class="input-group" style="float:left;padding: 10px">

            <div class="form-group">
                <label for="textarea" class="col-sm-10 control-label question-num">Câu hỏi ${i + 1} </label>
                <textarea name="question_${i + 1}" id="textarea" class="form-control" rows="3" required="required"></textarea>
            </div>

            <div class="input-group">
                <label class="input-group-btn">
                    <span class="btn btn-primary btn-upload">Browse&hellip; <input type="file"
                            style="display: none;" multiple></span>
                </label>
                <input type="text" class="form-control" readonly>
            </div>
            <hr>
            <div class="radio">
                <label><input type="radio" name="${i + 1}_optradio" checked>A</label>

                <input type="text" name="${i + 1}_a" class="form-control" value="" pattern="" title="">

            </div>
            <div class="radio">
                <label><input type="radio" name="${i + 1}_optradio">B</label>
                <input type="text" name="${i + 1}_b" class="form-control" value="" pattern="" title="">
            </div>
            <div class="radio">
                <label><input type="radio" name="${i + 1}_optradio">C</label>
                <input type="text" name="${i + 1}_c" class="form-control" value="" pattern="" title="">
            </div>
            <div class="radio">
                <label><input type="radio" name="${i + 1}optradio">D</label>
                <input type="text" name="${i + 1}_d" class="form-control" value="" pattern="" title="">
            </div>
        </div>
    </div>
`;
            $('#question-place').append(questionFmt);
        }
        localStorage.clear();

    }
}
function saveQuestion() {
    alert("AJAX post to save");
}
window.onload = addQuestion();