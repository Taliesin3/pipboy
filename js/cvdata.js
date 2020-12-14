
$(document).ready(function(){
  // All data used in CV
  const cvdata = [
      {
          // To Do App
          "name": "todo-app",
          "frontend": "React, Material UI",
          "backend": "Node, Express, Mongoose",
          "database": "MongoDB",
          "link": "<a href='nathanhmiles.github.io/todo-app/'><u>GitHub Repo</u></a> <a href='bit.ly/todoapp-heroku'><u>Heroku Deployment</u></a>",
          "field5": "",
          "value": 144,
          "img": null,
          "info1": "Note-taking single page app using a React / Material UI frontend and a Node / Express / MongoDB backend.",
          "info2": "Features: secure user registration and login, note editing, note deletion, protected routes.",
          "info3": ""
      },
    {
        // Pipboy
        "name": "pipboy",
        "frontend": "HTML, CSS, JavaScript",
        "backend": "N/A",
        "database": "N/A",
        "link": "<a href='nathanhmiles.github.io/pipboy/'><u>GitHub Pages</u></a>",
        "field5": "",
        "value": 99,
        "img": null,
        "info1": "Portfolio website in the style of a “pipboy” from the Fallout video games.",
        "info2": "Features: highly-customised CSS, retro TV scan lines, image editing.",
        "info3": ""
    },
    {
        // Khawiz Leonard
        "name": "khawiz",
        "frontend": "HTML, CSS, JavaScript, Bootstrap",
        "backend": "Python (Django)",
        "database": "PostgreSQL",
        "link": "<a href='github.com/Taliesin3/Khawiz-Leonard'><u>GitHub</u></a>",
        "field5": "",
        "value": 53,
        "img": null,
        "info1": "A quiz app that procedurally-generates questions about NBA teams via a Rakuten RapidAPI.",
        "info2": "Features: Secure user registration and login, score tracking, user quiz history and score record.",
        "info3": ""
    },
    {
        "name": "degree",
        "grade": "B.A. First Class (Hons)",
        "subject": "Chinese and Korean",
        "institution": "SOAS University, London",
        "year": "2013",
        "field5": "2009",
        "value": "",
        "img": "",
        "info1": "2010 - 2011 Beijing Normal University, China - Chinese Language Year Abroad",
        "info2": "Summer 2012 - Studied at Korea University, Seoul – Intermediate Korean (A), South-North Korean Relations in Historical Context (A) (Summer Programme)",
        "info3": ""
    },
    {
        "name": "a_level",
        "grade": "A A B",
        "subject": "French Spanish I.T.",
        "institution": "St. Clare's School, Wales",
        "year": 2009,
        "field5": 2007,
        "value": "",
        "img": "",
        "info1": "",
        "info2": "",
        "info3": ""
    },
    {
        "name": "gcse",
        "grade": "7 A*, 6A",
        "subject": "Maths, English etc.",
        "institution": "St. Clare's School, Wales",
        "year": "2006-2007",
        "field5": 2006,
        "value": "",
        "img": "",
        "info1": "Took 2 GCSEs a year early: German, Business and Communication Systems",
        "info2": "Studied and took Italian GCSE after-school in final year",
        "info3": ""
    },
    {
        "name": "projman",
        "grade": "Pass",
        "subject": "Project Management for Development Professionals",
        "institution": "APMG International",
        "year": 2019,
        "field5": 2019,
        "value": "",
        "img": "",
        "info1": "A best practice guide and certification that provides project managers with the skills needed to deliver effective, transparent results to donors and communities.",
        "info2": "Provides a range of tools and techniques for managing projects and ensuring they are delivered on time, on budget, and within scope.",
        "info3": ""
    },
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
    {
        "name": "eucosh2",
        "field1": "Beijing",
        "dates": 2014,
        "field3": 2014,
        "link": "N/A",
        "area": "OSH, Development of laws and regs",
        "value": "",
        "img": "",
        "info1": "Took the lead on all English language communications and promotional material, including brochures, newsletters, workshop programmes and website articles.",
        "info2": "Led on the establishment and maintenance of the bilingual project website, using HTML programming language to make all major and minor edits to the website.",
        "info3": "Assisted the Chinese Language Assistants with two-way translation of project materials between English and Chinese."
    },
    {
        "name": "swe",
        "yearsstudied": "Python, JavaScript, React",
        "qualification": "CS50, Udemy",
        "module": "",
        "field4": "N/A",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Completed solo projects including a To Do Note app and a procedurally-generated quiz app, please see the Projects section for more details.",
        "info2": "Proposed, designed and implemented an overhaul of a well-known Chinese legal blog run by a former law professor colleague.",
        "info3": ""
    },
    {
        "name": "pm",
        "yearsstudied": "Project planning, budgeting & forecasting, compliance & reporting",
        "qualification": "Project Management for Development Professionals",
        "module": "",
        "field4": "N/A",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Designed and managed multi-million pound criminal justice and legal development projects in cooperation with international donors such as the EU and the British Embassy in Beijing.",
        "info2": "Led on several high-level political and legal events between the UK and China, with participants such as the President of the Supreme Court, members of the House of Lords and the Chinese Ambassador to the UK.",
        "info3": " "
    },
    {
        "name": "chinese",
        "yearsstudied": "Mandarin Chinese, French, Spanish, Italian, Korean",
        "qualification": "B.A. First Class (Hons) Chinese & Korean",
        "module": "",
        "field4": "N/A",
        "field5": "",
        "value": "",
        "img": "",
        "info1": "Regularly worked exlcusively in Mandarin with Chinese partners such as the Supreme People's Court, Renmin University and the Ministry of Justice.",
        "info2": "Provided ad hoc interpretation for English-speaking guests during visits to China.",
        "info3": ""
    }

  ] 

  // Populate CV data
  $('.item-list a').on('click', function(e){
    var current_item = $(e.currentTarget).attr('class');
    console.log(current_item);

    for(item in cvdata){
        if(current_item == cvdata[item].name){
            console.log(cvdata[item])

            var container = $('.item-stats');
            container.find('.role').html(cvdata[item].role);
            container.find('.location').html(cvdata[item].location);
            container.find('.dates').html(cvdata[item].dates);
            container.find('.area').html(cvdata[item].area);
            container.find('.link').html(cvdata[item].link);

            container.find('.frontend').html(cvdata[item].frontend);
            container.find('.backend').html(cvdata[item].backend);
            container.find('.database').html(cvdata[item].database);
            
            container.find('.grade').html(cvdata[item].grade);
            container.find('.subject').html(cvdata[item].subject);
            container.find('.institution').html(cvdata[item].institution);
            container.find('.year').html(cvdata[item].year);

            container.find('.yearsstudied').html(cvdata[item].yearsstudied);
            container.find('.qualification').html(cvdata[item].qualification);
            container.find('.module').html(cvdata[item].module);

            container.find('.field1').html(cvdata[item].field1);
            container.find('.field2').html(cvdata[item].field2);
            container.find('.field3').html(cvdata[item].field3);
            container.find('.field4').html(cvdata[item].field4);
            container.find('.field5').html(cvdata[item].field5);
            container.find('.value').html(cvdata[item].value);

            container.find(".info1").html(cvdata[item].info1);
            container.find(".info2").html(cvdata[item].info2);
            container.find(".info3").html(cvdata[item].info3);
        }
    }
  });
});