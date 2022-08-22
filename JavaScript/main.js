//SCROLL TO RIGHT
function animateRightRow(img, from, to){
    if(from >= to){         
        return;  
    }
    else {
        img.css({ marginLeft: from});
        setTimeout(function(){
            animateRightRow(img, from + 1, to);
        }, 2) 
    }
}

function moveElement(){
    const firstLastWidthForSlide = $('.move-div-first').children().last().outerWidth();
    const secondLastWidthForSlide = $('.move-div-second').children().last().outerWidth();

    animateRightRow($('.move-div-first'), 0, firstLastWidthForSlide + 10);
    animateRightRow($('.move-div-second'), 0, secondLastWidthForSlide + 10 );
    return;
}

function replaceToStart(){
    $('.move-div-first').children().first().before($('.move-div-first').children().last());
    $('.move-div-second').children().first().before($('.move-div-second').children().last());
}

//RIGHT BUTTON ON CLICK FUNCTION
$(document).ready(function (){
    $('#btn-right').on('click', function(){
        $('#btn-left').prop('disabled', true);
        $('#btn-right').prop('disabled', true);
        moveElement();
        setTimeout(() => {
            replaceToStart();
            $('.move-div-first').css({ marginLeft: "auto"}) ;
            $('.move-div-second').css({ marginLeft: "auto"}) ;
            $('#btn-left').prop('disabled', false);
            $('#btn-right').prop('disabled', false);
        },1501
        );
    });
});

//SCROLL TO LEFT
function replaceToEnd(){
    $('.move-div-first').children().last().after($('.move-div-first').children().first());
    $('.move-div-second').children().last().after($('.move-div-second').children().first());
}

//LEFT BUTTON ON CLICK FUNCTION
$(document).ready(function(){
    $('#btn-left').on('click', function(){
        $('#btn-left').prop('disabled', true);
        $('#btn-right').prop('disabled', true);
        replaceToEnd();
        
        $('.move-div-first').children().last().addClass("animate-image");
        $('.move-div-second').children().last().addClass("animate-image");
        
        setTimeout( () => {
            $('#btn-left').prop('disabled', false);
            $('#btn-right').prop('disabled', false);
            $('.move-div-first').children().last().removeClass("animate-image");
            $('.move-div-second').children().last().removeClass("animate-image");
        }, 1500);
    });
});