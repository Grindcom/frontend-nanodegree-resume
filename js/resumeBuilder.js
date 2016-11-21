/*
* Code to build the resume will go here.
* Written by Greg Ford, B.Sc.
*   Oct. 2016
*   Updated: Nov. 2016
*/
'use strict';
// Run immediately
$(function(){

  // How to use variables and print to console
  var firstName = "Greg";
  var lastName = "Ford";
  // console.log("My name is " + firstName);
  // Using replace
  var oldEmail = "ford@grindcom.ca";
  var newEmail = oldEmail.replace('grindcom','facet-it');
  //
  // Used multiple times to replace div information
  //
  var data = '%data%';

  //
  // Set up Header objecst
  //
  // Set up name and role variables
  var myname = firstName + " " + lastName + " B.sc.";
  var desiredRole = "Front-end Developer";
  // var skills = ;
  var message = "Thanks for checking out my Resume'.  I have a strong background in several programming languages and I constantly seek experience in new ones.  Combine that with a diverse range of real-world experiences and I have a unique perspective on any new job or project.";

  /**************************************************
  *
  *          OBJECT DECLARATIONS
  *
  ****************************************************/
  //
  // Set up bio object
  //
  var bioModel = {
    name : myname,
    role : desiredRole,
    contacts : {
      mobile : "250-305-8802",
      email : oldEmail,
      github : "Grindcom",
      linkedin : "gtford",
      location : "Williams Lake, BC"
    },
    welcomeMessage : message,
    skills : ["Git","C","C++","C#","Java","JavaScript","HTML","CSS","Programming","Problem solving"],
    biopic : "./images/greg_casual-800x350_large_1x.jpg",

  };
  //
  // Education MODEL
  //
  var educationModel = {
    schools : [{// School attended
      'name' : "UDacity",
      'location' : "-",
      'degree' : "Nanodegree, On Line",
      'majors' : "Front-end Developer",
      'dates' : "inprogress",
      'url' : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    },{
      // School attended
      'name' : "Devry University, Calgary campus",
      'location' : "Calgary, AB",
      'degree' : "B.Sc.",
      'majors' : ["Computer Engineering Technology",""],
      'dates' : "March, 2003 to February, 2006",
      'url' : "http://www.devry.edu/degree-programs/engineering-information-sciences/computer-engineering-technology.html"
    },{// School attended
      'name' : "University of Norther British Columbia",
      'location' : "Prince George, BC",
      'degree' : "",
      'majors' : ["Computer Science",""],
      'dates' : "September, 1997 to January, 1999",
      'url': "http://www.unbc.ca"
    },{// School attended
      'name' : "Okanagan University Collage",
      'location' : "Kelowna, BC",
      'degree' : "",
      'majors' : ["General Studies",""],
      'dates' : "June, 1996 to May, 1997",
      'url': "http://www.ouc.bc.ca"
    }],
    onlineCourses : [{// Online course
      'title' : "How to Use Git and GitHub",
      'school' : "Udacity",
      'dates' : "September, 2016",
      'url' : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },  {// Online course
      'title' : "Responsive Web Design Fundamentals",
      'school' : "Udacity",
      'dates' : "September, 2016",
      'url' : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },{// Online course
      'title' : "JavaScript Basics",
      'school' : "Udacity",
      'dates' : "September, 2016",
      'url' : "https://www.udacity.com/course/javascript-basics--ud804"
    },{// Online course
      'title' : "Intro to HTML and CSS",
      'school' : "Udacity",
      'dates' : "September, 2016",
      'url' : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },{// Online course
      'title' : "Responsive Images",
      'school' : "Udacity",
      'dates' : "September, 2016",
      'url' : "https://www.udacity.com/course/responsive-images--ud882"
    }],
// TODO: Add a 'Other training' array
  };
  //
  // Work MODEL
  //
  var workModel = {
    jobs : [{// work experience
      'employer' : "Williams Lake Fire Department",
      'title' : "Firefighter",
      'location' : "Williams Lake,BC",
      'dates' : "March, 2011 - in progress",
      'description' : "Professional Firefighter, NFPA 1001 certification."
    },{// work experience
      'employer' : "Grindcom (Self-Employed)",
      'title' : "CEO, System Architect",
      'location' : "Williams Lake,BC",
      'dates' : "March, 2006 - June, 2015",
      'description' : "Grindcom was focused on research and development of a measurement and control system for industrial forestry equipment.  Operationaly I was the system architect, software and hardware developer.  Managing this business included maintaining the R&D budget; utilizing Canadian federal programs such as SR&ED and IRAP."
    },{// work experience
      'employer' : "Tom Ford Logging Ltd.",
      'title' : "Supervisor, Industrial Computer Tech.",
      'location' : "Williams Lake,BC",
      'dates' : "May, 1999 - February, 2003",
      'description' : "Supervise logging operations, administer and maintain measurement and control computers on board heavy equipment."
    },{// work experience
      'employer' : "Tom Ford Logging Ltd.",
      'title' : "Heavy Equipment Operator",
      'dates' : "June, 1985 - March, 1996",
      'location' : "Williams Lake",
      'description' : "Operating Skidders, Dozers and Log loaders."
    }],

  };

  //
  // Projects object
  //
  var projectsModel = {
     projects : [{// Project
      title: "Arcade Game Remix",
      dates: "October, 2016 - November, 2016",
      description: "A tribute to Frogger.  A fun little app where the player dodges ugly bugs to get to the safety of the river.  This project is an example of using JavaScript for user interaction. (Play it here: https://grindcom.github.io/frontend-nanodegree-arcade-game/)",
      images: ["./images/enemy-bug-2.png"],
      giturl: "https://github.com/Grindcom/frontend-nanodegree-arcade-game"
    },{// Project
      title : "Portfolio",
      dates : "September, 2016 - September, 2016",
      description : "A portfolio of projects, created for the Front End Developer nanodegree.",
      images : ["./images/pexels-photo-255x150_thumb_1x.jpg","./images/PuppiesOn_theRun-255x150_thumb_1x.jpg"],
      giturl : "https://github.com/Grindcom/portfolio"
    },{// Project
      title : "Resume'",
      dates : "September, 2016 - September, 2016",
      description : "A Resume' of projects, created for the UDacity Front End Developer nanodegree. It serves as a sample of my developer skill set - HTML, CSS and JavaScript.",
      images : ["./images/pexels-photo-255x150_thumb_1x.jpg"],
      giturl : "https://github.com/Grindcom/frontend-nanodegree-resume"
    }],

  };

  /**************************************************
  *
  *          OPERATIONS
  *
  ****************************************************/
  //
  // Add Octopus
  //
  var octopus = {
    init: function(){
      mainView.init();
      bioView.init();
      //
      // Add work experience
      //  Make sure there are jobs first, then call work display
      //
      if(workModel.jobs.length > 0){
        workView.init();
      }
      //
      // Add projects
      //  Make sure there is something in projects first
      //
      if(projectsModel.projects.length > 0 ){
        projectsView.init();
      }
      //
      // Add Education
      //  Make sure there is something to display before calling function
      //
      if((educationModel.schools.length > 0) || (educationModel.onlineCourses.length > 0) ){
        educationView.init(educationModel.schools, educationModel.onlineCourses);
      }
      //
      // Set initial sections to up, or hidden
      // Cause a click event on the project-h2
      $('#project-h2').click();
      // Cause a click event on the education-h2
      $('#education-h2').click();
    },
    getBioContacts: function(){
      return bioModel.contacts;
    },
    getBioSkills: function(){
      return bioModel.skills;
    },
    getBioName: function(){
      return bioModel.name;
    },
    getBioRole: function(){
      return bioModel.role;
    },
    getBioWelcomeMessage: function(){
      return bioModel.welcomeMessage;
    },
    getBioPic: function(){
      return bioModel.biopic;
    },
    getWorkJobs: function(){
      return workModel.jobs;
    },
    getProjects: function(){
      return projectsModel.projects;
    },
    getSchools: function(){
      return educationModel.schools;
    },
    getOnlineCourses: function(){
      return educationModel.onlineCourses;
    },
    display: function(){

    }
  };
  //
  // Initialize view
  //
  // TODO: This could be replaced by the IIEF that will be used here.
  window.addEventListener('load',initializeView);
  function initializeView(){
    // Cause a click event on the project-h2
    // $('#project-h2').click();
    // Cause a click event on the education-h2
    // $('#education-h2').click();
  }
  //
  // Log mouse clicks
  //
  // $(document).click(function(loc){
  //   logClicks(loc.pageX,loc.pageY);
  // });
  //
  // Show/Hide Sections
  //
  // TODO: Decide whether to use this for calling init.octopus


  /************************************************
  *
  *   VIEWS
  *
  */
  //
  // Main VIEW
  //
  var mainView = {
    init: function(){
      // Hover over functions
      //  Shake visible divs
      $('#work-h2, #project-h2, #education-h2').mouseover(function(){
        // Shake any elements with id = skills
        $('#skills').effect('shake');
      });
      //
      // Add maps
      this.addMaps();
      //
      helperInit(octopus);//Call init in helper.js
      //
    },
    addMaps: function(){
      $('#mapDiv').append(googleMap);
      // add the row-h2 css to mapDiv
      $('#mapDiv').children('h2').addClass('row-h2');
    },
    addIntButton: function (){
      // Add Internationalize button
      $('#main').append(internationalizeButton);
      function inName(intName){
        var tmpName = intName.split(' ');
        tmpName[0] = tmpName[0][0].toUpperCase() + tmpName[0].slice(1);
        intName = tmpName[0] + ' ' + tmpName[1].toUpperCase();
        return intName;
      }
    },
    display: function(){

    }
  };
  //
  // Bio VIEW
  //
  var bioView = {
    // TODO: Refactor init function
    init: function(){
      // Get reference to data that will be placed in the bio vew
      this.biopic = octopus.getBioPic();
      this.name = octopus.getBioName();
      this.role = octopus.getBioRole();
      this.contacts = octopus.getBioContacts();
      this.skills = octopus.getBioSkills();
      this.welcomeMessage = octopus.getBioWelcomeMessage();
      // format bio
      var formattedName = HTMLheaderName.replace(data,this.name);
      var formattedRole = HTMLheaderRole.replace(data,this.role);
      // Add header-role class name to span to manipulate font
      formattedRole = formattedRole.replace('<span>','<span class="header-role">');
      var formattedMessage = HTMLwelcomeMsg.replace(data,this.welcomeMessage);
      var formattedPic = HTMLbioPic.replace(data,this.biopic);
      // Set up Contacts
      var formattedEmail = HTMLemail.replace(data,this.contacts.email);
      var formattedMobile = HTMLmobile.replace(data,this.contacts.mobile);
      var formattedGit = HTMLgithub.replace(data,this.contacts.github);
      var formattedLin = HTMLlinkedIn.replace(data,this.contacts.linkedin);
      var formattedLocation = HTMLlocation.replace(data,this.contacts.location);
      // Add to header
      //  Use prepend to put it at the start of the header area
      $('#header').append(formattedMessage);
      $('#header').prepend(formattedRole);
      $('#header').prepend(formattedName);
      $('#header').prepend(formattedPic);
      //
      // If there are skills listed add them
      if(this.skills.length > 0)
      {
        // Add skills to html
        $('#header').append(HTMLskillsStart);
        // Give the skills div row css features
        $('#skills').addClass('row');
        //
        //
        this.skills.forEach(function(skill){
          var formattedSkill = HTMLskills.replace(data,skill);
          $('#skills:last').append(formattedSkill);
        });
      }
      //
      // Add Contact information to top header and footer
      //
      // TODO: Place in View
      $('#topContacts1').insertAfter('#skills');
      $('#topContacts1, #footerContacts').append(formattedMobile);
      $('#topContacts1, #footerContacts').append(formattedEmail);
      $('#topContacts1, #footerContacts').append(formattedGit);
      $('#topContacts1, #footerContacts').append(formattedLin);
      $('#topContacts1, #footerContacts').append(formattedLocation);
      //
    },
    display: function(){

    }
  };
  //
  // Work VIEW
  //
  var workView = {
    // TODO: Refactor init function
    init: function(){
      // Get data that this view uses
      this.jobs = octopus.getWorkJobs();
      //
      // Work header click event handler
      $('#work-h2').click(function(event){
        // Show or hide Work sub zone
        $('#sub-work').slideToggle(function(){
          // Get the value of the :visible object
          var isVis = $('#sub-work').is(':visible');
          // get the a element for this
          var arrow = $('#work-h2').children('a');
          // if visible
          if(isVis){
            // Set h2 to up arrow
            arrow.removeClass('entypo-down-open-mini');
            arrow.addClass('entypo-up-open-mini');
          }else {// if not visible
            // Set h2 to have a down arrow
            arrow.removeClass('entypo-up-open-mini');
            arrow.addClass('entypo-down-open-mini');
          }
        });
      });
      // Iterate through work array and setup
      //  their boxes
      this.jobs.forEach(function(job){
        $('#sub-work').append(HTMLworkStart);
        $('.work-entry').addClass('box');
        var formattedEmployer = HTMLworkEmployer.replace(data,job.employer);
        var formattedTitle = HTMLworkTitle.replace(data,job.title.bold());
        var formattedDates = HTMLworkDates.replace(data,job.dates);
        var formattedDescrip = HTMLworkDescription.replace(data,job.description);
        var formattedConcat = formattedEmployer + formattedTitle + formattedDates + formattedDescrip;
        $('.work-entry:last').append(formattedConcat);
      });
      //
    },
    display: function(){

    }
  };
  //
  // Projects VIEW
  //
  var projectsView = {
    // TODO: Refactor init function
    init: function(){
      // Get data that will be used
      this.projects = octopus.getProjects();
      //
      // Project header click event handler
      $('#project-h2').click(function(event){
        // Show or hide project sub zone
        $('#sub-projects').slideToggle(function(){
          // Get the value of the :visible object
          var isVis = $('#sub-projects').is(':visible');
          // get the a element for this
          var arrow = $('#project-h2').children('a');
          // if visible
          if(isVis){
            // Set h2 to up arrow
            arrow.removeClass('entypo-down-open-mini');
            arrow.addClass('entypo-up-open-mini');
          }else {// if not visible
            // Set h2 to have a down arrow
            arrow.removeClass('entypo-up-open-mini');
            arrow.addClass('entypo-down-open-mini');
          }
        });
      });
      // iterate through all projects and place them in the projects div
      this.projects.forEach(function(project){
        $('#sub-projects').append(HTMLprojectStart);
        // Add the box class to surround the project entry
        $('.project-entry').addClass('box');
        // Add title div
        var frmTitle = HTMLprojectTitle.replace(data,project.title);
        // add the href link to title div
        frmTitle = frmTitle.replace('#',project.giturl);
        // Add project dates
        var frmDate = HTMLprojectDates.replace(data,project.dates);
        // Add description
        var frmDescrip = HTMLprojectDescription.replace(data,project.description);
        // Add the css to the project picture
        var devTemplate = HTMLprojectImage.replace('>', 'class="projectpic">');
        // If the image array has any values, iterate through
        //  them and add them to the project images
        var frmImage = '';
        //
        if(project.images.length > 0){
          project.images.forEach(function(image){
            frmImage += devTemplate.replace(data,image);
          });
        }
        // Combine all formatted strings
        var frmConcat = frmTitle + frmDate + frmDescrip + frmImage;
        $('.project-entry:last').append(frmConcat);
      });
      //
    },
    display: function(){

    }
  };
  //
  // EDUCATION VIEW
  //
  var educationView = {
    // TODO: REFACTOR init function
    init: function(schoolsArr, onlineCoursesArr){
      // Get data that will be used here
      this.schools = octopus
      //
      var schools = schoolsArr;
      var onlineCourses = onlineCoursesArr;
      // Education header click event handler
      $('#education-h2').click(function(event){
        // Show or hide education sub zone
        $('#sub-education').slideToggle(function(){
          // Get the value of the :visible object
          var isVis = $('#sub-education').is(':visible');
          // get the a element for this
          var arrow = $('#education-h2').children('a');
          // if visible
          if(isVis){
            // Set h2 to up arrow
            arrow.removeClass('entypo-down-open-mini');
            arrow.addClass('entypo-up-open-mini');
          }else {// if not visible
            // Set h2 to have a down arrow
            arrow.removeClass('entypo-up-open-mini');
            arrow.addClass('entypo-down-open-mini');
          }
        });
      });

      //
      // Display schools
      //
      // TODO: call octopus for schools array
      if(schools.length > 0){
        // if there are schools add an h3 row
        var HTMLschoolHeader = '<h3 id="schoolHeader" class="row-h3">Schools</h3>';
        $('#sub-education').append(HTMLschoolHeader);
      }
      schools.forEach(function(school){
        $('#sub-education').append(HTMLschoolStart);
        $('.education-entry').addClass('box-education');
        // format education
        var formattedName = HTMLschoolName.replace(data,school.name);
        formattedName = formattedName.replace('#',school.url);
        var formattedDegree = HTMLschoolDegree.replace(data,school.degree);
        var formattedDates = HTMLschoolDates.replace(data,school.dates);
        var formattedLocation = HTMLschoolLocation.replace(data,school.location);
        var formattedMajor = HTMLschoolMajor.replace(data,school.majors);
        //
        var concatAll = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
        //
        $('.education-entry:last').append(concatAll);
      });
      //
      // Display online courses
      //
      // TODO: Call octopus for online courses array
      if(onlineCourses.length > 0){
        //if there are courses add an h3 row
        HTMLonlineClasses = HTMLonlineClasses.replace('<h3>','<h3 id="onlineHeader" class="row-h3">');
        $('#sub-education').append(HTMLonlineClasses);
      }
      // Iterate through the online array and set up
      //  the course boxes.
      // TODO: This will require the online courses array
      onlineCourses.forEach(function(course){
        var HTMLonlineStart = '<div class="online-entry box-online"></div>';
        $('#sub-education').append(HTMLonlineStart);
        //
        var formattedOnTitle = HTMLonlineTitle.replace(data,course.title);
        formattedOnTitle = formattedOnTitle.replace('#',course.url);
        var formattedOnSchool = HTMLonlineSchool.replace(data,course.school);
        var formattedOnDates = HTMLonlineDates.replace(data,course.dates);
        var concatAll = formattedOnTitle + formattedOnSchool + formattedOnDates;
        $('.online-entry:last').append(concatAll);
      });
    },
    display: function(){

    }
  };


  //
  // Initialize the octopus
  $(document).ready(function(){
    octopus.init();
  });
});
