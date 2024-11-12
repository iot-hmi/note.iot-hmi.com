$( document ).ready(function() {
    $(".lang_select").on( "change", function() {
        window.location.href = $(this).val();
    });
    $(".ver_select").on( "change", function() {
        window.location.href = $(this).val();
    });
    var a = $("a.nav-list-link.active");
    console.log("a:",a);
    if (a) {
        console.log("a.offset():",a.offset());
        var b = a.offset();
        console.log("b:",b);
        if (b && b.top ) {
            $("#site-nav").scrollTop(a.offset().top-60-($("#site-nav").height()/2));
        }
    }
});