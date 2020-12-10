$(document).ready(function(){
    var weapons = [
        {
            // Pipboy
            "name": "44_pistol",
            "damage": "HTML CSS JS",
            "fire_rate": "N/A",
            "range": "N/A",
            "accuracy": "<a href='taliesin3.github.io/pipboy/'><u>GitHub Pages</u></a>",
            "weight": "Highly customised CSS",
            "value": 99,
            "img": null
        },
        {
            // Khawiz Leonard
            "name": "10mm_pistol",
            "damage": "HTML CSS JS",
            "fire_rate": "Django",
            "range": "Sqlite3",
            "accuracy": "<a href='github.com/Taliesin3/Khawiz-Leonard'><u>GitHub</u></a>",
            "weight": "API usage",
            "value": 53,
            "img": null
        },
        {
            // Bug tracker
            "name": "assault_rifle",
            "damage": "HTML CSS React",
            "fire_rate": "Express.js",
            "range": "MongoDB (TBC)",
            "accuracy": "N/A",
            "weight": "N/A",
            "value": 144,
            "img": null
        },
        {
            "name": "degree",
            "damage": "B.A. First Class (Hons)",
            "fire_rate": "Chinese and Korean",
            "range": "SOAS University, London",
            "accuracy": "2009-2013",
            "weight": "",
            "value": "",
            "img": "",
            "info1": "",
            "info2": "",
            "info3": ""
        },
        {
            "name": "a_level",
            "damage": "A A B",
            "fire_rate": "French Spanish I.T.",
            "range": "St. Clare's School, Wales",
            "accuracy": "2009",
            "weight": "",
            "value": "",
            "img": "",
            "info1": "",
            "info2": "",
            "info3": ""
        },
        {
            "name": "gcse",
            "damage": "7 A*, 6A",
            "fire_rate": "Maths, English etc.",
            "range": "St. Clare's School, Wales",
            "accuracy": 2007,
            "weight": "",
            "value": "",
            "img": "",
            "info1": "",
            "info2": "",
            "info3": ""
        },
        {
            "name": "projman",
            "damage": "N/A",
            "fire_rate": "Project Management",
            "range": "PMD Pro",
            "accuracy": 2019,
            "weight": "",
            "value": "",
            "img": ""
        },
        {
            "name": "gbcc",
            "damage": "London/China",
            "fire_rate": 2020,
            "range": 2016,
            "accuracy": "<a href='http://www.gbcc.org.uk'><u>GBCC</u></a>",
            "weight": "Rule of Law, International Cooperation",
            "value": "",
            "img": "",
            "info1": "Managed activities under the death penalty and torture prevention projects, funded by the EU and Dutch Embassy respectively, including an extensive redesign of many project management documents, particularly Excel-based budget and timesheet documents.",
            "info2": "Acted as the lead Project Manager on GBCC’s Rule of Law for Business Programme, resulting in a strong start to GBCC’s relationship with the State Council, and ensuring GBCC is well positioned for the future £27 million project.",
            "info3": "Played a central role in developing criminal justice project bids for international funders, including the EU, German Embassy in Beijing and Siemens."
        },
        {
            "name": "eucosh",
            "damage": "Beijing",
            "fire_rate": 2016,
            "range": 2015,
            "accuracy": "N/A",
            "weight": "OSH, Development of laws and regs",
            "value": "",
            "img": "",
            "info1": "Led a small team of Chinese staff to ensure successful completion of the €9 million project.",
            "info2": "Acted as central point of contact for all project stakeholders, including the Chinese government partner the State Administration for Work Safety (SAWS), EU Delegation, International and Chinese experts and consortium partners in Germany, France and the Netherlands.",
            "info3": "Project managed the compilation, design and editing of eight training packages to be distributed nationally by the government partner."
        },
        {
            "name": "british_council",
            "damage": "Beijing",
            "fire_rate": 2015,
            "range": 2014,
            "accuracy": "<a href='https://www.britishcouncil.cn/en/programmes/society'><u>British Council China</u></a>",
            "weight": "Social Enterprise",
            "value": "",
            "img": "",
            "info1": "Led on the writing of an EU project Concept Note worth €1.5 million in collaboration with Beijing Normal University, focusing on developing civil society organisations’ contribution to governance and development processes in China.",
            "info2": "Published articles on social enterprise on the websites of the British Council and The Guardian following interviews with prominent social entrepreneurs and social investors from both China and the UK.",
            "info3": "Wrote speeches for both the Department and Country Directors."
        },
        {
            "name": "eucosh2",
            "damage": "Beijing",
            "fire_rate": 2014,
            "range": 2014,
            "accuracy": "N/A<a href='http://www.gbcc.org.uk'><u>GBCC</u></a>",
            "weight": "OSH, Development of laws and regs",
            "value": "",
            "img": "",
            "info1": "Took the lead on all English language communications and promotional material, including brochures, newsletters, workshop programmes and website articles.",
            "info2": "Led on the establishment and maintenance of the bilingual project website, using HTML programming language to make all major and minor edits to the website.",
            "info3": "Assisted the Chinese Language Assistants with two-way translation of project materials between English and Chinese."
        },
        {
            "name": "swe",
            "damage": "Beijing",
            "fire_rate": "CS50, Udemy",
            "range": "",
            "accuracy": "N/A",
            "weight": "",
            "value": "",
            "img": "",
            "info1": "Took the lead on all English language communications and promotional material, including brochures, newsletters, workshop programmes and website articles.",
            "info2": "Led on the establishment and maintenance of the bilingual project website, using HTML programming language to make all major and minor edits to the website.",
            "info3": "Assisted the Chinese Language Assistants with two-way translation of project materials between English and Chinese."
        },
        {
            "name": "pm",
            "damage": "6",
            "fire_rate": "PMD Pro",
            "range": "",
            "accuracy": "N/A",
            "weight": "",
            "value": "",
            "img": "",
            "info1": "Took the lead on all English language communications and promotional material, including brochures, newsletters, workshop programmes and website articles.",
            "info2": "Led on the establishment and maintenance of the bilingual project website, using HTML programming language to make all major and minor edits to the website.",
            "info3": "Assisted the Chinese Language Assistants with two-way translation of project materials between English and Chinese."
        },
        {
            "name": "chinese",
            "damage": "10",
            "fire_rate": "B.A. First Class (Hons)",
            "range": "",
            "accuracy": "N/A",
            "weight": "",
            "value": "",
            "img": "",
            "info1": "Took the lead on all English language communications and promotional material, including brochures, newsletters, workshop programmes and website articles.",
            "info2": "Led on the establishment and maintenance of the bilingual project website, using HTML programming language to make all major and minor edits to the website.",
            "info3": "Assisted the Chinese Language Assistants with two-way translation of project materials between English and Chinese."
        }

    ]

    $('.item-list a').on('click', function(e){
        var current_item = $(e.currentTarget).attr('class');
        console.log(current_item);

        for(item in weapons){
            if(current_item == weapons[item].name){
                console.log(weapons[item])

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);

                container.find(".info1").html(weapons[item].info1);
                container.find(".info2").html(weapons[item].info2);
                container.find(".info3").html(weapons[item].info3);
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