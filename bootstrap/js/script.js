$('.page-scroll').on('click', function (e) {
    // tangka elemen
    var elemen = $(this).attr('href');
    // ambil isi elemen
    var isiElemen = $(elemen);
    // scroll ke atas 
    $('html,body').animate({
        scrollTop : isiElemen.offset().top - 50
    }, 1250 , 'easeInOutExpo');
   
    // matikan link
    e.preventDefault();
});

// jumbotron
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // /image
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+wScroll/4+'%)'
    });
    // h1
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wScroll/2+'%)'
    });
    // p
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wScroll/1.2+'%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i){
            // setTimeout
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));     
        });
        // setTimeout
        
        
    }
});
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});