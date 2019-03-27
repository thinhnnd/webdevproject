obj = {
    question: "1 loại trang phục truyền thống của Nhật Bản là?",
    type: "",
    url: "",
    choice: [ 
            "Kimono",
            "Hanbock",
            "Docomo",
            "Kinomo",
    ],
    answer: "Kinomo" 
};
questions = [
    {
        question: "What HTML stands for?",
        type: "",
        url: "",
        choice: [ 
            "Hypertext Markup Language",
            "Hypertext Makeup Language",
            "Hollyshit Markup Language",
            "Hypertext Makeup Layout",
        ],
        answer: "Hypertext Markup Language"      
    },
    {
        question: "Đây là đâu?",
        type: "image",
        url: "./assets/questions/01/5_khuevancac.jpg",
        choice: [ 
            "Trái đất",
            "Mặt trời",
            "Sao hỏa",
            "Thiên hà khác",
        ],
        answer: "Trái đất"      
    },
    {
        question: "Kết quả phép tính 1 + 1 = ... là?",
        type: "",
        url: "",
        choice: [ 
            "2",
            "1",
            "0",
            "3",
        ],
        answer: "2"      
    },
    {
        question: "Nhạc sĩ nào sáng tác Tiến Quân Ca?",
        type: "",
        url: "",
        choice: [ 
            "Phạm Tuyên",
            "Văn Cao",
            "Hồ Chí Minh",
            "Trịnh Công Sơn",
        ],
        answer: "Văn Cao"      
    },
    {
        question: "Ngô Quyền Đại thắng quân Nam Hán năm bao nhiêu?",
        type: "",
        url: "",
        choice: [ 
            "938",
            "991",
            "1010",
            "48",
        ],
        answer: "938"      
    },
    {
        question: "1 loại trang phục truyền thống của Nhật Bản là?",
        type: "",
        url: "",
        choice: [ 
            "Kimono",
            "Hanbock",
            "Docomo",
            "Kinomo",
        ],
        answer: "Kinomo"      
    },
    {
        question: "I like reading books .........tell about peoples and their cultures.",
        type: "",
        url: "",
        choice: [ 
            "which",
            "whom",
            "whose",
            "who",
        ],
        answer: "which"      
    },
    {
        question: "The house was too expensive, .........we couldn’t afford to buy it.",
        type: "",
        url: "",
        choice: [ 
            "however",
            "but",
            "because",
            "so",
        ],
        answer: "so"      
    },
    {
        question: "_____________advances in computing and telecommunications have reduced the need for many people to travel to work.",
        type: "",
        url: "",
        choice: [ 
            "Technology",
            "Technological",
            "Technologist",
            "Technologically",
        ],
        answer: "Technological"      
    },
    {
        question: "Vùng có mật độ dân số cao nhất nước ta là?",
        type: "",
        url: "",
        choice: [ 
            "Đồng bằng sông Hồng",
            "Đồng bằng sông Cửu long",
            "Đông Nam Bộ",
            "Duyên hải miền trung",
        ],
        answer: "Đồng bằng sông Hồng"      
    },
    {
        question: "Đặc điểm nào sau đây không đúng với vị trí địa lí của nước ta?",
        type: "",
        url: "",
        choice: [ 
            "Nằm ở rìa phía đông của bản đảo Đông Dương, gần trung tâm khu vực Đông Nam Á.",
            "Tiếp giáp với Trung Quốc và tất cả các nước của khu vực Đông Nam Á.",
            "Vừa gắn liền với lục địa Á - Âu, vừa tiếp giáp với Biển Đông.",
            "Nằm trong khu vực múi giờ số 7.",
        ],
        answer: "Tiếp giáp với Trung Quốc và tất cả các nước của khu vực Đông Nam Á."      
    },
];

tempHTML = '<div id="Q6" class="question-item">' +
                '<div class="question">' +
                    '<span class="question-numer">Câu 6: </span>' +
                        '<span class="question-text">Tỉnh nào sau đây có diện tích lớn nhất nước ta? </span>'+
                '</div>' +
                '<div class="image">' +
                    '<img />'+
                '</div>' +
                '<div class="sound">' +
                '</div>' +
                '<div class="video">'+
                '</div>' +
                '<div class="answer">' +
                    '<label>'+
                        '<input type="radio" name="quesion6" value="4" />' +
                                        
                    '</label>'+
                    '<label>' +
                        '<input type="radio" name="quesion6" value="2" />' +
                        '</label>' +
                        '<label>' +
                            '<input type="radio" name="quesion6" value="3" />' +
                            '</label>' +
                            'label>'+
                                '<input type="radio" name="quesion6" value="1" />' +
                            '</label>'+
                '</div>'+
                        '</div>' +
                    '</div>';

function loadQuestion() {
    let htmlCode;
    for(let i = 0; i < questions.length; i++){
        var choiceHTML = '';
        var type = '';
        for(let j = 0; j < questions[i].choice.length; j++) {
            let alphabet = ['A', 'B', 'C', 'D'];
            console.log(questions[i].choice[j]);
            let choice = questions[i].choice[j];
            choiceHTML = choiceHTML + '<label for="Q'+(i+1)+'">'+
                        '<input type="radio" name="Q'+ (i+1) +'" value="4" />'+ alphabet[j]+ '. ' +
                        (choice)+                  
                       '</label>';
            if(questions[i].type == 'text')
                type = '';
            else if (questions[i].type == 'audio')
                type = '<audio controls>' +
                            '<source src="'+ questions[i].url +'">' +
                            +'Your browser does not support the audio element.'+
                        '</audio>';
            else if(questions[i].type == 'video') 
                type = '<video controls>' +
                '<source src="'+ questions[i].url +'">' +
                +'Your browser does not support the video element.'+
                '</video>';
            else if(questions[i].type == 'image') {
                type = '<img src="' + questions[i].url + '">';
            }
        }
        console.log(choiceHTML);

        tempHTML = '<div id="Q'+(i+1)+'" class="question-item">' +
                        '<div class="question">' +
                            '<span class="question-numer">Câu '+ (i + 1) +': </span>' +
                                '<span class="question-text">'+ questions[i].question + '</span>'+
                        '</div>' +
                        '<div class="q-type ' + questions[i].type +'">' +
                            type +
                        '</div>' +
                        '<div class="answer">' +
                            choiceHTML +
                        '</div>'+
                    '</div>';
        $('#questions-place').append(tempHTML);
    };
};

$(document).ready(function(){
    loadQuestion();
})