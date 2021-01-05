
$(document).ready(function(){
  // All data used in CV
  const cvdata = [
    {
        // To Do App
        "name": "todo-app",
        "frontend": "React, Material UI",
        "backend": "Node, Express, Mongoose",
        "database": "MongoDB",
        "link": "<a href='bit.ly/todoapp-heroku'><u>Heroku Deployment</u></a> <a href='nathanhmiles.github.io/todo-app/'><u>GitHub Repo</u></a>",
        "field5": "",
        "value": 144,
        "img": null,
        "info1": "Note-taking single page app using a React / Material UI frontend and a Node / Express / MongoDB backend.",
        "info2": "Features: secure user registration and login, note editing, note deletion, protected routes.",
        "info3": ""
    },
    {
        // Khawiz Leonard
        "name": "khawiz",
        "frontend": "HTML, CSS, JavaScript/jQuery, Bootstrap",
        "backend": "Python (Django)",
        "database": "PostgreSQL",
        "link": "<a href='https://khawiz-leonard.herokuapp.com/'><u>Heroku Deployment</u></a> <a href='github.com/Taliesin3/Khawiz-Leonard'><u>GitHub Repo</u></a>",
        "field5": "",
        "value": 53,
        "img": null,
        "info1": "A quiz app that procedurally-generates questions about NBA teams via a Rakuten RapidAPI.",
        "info2": "Features: Secure user registration and login, score tracking, user quiz history and score record.",
        "info3": ""
    },
    {
        // Pipboy
        "name": "pipboy",
        "frontend": "HTML, SCSS, JavaScript/jQuery",
        "backend": "N/A",
        "database": "N/A",
        "link": "<a href='https://github.com/nathanhmiles/pipboy'><u>GitHub Repo</u></a>",
        "field5": "",
        "value": 99,
        "img": null,
        "info1": "You're here already! This is a portfolio website in the style of a “pipboy” from the Fallout video games.",
        "info2": "Features: highly-customised CSS, retro TV scan lines, custom-edited GIFs.",
        "info3": ""
    },
    {
        // Javascript
        "name": "js",
        "proficiencies": "React, Material UI, jQuery, Node, Express, Mongoose",
        "courses": "The Complete 2020 Web Development Bootcamp (The App Brewery)<br/>CS50W (Harvard)",
        "info1": "Note-taking single page app using a React / Material UI frontend and a Node / Express / MongoDB backend.",
        "info2": "",
        "info3": ""
    },
    {
        // Python
        "name": "python",
        "proficiencies": "Django, Flask, Jinja, Selenium, Beautiful Soup",
        "courses": "CS50W (Harvard)<br/>Automate the Boring Stuff with Python",
        "info1": "",
        "info2": "",
        "info3": ""
    },
    {
        // Tools/Other
        "name": "other",
        "proficiencies": "VS Code, Git, Heroku, Bash, MongoDB, SQL, ReST, Photoshop",
        "courses": "The Missing Semester of Your CS Education (M.I.T.)",
        "info1": "Hosting two full-stack apps on Heroku, including MongoDB Atlas integration.",
        "info2": "",
        "info3": ""
    },
    // Career
    {
        "name": "gbcc",
        "role": "Senior Project Manager",
        "location": "London/China",
        "dates": "2016-2020",
        "field3": 2016,
        "area": "Rule of Law, International Cooperation",
        "link": "<a href='http://www.gbcc.org.uk'><u>GBCC</u></a>",
        "value": "",
        "img": "",
        "info1": "Managed activities under the death penalty and torture prevention projects, funded by the EU and Dutch Embassy respectively, including an extensive redesign of many project management documents, particularly Excel-based budget and timesheet documents.",
        "info2": "Acted as the lead Project Manager on GBCC’s Rule of Law for Business Programme, resulting in a strong start to GBCC’s relationship with the State Council, and ensuring GBCC is well positioned for the future £27 million project.",
        "info3": "Played a central role in developing criminal justice project bids for international funders, including the EU, German Embassy in Beijing and Siemens."
    },
    {
        "name": "eucosh",
        "role": "Project Manager",
        "location": "Beijing",
        "dates": "2015-2016",
        "field3": 2015,
        "link": "N/A",
        "area": "OSH, Development of laws and regs",
        "value": "",
        "img": "",
        "info1": "Led a small team of Chinese staff to ensure successful completion of the €9 million project.",
        "info2": "Acted as central point of contact for all project stakeholders, including the Chinese government partner the State Administration for Work Safety (SAWS), EU Delegation, International and Chinese experts and consortium partners in Germany, France and the Netherlands.",
        "info3": "Project managed the compilation, design and editing of eight training packages to be distributed nationally by the government partner."
    },
    {
        "name": "british_council",
        "role": "Project Officer",
        "location": "Beijing",
        "dates": "2014-2015",
        "field3": 2014,
        "link": "<a href='https://www.britishcouncil.cn/en/programmes/society'><u>British Council China</u></a>",
        "area": "Social enterprise and investment",
        "value": "",
        "img": "",
        "info1": "Led on the writing of an EU project Concept Note worth €1.5 million in collaboration with Beijing Normal University, focusing on developing civil society organisations’ contribution to governance and development processes in China.",
        "info2": "Published articles on social enterprise on the websites of the British Council and The Guardian following interviews with prominent social entrepreneurs and social investors from both China and the UK.",
        "info3": "Wrote speeches for both the Department and Country Directors."
    },
    // Project management skill
    {
        "name": "pm",
        "specifics": "Project design & bidding, budgeting & forecasting, compliance & reporting",
        "qualification": "PMD Pro (Project Management for Development Professionals)",
        "institution": "APMG International, 2019",
        "year": "2019",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Designed and managed multi-million pound criminal justice and legal development projects in cooperation with international donors such as the EU and the British Embassy in Beijing.",
        "info2": "Led a small team of Chinese staff to ensure successful completion of a €9 million EU-funded development project based in Beijing.",
        "info3": " "
    },
    // Event management skill
    {
        "name": "event",
        "specifics": "Team leadership, detail-oriented",
        "experience": "UK-China Supreme Court Roundtables",
        "qualification": "N/A",
        "institution": "N/A",
        "year": "N/A",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Led on several high-level political and legal events between the UK and China, with participants such as the President of the Supreme Court, members of the House of Lords and the Chinese Ambassador to the UK.",
        "info2": "",
        "info3": " "
    },
    // Foreign languages skill
    {
        "name": "foreign",
        "specifics": "Mandarin Chinese, Korean, French, Spanish, Italian, German",
        "qualification": "B.A. 1st Class (Hons) Chinese & Korean<br/>French & Spanish A-levels<br/>Italian & German GCSEs",
        "institution": "N/A",
        "year": "N/A",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Regularly worked exlcusively in Mandarin with Chinese partners such as the Supreme People's Court, Renmin University and the Ministry of Justice.",
        "info2": "Provided ad hoc interpretation for English-speaking guests during visits to China.",
        "info3": " "
    },
    // Musical instruments skill
    {
        "name": "music",
        "specifics": "Piano, electric guitar, bass guitar",
        "qualification": "N/A",
        "institution": "N/A",
        "year": "N/A",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Self-taught pianist, favourite pieces include: Moonlight Sonata, Comptine d'un autre été (Amélie)",
        "info2": "Played electric and bass guitar in a heavy metal band.",
        "info3": " "
    }

  ] 

  // Populate CV data
  $('.item-list a').on('click', function(e){
    // Get clicked item
    const current_item = $(e.currentTarget).attr('class');

    // Fill in cv data according to item class
    for(item in cvdata){
        // Check class against name of the cv data entry
        if(current_item == cvdata[item].name){

            const container = $('.item-stats');
            
            // Code
            container.find('.frontend').html(cvdata[item].frontend);
            container.find('.backend').html(cvdata[item].backend);
            container.find('.database').html(cvdata[item].database);
            
            container.find('.proficiencies').html(cvdata[item].proficiencies);
            container.find('.courses').html(cvdata[item].courses);
            container.find('.institution').html(cvdata[item].institution);
            container.find('.year').html(cvdata[item].year);
            
            // Other/Career
            container.find('.role').html(cvdata[item].role);
            container.find('.location').html(cvdata[item].location);
            container.find('.dates').html(cvdata[item].dates);
            container.find('.area').html(cvdata[item].area);
            container.find('.link').html(cvdata[item].link);

            // Other/Skills
            container.find('.specifics').html(cvdata[item].specifics);
            container.find('.qualification').html(cvdata[item].qualification);
            container.find('.institution').html(cvdata[item].institution);

            // Default fields
            container.find('.field1').html(cvdata[item].field1);
            container.find('.field2').html(cvdata[item].field2);
            container.find('.field3').html(cvdata[item].field3);
            container.find('.field4').html(cvdata[item].field4);
            container.find('.field5').html(cvdata[item].field5);
            container.find('.value').html(cvdata[item].value);

            // Info notes
            container.find(".info1").html(cvdata[item].info1);
            container.find(".info2").html(cvdata[item].info2);
            container.find(".info3").html(cvdata[item].info3);
        }
    }
  });
});