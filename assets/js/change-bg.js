
$(document).ready(() =>{
    $('#btn-open-menu').click(openNav);
    var i = 0;
    setInterval(()=> {
        if(i===4)
            i = 0;
        changeBg(i);
        i++;
    }, 10000);
});

let bgLink = [
    "linear-gradient(to bottom right,rgba(0,47,75,0.7),rgba(220,66,37,0.7)), url('./assets/img/backgrounds-wraper/bg-02-hoa-sen.jpg') center no-repeat",
    "linear-gradient(to bottom right,rgba(0,47,75,0.7),rgba(220,66,37,0.7)), url('./assets/img/backgrounds-wraper/bia1_QBQI.jpg') center no-repeat",
    "linear-gradient(to bottom right,rgba(0,47,75,0.7),rgba(220,66,37,0.7)), url('./assets/img/backgrounds-wraper/hoang-thanh-thang-long-04.jpg') bottom center no-repeat",
    "linear-gradient(to bottom right,rgba(0,47,75,0.7),rgba(220,66,37,0.7)), url('./assets/img/backgrounds-wraper/bg-01-khue-van-cac-2.png') center no-repeat",
]

console.log(bgLink);

function changeBg(num){
        // $('.wraper-bg ').animate("-webkit-animation:","slide 12s linear infinite");
    $('#wraper-animation').css("background", bgLink[num]);
    $('#wraper-animation').css("background-size", "cover");
    $('#wraper-animation').css("transition", "background-image 1s ease-in-out");



}