$(document).ready(function(){

    //burger-menu
    if($('.burger-wrapper')){
        $('.burger-wrapper').on('click', function(){
            $('.menu').addClass('active');
        })
    }
    $('.menu').on('click', function(){
        $('.menu').removeClass('active');
    })
    
    
    //slider
    if($('.section-portfolio')){
        let slideWidth = $('.slider__item').width();
        let i = 0;

        $('.arrow-next').on('click', function(){
            i--;
            $('.slide__track').css('left',slideWidth*i)
            if(Math.abs(i)==$('.slider__item').length-1){
                i=1;
            }
        })
        $('.arrow-prev').on('click', function(){
            i++;
            $('.slide__track').css('left',slideWidth*i);
            if(i == 1){
                i = - $('.slider__item').length+1;
            }
        })
    }

    if($('.slader')){
        let width = $('.slaider-s').width();
        console.log(width);
        $('.slider__img').css('width', width+'px');
        $(window).resize(function(){
            width = $('.slaider-s').width();
            console.log(width);
            $('.slider__img').css('width', width+'px');
        })

        let i = 0;
        $('.arrow-next').on('click', function(){
            if(Math.abs(i)>=$('.slider__img').length-1){
                i=1;
            }i--;
            // console.log(width);
            $('.slaider-track').css('left',width*i)
        })
        $('.arrow-prev').on('click', function(){
            if(i >= 0){
                i = - $('.slider__img').length;
            }
            i++;
            $('.slaider-track').css('left',width*i);
            console.log(i);
        })
    }
})