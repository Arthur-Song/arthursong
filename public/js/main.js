// Fastclick
// ------------------
$(function() {
    FastClick.attach(document.body);
});

// Load more
// ------------------
var loadMoreContent = "";

$("a.load-more").click(function(e){
    e.preventDefault();
    if(loadMoreContent == "")
        loadMoreContent = $(this).prev().html();
    
    $(this).prev().append(loadMoreContent);
});

// Scroll TOP
// ------------------
$("a.scroll-top").click(function(e){
    e.preventDefault();
    $.smoothScroll({offset:0});
})

// Portfolio
// ------------------
$(".item-choice a").click(function(e){
   e.preventDefault();
});
$('#Grid').mixitup();