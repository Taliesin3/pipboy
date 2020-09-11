$(document).ready(function(){
    var weapons = [
        {
            "name": "pipboy_portfolio",
            "front_end": "HTML 5, CSS, JS",
            "back_end": "",
            "database": "",
            "accuracy": 66,
            "weight": 4.2,
            "value": 99,
            "img": null
        },
        {
            "name": "khawiz_leonard",
            "front_end": "HTML 5, CSS, JS",
            "back_end": "Python (Flask)",
            "database": "SQLite",
            "accuracy": 61,
            "weight": 4.2,
            "value": 53,
            "img": null
        },
        {
            "name": "bug_tracker",
            "front_end": "HTML 5, SCSS, JS",
            "back_end": "Python (Django)",
            "database": "",
            "accuracy": 72,
            "weight": 13.1,
            "value": 144,
            "img": null
        }
    ]

    var qualifications = [
        {
            "name": "B.A. First Class (Hons) Chinese and Korean"
            "type": "Degree"
            "institution": "SOAS University"
            "grade": "First Class (Hons)"
        }
    ]

    $('.item-list a').on('click', function(e){
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in weapons){
            if(current_item == weapons[item].name){
                console.log(weapons[item])

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].front_end);
                container.find('.fire_rate').html(weapons[item].back_end);
                container.find('.range').html(weapons[item].database);
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