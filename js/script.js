// Generates Random Background
var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
 $('.header-image').css({'background-image': 'url(img/slider/' + images[Math.floor(Math.random() * images.length)] + ')'});

 $(document).ready(function(){

     //mobile menu
     $("#menu").mmenu({
         // options
         }, {
         // duplicates menu for desktop and mobile
         clone: true
    });

     //about page transition
     $('a.andwhat-we-do-button').click(function(){
        // alert('click what we do');
        $(this).addClass('active');
        $('a.andwho-we-do-button').removeClass('active');
        $('img.andwhat-we-do-header').fadeIn(500);
        $('img.andwho-we-do-header').fadeOut(500);
        $('.andwhat-we-do').fadeIn(500);
        $('.andwho-we-do').fadeOut(500);
     });
     $('a.andwho-we-do-button').click(function(){
        // alert('click who we do');
        $(this).addClass('active');
        $('a.andwhat-we-do-button').removeClass('active');
        $('img.andwho-we-do-header').fadeIn(500);
        $('img.andwhat-we-do-header').fadeOut(500);
        $('.andwho-we-do').fadeIn(500);
        $('.andwhat-we-do').fadeOut(500);
     });

     //contact popup
     $(".contact-link").fancybox({
        'type' :'iframe',
        'width':'100%',
        'padding':0,
        'margin':0,
     });
});
