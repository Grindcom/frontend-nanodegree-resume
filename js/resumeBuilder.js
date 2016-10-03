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
var skills = ["programming","problem solving","C","C++","C#","Java"];
var message = "Thanks for checking out my Resume";


//
// Set up bio object
//
var bio = {
  "picture" : "./images/greg_casual-800x350_large_1x.jpg",
  "bioname" : myname,
  "role" : desiredRole,
  "age" : 48,
  "skills" : skills,
  "message" : message,
  "contacts" : {
    "mobile" : "250-305-8802",
    "email" : oldEmail,
    "github" : "Grindcom",
    "linkedin" : "gtford",
    "location" : "Williams Lake, BC"
  }
};
//
// Work object
//

var work = {
  "jobs" : [
    {
      "employer" : "Williams Lake Fire Department",
      "title" : "Firefighter",
      "date" : {
        "start" : "March, 2011",
        "end" : "current"
      },
      "location" : "Williams Lake,BC",
      "description" : "Professional Firefighter NFPA 1001 certification."
    },
    {// ToDo: finish adding work experience
      "employer" : "Grindcom (Self-Employed)",
      "title" : "CEO, System Architect",
      "date" : {
        "start" : "March, 2006",
        "end" : "June, 2015"
      },
      "location" : "Williams Lake,BC",
      "description" : "Grindcom was focused on research and development of a measurement and control system for industrial forestry equipment.  Operationaly I was the system architect, software and hardware developer.  Managing this business included maintaining the R&D budget; utilizing Canadian federal programs such as SR&ED and IRAP."
    },
    {// ToDo: finish adding work experience
      "employer" : "Attending DeVry",
      "title" : "Student",
      "date" : {
        "start" : "March, 2003",
        "end" : "Fegruary, 2006"
      },
      "location" : "Calgary,AB",
      "description" : "Persue degree in computer engineering technology."
    },
    {// ToDo: finish adding work experience
      "employer" : "Tom Ford Logging Ltd.",
      "title" : "Supervisor, Industrial Computer Tech.",
      "date" : {
        "start" : "May, 1999",
        "end" : "February, 2003"
      },
      "location" : "Williams Lake,BC",
      "description" : "Supervise logging operations, administer and maintain measurement and control computers on board heavy equipment."
    },
    {// ToDo: finish adding work experience
      "employer" : "Attend University of Norther British Columbia",
      "title" : "Student, Computer Science",
      "date" : {
        "start" : "September, 1997",
        "end" : "January, 1999"
      },
      "location" : "Prince George,BC",
      "description" : "Study programming languages including C and C++."
    },
    {// ToDo: finish adding work experience
      "employer" : "Attend Okanagan University Collage",
      "title" : "Student, General Studies",
      "date" : {
        "start" : "April, 1996",
        "end" : "April, 1997"
      },
      "location" : "Kelowna,BC",
      "description" : ""
    },
    {// ToDo: finish adding work experience
      "employer" : "Tom Ford Logging Ltd.",
      "title" : "Heavy Equipment Operator",
      "date" : {
        "start" : "June, 1985",
        "end" : "March, 1996"
      },
      "location" : "Williams Lake",
      "description" : "Operating Skidders, Dozers and Log loaders."
    }
  ]

};
//
// Education object
//
var education = {
  "schools" : [
    {
      "name" : "Devry Institute of Technology",
      "degree" : "B.Sc.",
      "major" : "Computer Engineering Technology",
      "yearsAttended" : {
        "start" : "2003",
        "end" : "2006"
      },
      "city" : "Calgary"
    },
    {
      "name" : "University of Norther British Columbia",
      "degree" : "",
      "major" : "Computer Science",
      "yearsAttended" : {
        "start" : "1997",
        "end" : "1999"
      },
      "city" : "Prince George"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "How to Use Git and GitHub",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
    },
    {
      "title" : "Responsive Web Design Fundamentals",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title" : "JavaScript Basics",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    },
    {
      "title" : "Intro to HTML and CSS",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title" : "Responsive Images",
      "school" : "Udacity",
      "dates" : 2016,
      "url" : "https://www.udacity.com/course/responsive-images--ud882"
    }
  ]
};
//
// Projects object
//
var projects = {
  "projects" : [
    {
      "title" : "Portfolio",
      "dates" : {
        "start" : "September, 2016",
        "end" : "September, 2016"
      },
      "description" : "A projects portfolio, created for the Front End Developer nanodegree.",
      "images" : [{
        "url" : ""
      }]
    }
  ]

}
projects.display = function(){
  // set up variables
  var frmTitle = "";
  var frmDate = "";
  var frmDescrip = "";
  var frmImage = "";
  var frmConcat = "";
  // iterate through all projects and place them in the projects div
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
    frmTitle = HTMLprojectTitle.replace("%data%",project.title);
    frmDate = HTMLprojectDates.replace("%data%",project.dates.start + " - " + project.dates.end);
    frmDescrip = HTMLprojectDescription.replace("%data%",project.description);
    frmImage = HTMLprojectImage.replace("%data%",project.images[0].url);
    frmConcat = frmTitle + frmDate + frmDescrip + frmImage;
    $(".project-entry:last").append(frmConcat);
  });
}
//
// Format information
//
// format bio
var formattedName = HTMLheaderName.replace("%data%",bio.bioname);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.message);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);
// format education


// Add to header
//  Use prepend to put it at the start of the header area
$("#header").prepend(formattedMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
//
// Add skills
//
// If there are skills listed add them
if(bio.skills.length > 0)
{
  // Add skills to html
  $("#header").append(HTMLskillsStart);
  //
  var formattedSkill = "";
  var i = 0;
  do{
    formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills:last").append(formattedSkill);
    i++;
  }while(i < bio.skills.length);

}
//
// Add work experience
//
function displayWork(){
  var formattedEmployer = "";
  var formattedTitle = "";
  var formattedConcat = "";
  var formattedDates = "";
  var formattedDescrip = "";

  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title.bold());
    formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].date.start + " - " + work.jobs[job].date.end);
    formattedDescrip = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    formattedConcat = formattedEmployer + formattedTitle + formattedDates + formattedDescrip;
    $(".work-entry:last").append(formattedConcat);
  }
}
if(work.jobs.length > 0){
  displayWork();
}
//
// Add projects
//
projects.display();
//
// Add Education
//

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

// function locationizer(arr){
//   arr.forEach(function(thing){
//
//   });
// }
