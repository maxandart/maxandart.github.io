var countDiv = 10;
var countImg = 5;
var iActive = 0;
var path = "../slider/page";
var volImg = 10;
var num = 0;
var w = 700;
var h = 500;

//режем картинку на квадратики создаём для каждого участка класс
function CreateImg() {
    for(var j = 0; j < countDiv; ++j){
        for(var i = 0; i < countDiv; ++i){
            var html = "<div class = 'img" + i + "'></div>";
            var img = $(html);
            img.css("background-position", "-" + i * w / countDiv + "px -" + j * h / countDiv + "px");
            img.css("width", w / countDiv + "px");
            img.css("height", h / countDiv + "px"); 
            img.appendTo("#main");
        }
    }

}

//прорисовка новой картинки
function ChangeImg(a) {

        if (a != -1)
            iActive = a;
        var j = 1;
        $("#main div").each(function() {
            ++j;
                $(this).fadeOut(volImg * j, function() {
                $(this).css('background-image', 'url("' + path + iActive + '.jpg")');
                $(this).fadeIn(volImg * j);
            });
        });

}

//при нажатии левой кнопки сменяеем изображение на левое
function LeftImg(){
    --iActive;
    if (iActive < 0){
        iActive = countImg - 1;
    }
    ChangeImg(-1);
}

//при нажатии правой кнопки сменяеем изображение на правое
function RightImg(){
    ++iActive;
    if (iActive >= countImg){
        iActive = 0;
    }
    ChangeImg(-1);
}



//вывзов функций
$(document).ready(function() {
    CreateImg();
    ChangeImg(iActive);
});
