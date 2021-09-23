$( document ).ready(function() {
    $(".lang_select").on( "change", function() {
        window.location.href = $(this).val();
    });
    $(".ver_select").on( "change", function() {
        window.location.href = $(this).val();
    });
    $("#site-nav").scrollTop($("a.nav-list-link.active").offset().top-60-($("#site-nav").height()/2));
});