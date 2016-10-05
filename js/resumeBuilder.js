/*
Code to build the resume will go here.
*/
// How to use variables and print to console
var firstName = "Greg";
var lastName = "Ford";
// console.log("My name is " + firstName);
// Using replace
var oldEmail = "ford@grindcom.ca";
var newEmail = oldEmail.replace("grindcom","facet-it");
// console.log("My first email was "+oldEmail);
// console.log("But now I use "+newEmail+" for business");

//
// Set up Header
//
// Set up name and role variables
var myname = firstName + " " + lastName + " B.sc.";
var desiredRole = "Front-end Developer";
var skills = ["Programming","Problem solving","C","C++","C#","Java","JavaScript","HTML","CSS"];
var message = "Thanks for checking out my Resume'.  I created it while taking the UDacity, Front-end developer nanodegree course set.  This site outlines my abilities, experience and training.  It also serves as a sample of my developer skill set - HTML, CSS and JavaScript - as it originated as a template which I expanded on to create what you see here.";

//
// Set up bio object
//
var bio = {
  "name" : myname,
  "role" : desiredRole,
  "contacts" : {
    "mobile" : "250-305-8802",
    "email" : oldEmail,
    "github" : "Grindcom",
    "linkedin" : "gtford",// replace twitter
    "location" : "Williams Lake, BC"
  },
  "welcomeMessage" : message,
  "skills" : skills,
  "biopic" : "./images/greg_casual-800x350_large_1x.jpg",
  display: function(){
    // format bio
    var formattedName = HTMLheaderName.replace("%data%",this.name);
    var formattedRole = HTMLheaderRole.replace("%data%",this.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%",this.biopic);
    // Contacts
    var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
    var formattedGit = HTMLgithub.replace("%data%",this.contacts.github);
    var formattedLin = HTMLlinkedIn.replace("%data%",this.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);
    // Add to header
    //  Use prepend to put it at the start of the header area
    $("#header").append(formattedMessage);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedPic);


    // If there are skills listed add them
    if(bio.skills.length > 0)
    {
      // Add skills to html
      $("#header").append(HTMLskillsStart);
      //
      var formattedSkill = "";
      //
      bio.skills.forEach(function(skill){
        formattedSkill = HTMLskills.replace("%data%",skill);
        $("#skills:last").append(formattedSkill);
      });
    }
    //
    // Add contacts to top header
    //
    $("#topContacts").insertAfter("#skills");
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGit);
    $("#topContacts").append(formattedLin);
    $("#topContacts").append(formattedLocation);
    //
    // Add contacts to footer contacts
    //
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGit);
    $("#footerContacts").append(formattedLin);
    $("#footerContacts").append(formattedLocation);
  }
};
//
// Education object
//
var education = {
  "schools" : [
    {
      "name" : "Devry University, Calgary campus",
      "location" : "Calgary, AB",
      "degree" : "B.Sc.",
      "majors" : "Computer Engineering Technology",
      "dates" : "March, 2003 to February, 2006",
      "url" : "http://www.devry.edu/degree-programs/engineering-information-sciences/computer-engineering-technology.html"
    },
    {
      "name" : "University of Norther British Columbia",
      "location" : "Prince George, BC",
      "degree" : "",
      "majors" : "Computer Science",
      "dates" : "September, 1997 to January, 1999",
      "url": "http://www.unbc.ca"
    },
    {
      "name" : "Okanagan University Collage",
      "location" : "Kelowna, BC",
      "degree" : "",
      "majors" : "General Studies",
      "dates" : "June, 1996 to May, 1997",
      "url": "http://www.ouc.bc.ca"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : "September, 2016",
      "url" : "https://www.udacity.com/course/responsive-images--ud882"
    }
  ],
  "display": function(){
    //
    // Display schools
    //
    if(this.schools.length > 0){
      // if there are schools add an h3 row
      var HTMLschoolHeader = '<h3 id="schoolHeader" class="row-h3">Schools</h3>';
      $("#education").append(HTMLschoolHeader);
    }
    this.schools.forEach(function(school){
      $("#education").append(HTMLschoolStart);
      $(".education-entry").addClass("box-education");
      // format education
      var formattedName = HTMLschoolName.replace("%data%",school.name);
      formattedName = formattedName.replace("#",school.url);
      var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
      var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
      //
      var concatAll = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
      //
      $(".education-entry:last").append(concatAll);
    });
    //
    // Display online courses
    //
    if(this.onlineCourses.length > 0){
      //if there are courses add an h3 row
      HTMLonlineClasses = HTMLonlineClasses.replace("<h3>",'<h3 id="onlineHeader" class="row-h3">');
      $("#education").append(HTMLonlineClasses);
    }
    //
    this.onlineCourses.forEach(function(course){
      var HTMLonlineStart = '<div class="online-entry box-online"></div>';
      $("#education").append(HTMLonlineStart);
      //
      var formattedOnTitle = HTMLonlineTitle.replace("%data%",course.title);
      formattedOnTitle = formattedOnTitle.replace("#",course.url);
      var formattedOnSchool = HTMLonlineSchool.replace("%data%",course.school);
      var formattedOnDates = HTMLonlineDates.replace("%data%",course.dates);
      var concatAll = formattedOnTitle + formattedOnSchool + formattedOnDates;
      $(".online-entry:last").append(concatAll);
    });
  }
};
//
// Work object
//
var work = {
  "jobs" : [
    {// work experience
      "employer" : "Williams Lake Fire Department",
      "title" : "Firefighter",
      "location" : "Williams Lake,BC",
      "dates" : "March, 2011 - in progress",
      "description" : "Professional Firefighter, NFPA 1001 certification."
    },
    {// work experience
      "employer" : "Grindcom (Self-Employed)",
      "title" : "CEO, System Architect",
      "location" : "Williams Lake,BC",
      "dates" : "March, 2006 - June, 2015",
      "description" : "Grindcom was focused on research and development of a measurement and control system for industrial forestry equipment.  Operationaly I was the system architect, software and hardware developer.  Managing this business included maintaining the R&D budget; utilizing Canadian federal programs such as SR&ED and IRAP."
    },
    {// work experience
      "employer" : "Tom Ford Logging Ltd.",
      "title" : "Supervisor, Industrial Computer Tech.",
      "location" : "Williams Lake,BC",
      "date" : "May, 1999 - February, 2003",
      "description" : "Supervise logging operations, administer and maintain measurement and control computers on board heavy equipment."
    },
    {// work experience
      "employer" : "Tom Ford Logging Ltd.",
      "title" : "Heavy Equipment Operator",
      "dates" : "June, 1985 - March, 1996",
      "location" : "Williams Lake",
      "description" : "Operating Skidders, Dozers and Log loaders."
    }
  ],
  "display": function(){
    var formattedEmployer = "";
    var formattedTitle = "";
    var formattedConcat = "";
    var formattedDates = "";
    var formattedDescrip = "";
    //
    this.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry").addClass("box");
      formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
      formattedTitle = HTMLworkTitle.replace("%data%",job.title.bold());
      formattedDates = HTMLworkDates.replace("%data%",job.dates);
      formattedDescrip = HTMLworkDescription.replace("%data%",job.description);
      formattedConcat = formattedEmployer + formattedTitle + formattedDates + formattedDescrip;
      $(".work-entry:last").append(formattedConcat);
    });
  }
};

