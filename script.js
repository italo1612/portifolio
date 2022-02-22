    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbaralt').addClass("sticky");
            }else{
                $('.navbaralt').removeClass("sticky");
            }
        });
    });