    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbaralt').addClass("sticky");
            }else{
                $('.navbaralt').removeClass("sticky");
            }
        });
    });
    var typed = new Typed('.typing', {
        strings: ['This is a JavaScript library', 'This is an ES6 module'],
        typeSpeed: 60,
        backSpeed: 60,
        loop:true
      });
    //   var $target = $('.anime'),
    //   animationClass = 'anime-start'
 
    //   function animeScroll () {
    //       var documentTop = $(document).scrollTop()
 
    //       $target.each(function(){
              
    //           var itemTop = $(this).offset().top
             
    //           if(documentTop > itemtop) {
    //               $(this).addClass(animationClass)
 
    //           }else{
    //               $(this).removeClass(animationClass)
    //           }
    //       })
    //   }
    //   animeScroll()

    