//
// Projects object
//
var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : "September, 2016 - September, 2016",
      "description" : "A projects portfolio, created for the Front End Developer nanodegree.",
      "images" : [{
        "url" : ""
      }]
    }
  ],
  "display":function(){
    // set up variables
    var frmTitle = "";
    var frmDate = "";
    var frmDescrip = "";
    var frmImage = "";
    var frmConcat = "";
    // iterate through all projects and place them in the projects div
    projects.projects.forEach(function(project){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry").addClass("box");
      frmTitle = HTMLprojectTitle.replace("%data%",project.title);
      frmDate = HTMLprojectDates.replace("%data%",project.dates);
      frmDescrip = HTMLprojectDescription.replace("%data%",project.description);
      frmImage = HTMLprojectImage.replace("%data%",project.images[0].url);
      frmConcat = frmTitle + frmDate + frmDescrip + frmImage;
      $(".project-entry:last").append(frmConcat);
    });
  }

};

//
// Add bio
//
bio.display();

//
// Add work experience
//
if(work.jobs.length > 0){
  work.display();
}

//
// Add projects
//
if(projects.projects.length > 0 ){
  projects.display();
}

//
// Add Education
//
if((education.schools.length > 0) || (education.onlineCourses.length > 0) ){
  education.display();
}
//
// Add maps
//
$("#mapDiv").append(googleMap);
//
// Log mouse clicks
//
$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});
//
// Add Internationalize button
//
$("#main").append(internationalizeButton);
function inName(intName){
  var tmpName = intName.split(" ");
  tmpName[0] = tmpName[0][0].toUpperCase() + tmpName[0].slice(1);
  intName = tmpName[0] + " " + tmpName[1].toUpperCase();
  return intName;
}
