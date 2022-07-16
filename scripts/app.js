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
            if(Math.abs(i)==$('.slider__item').length-2){
                i=1;
            }
            i--;
            $('.slide__track').css('left',slideWidth*i)
            
        })
        $('.arrow-prev').on('click', function(){
            if(i == 1){
                i = - $('.slider__item').length+1;
            }
            i++;
            $('.slide__track').css('left',slideWidth*i);
            
        })
    }

    if($('.slader')){
        let width = $('.slaider-s').width();
        $('.slider__img').css('width', width+'px');
        $(window).resize(function(){
            width = $('.slaider-s').width();
            $('.slider__img').css('width', width+'px');
        })

        let i = 0;
        $('.arrow-next').on('click', function(){
            if(Math.abs(i)>=$('.slider__img').length-1){
                i=1;
            }i--;
            $('.slaider-track').css('left',width*i)
        })
        $('.arrow-prev').on('click', function(){
            if(i >= 0){
                i = - $('.slider__img').length;
            }
            i++;
            $('.slaider-track').css('left',width*i);
        })
    }
})

