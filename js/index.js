$(function(){
    $(".navbar__toggle").click(function(){
        $(".nav__links").toggleClass("show");
    });
})

$(function(){
    $(".navbar__toggle").click(function(){
        $(".hamburger").toggleClass("is-active");
    });
})

$(function(){
    $(".btn--art").click(function(){
        $(".art").toggleClass("hide");
    });
})

$(function(){
    $(".btn--music").click(function(){
        $(".music").toggleClass("hide");
    });
})

$(function(){
    $(".btn--theatre").click(function(){
        $(".theatre").toggleClass("hide");
    });
})

$(function(){
    $(".btn--poetry").click(function(){
        $(".poetry").toggleClass("hide");
    });
})