$(document).ready(function(){
    var weapons = [
        {
            "name": "pipboy_portfolio",
            "langs": "HTML, CSS, JS",
            "fire_rate": 6,
            "range": 119,
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "img": null
        },
        {
            "name": "khawiz_leonard",
            "damage": 18,
            "fire_rate": 46,
            "range": 103,
            "accuracy": 61,
            "weight": 4.2,
            "value": 53,
            "img": null
        },
        {
            "name": "bug_tracker",
            "damage": 30,
            "fire_rate": 40,
            "range": 132,
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "img": null
        }
    ]

    $('.item-list a').on('click', function(e){
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in weapons){
            if(current_item == weapons[item].name){
                console.log(weapons[item])

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].langs);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            }
        }
    });

    $('.item-list a').on('click', function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
        $('.item-list li').removeClass('active');
        $('.item-list li').has('a.active').addClass('active');
    });
});