$(document).ready(function(){
    // Handle style changes in relation to clicks
    $('.item-list1 a').on('click', function(e){
        $('.item-list1 a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.item-list1 li').removeClass('active');
        $('.item-list1 li').has('a.active').addClass('active');
    });

    $('.item-list2 a').on('click', function(e){
        $('.item-list2 a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.item-list2 li').removeClass('active');
        $('.item-list2 li').has('a.active').addClass('active');
    });

});

